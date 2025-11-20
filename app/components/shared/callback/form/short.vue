<template>
  <form @submit.prevent="submitForm">
    <shared-input
      id="short-telegram"
      v-model="formData.email"
      class="block"
      type="email"
      placeholder="Почта"
      icon-name="telegram"
      :is-error="v$.email.$error"
      :error-text="getErrorText(v$.email)"
    />
    <shared-input
      id="short-phone"
      v-model="formData.phone"
      class="block mt-6"
      placeholder="+7 (777) 777 77 77"
      icon-name="phone"
      :is-error="v$.phone.$error"
      :error-text="getErrorText(v$.phone)"
      mask="+7 (000) 000 00 00"
    />
    <shared-textarea id="short-textarea" v-model="formData.comment" class="flex-1 mt-6 block" placeholder="Комментарий" icon-name="message" />

    <shared-button class="w-full p-4 rounded-4xl font-medium text-white flex items-center justify-center gap-2 mt-8 group" variant="green" type="submit">
      Отправить заявку <icon name="name:arrow" class="w-5! h-5! group-hover:translate-x-1 transition duration-300" />
    </shared-button>

    <label class="flex items-center gap-4 text-sm text-gray-150 mt-3">
      <span class="block size-8 p-1 shrink-0 relative">
        <input class="hidden" type="checkbox" />
        <span class="block size-6 border-2 border-green-505 rounded-sm"></span>
        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0.5L4.1 10.5L0.5 6.5" stroke="#034833" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </span>
      <span>Я согласен с политикой конфиденциальности и принимаю пользовательское соглашение</span>
    </label>
  </form>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';

const formData = reactive({
  email: '',
  phone: '',
  comment: '',
});

watch(
  () => formData.email,
  () => {
    v$.value.email.$touch();
  },
);

watch(
  () => formData.phone,
  () => {
    v$.value.phone.$touch();
  },
);

watch(
  () => formData.comment,
  () => {},
);

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('Некорректный email', required),
      email: helpers.withMessage('Некорректный email', email),
    },
    phone: {
      required: helpers.withMessage('Некорректный номер телефона', required),
      validPhone: helpers.withMessage('Некорректный номер телефона', (value: string) => {
        if (!value) return true;

        const phoneRegex = /^\+7\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/;
        return phoneRegex.test(value);
      }),
    },
  };
});

const v$ = useVuelidate(rules, formData, { $autoDirty: true });

const getErrorText = (field: { $error: boolean; $errors: Array<{ $message: unknown }> }) => {
  if (field.$error && field.$errors.length > 0 && field.$errors[0] && field.$errors[0].$message) {
    return field.$errors[0].$message as string;
  }
  return '';
};

const submitForm = async (e: Event) => {
  e.preventDefault();
  const result = await v$.value.$validate();
  if (result) {
    const message = `
      Данные формы:\n
      Почта: ${formData.email}\n
      Номер: ${formData.phone}\n
      Комментарий: ${formData.comment || 'Не указан'}
    `;
    alert(message);
  }
};
</script>
