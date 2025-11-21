<template>
  <form @submit.prevent="submitForm">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7.5">
      <shared-input
        id="callback-telegram"
        v-model="formData.email"
        label-text="Почта"
        class="flex-1"
        type="email"
        placeholder="Почта"
        icon-name="telegram"
        :is-error="v$.email.$error"
        :error-text="getErrorText(v$.email)"
      />
      <shared-input
        id="callback-phone"
        v-model="formData.phone"
        label-text="Номер"
        class="flex-1"
        placeholder="+7 (777) 777 77 77"
        icon-name="phone"
        :is-error="v$.phone.$error"
        :error-text="getErrorText(v$.phone)"
        mask="+7 (000) 000 00 00"
      />
      <shared-input
        id="callback-location"
        v-model="formData.district"
        label-text="Район"
        class="flex-1"
        placeholder="Район"
        icon-name="location"
        :is-error="v$.district.$error"
        :error-text="getErrorText(v$.district)"
      />
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <shared-textarea
        id="callback-textarea"
        v-model="formData.comment"
        label-text="Комментарий"
        class="flex-1 lg:col-span-2"
        placeholder="Комментарий"
        icon-name="message"
      />
      <div class="flex items-end">
        <shared-button class="w-full p-4 rounded-4xl font-medium text-white flex items-center justify-center gap-2 sm:mt-6 group" variant="green" type="submit">
          Поможем выбрать <icon name="name:arrow" class="w-5! h-5! group-hover:translate-x-1 transition duration-300" />
        </shared-button>
      </div>
    </div>

    <span class="text-center text-black/25 block text-xs mt-6">
      Нажимая кнопку «Отправить» я ознакомился с политикой конфиденциальности и принимаю пользовательское соглашение
    </span>
  </form>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, helpers } from '@vuelidate/validators';

const formData = reactive({
  email: '',
  phone: '',
  district: '',
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
  () => formData.district,
  () => {
    v$.value.district.$touch();
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
    district: {
      required: helpers.withMessage('Район должен быть длиннее 3-х символов', required),
      minLength: helpers.withMessage('Район должен быть длиннее 3-х символов', minLength(4)),
      notOnlySpaces: helpers.withMessage('Район должен быть длиннее 3-х символов', (value: string) => {
        if (!value) return true;
        return value.trim().length >= 4;
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
    try {
      await $fetch('/api/callback', {
        method: 'POST',
        body: {
          email: formData.email,
          phone: formData.phone,
          district: formData.district,
          comment: formData.comment,
          formType: 'promo',
          timestamp: new Date().toISOString()
        }
      });
      
      // Показываем сообщение об успехе
      alert('Заявка успешно отправлена!');
      
      // Сбрасываем форму
      formData.email = '';
      formData.phone = '';
      formData.district = '';
      formData.comment = '';
      v$.value.$reset();
    } catch (error: unknown) {
      console.error('Ошибка при отправке формы:', error);
      alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.');
    }
  }
};
</script>
