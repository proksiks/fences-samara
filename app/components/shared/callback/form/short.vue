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

    <shared-button
      class="w-full p-4 rounded-4xl font-medium text-white flex items-center justify-center gap-2 mt-8 group"
      :class="{ 'opacity-50 cursor-not-allowed': !formData.policyAgreement }"
      variant="green"
      type="submit"
      :disabled="!formData.policyAgreement"
    >
      Отправить заявку <icon name="name:arrow" class="w-5! h-5! group-hover:translate-x-1 transition duration-300" />
    </shared-button>

    <Recaptcha ref="recaptchaRef" @verify="onRecaptchaVerify" @expired="onRecaptchaExpired" @error="onRecaptchaError" />

    <label class="flex items-center gap-4 text-sm text-gray-150 mt-3">
      <span
        class="block size-8 p-1 shrink-0 relative"
        @click="togglePolicyAgreement"
      >
        <input
          id="policy-agreement"
          v-model="formData.policyAgreement"
          class="hidden"
          type="checkbox"
        />
        <span
          class="block size-6 border-2 rounded-sm cursor-pointer transition-colors duration-200"
          :class="[
            formData.policyAgreement ? 'border-green-505 bg-green-505' : 'border-green-505',
            v$.policyAgreement.$error ? 'border-red-500' : ''
          ]"
          @click="togglePolicyAgreement"
        ></span>
        <span
          v-show="formData.policyAgreement"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0.5L4.1 10.5L0.5 6.5" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </span>
      <span class="cursor-pointer" @click="togglePolicyAgreement">Я согласен с политикой конфиденциальности и принимаю пользовательское соглашение</span>
    </label>
    
    <div v-if="v$.policyAgreement.$error" class="text-red-500 text-sm mt-1">
      {{ getErrorText(v$.policyAgreement) }}
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import Recaptcha from '~/components/shared/Recaptcha.vue';

const formData = reactive({
  email: '',
  phone: '',
  comment: '',
  policyAgreement: false,
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

watch(
  () => formData.policyAgreement,
  () => {
    v$.value.policyAgreement.$touch();
  },
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
    policyAgreement: {
      required: helpers.withMessage('Необходимо согласие с политикой конфиденциальности', required),
      mustBeTrue: helpers.withMessage('Необходимо согласие с политикой конфиденциальности', (value: boolean) => value === true),
    },
  };
});

const recaptchaRef = ref<InstanceType<typeof Recaptcha> | null>(null);

const v$ = useVuelidate(rules, formData, { $autoDirty: true });

const getErrorText = (field: { $error: boolean; $errors: Array<{ $message: unknown }> }) => {
  if (field.$error && field.$errors.length > 0 && field.$errors[0] && field.$errors[0].$message) {
    return field.$errors[0].$message as string;
  }
  return '';
};

// Функция для переключения состояния чекбокса
const togglePolicyAgreement = () => {
  formData.policyAgreement = !formData.policyAgreement;
};

// Обработчики событий reCAPTCHA
const onRecaptchaVerify = async (token: string) => {
  try {
    await $fetch('/api/callback', {
      method: 'POST',
      body: {
        email: formData.email,
        phone: formData.phone,
        comment: formData.comment,
        formType: 'short',
        timestamp: new Date().toISOString(),
        recaptchaToken: token,
      },
    });

    // Показываем сообщение об успехе
    alert('Заявка успешно отправлена!');

    // Сбрасываем форму
    formData.email = '';
    formData.phone = '';
    formData.comment = '';
    v$.value.$reset();
  } catch (error: unknown) {
    console.error('Ошибка при отправке формы:', error);
    alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.');
  } finally {
    // Сбрасываем reCAPTCHA
    if (recaptchaRef.value) {
      recaptchaRef.value.reset();
    }
  }
};

const onRecaptchaExpired = () => {
  console.warn('reCAPTCHA token expired');
  alert('Время действия проверки истекло. Пожалуйста, попробуйте отправить форму снова.');
};

const onRecaptchaError = () => {
  console.error('reCAPTCHA verification error');
  alert('Произошла ошибка при проверке. Пожалуйста, попробуйте отправить форму снова.');
};

const submitForm = async (e: Event) => {
  e.preventDefault();
  const result = await v$.value.$validate();
  if (result) {
    recaptchaRef.value?.execute();
  }
};
</script>
