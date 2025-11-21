<template>
  <div ref="recaptchaContainer" class="g-recaptcha" data-size="invisible"></div>
</template>

<script setup lang="ts">
interface RecaptchaOptions {
  sitekey: string;
  size: string;
  callback: (token: string) => void;
  'expired-callback': () => void;
  'error-callback': () => void;
}

interface RecaptchaInstance {
  render: (container: HTMLElement | null, options: RecaptchaOptions) => number;
  execute: (widgetId: number) => void;
  reset: (widgetId: number) => void;
}

declare global {
  interface Window {
    grecaptcha: RecaptchaInstance;
  }
}

const config = useRuntimeConfig();
const recaptchaSiteKey = config.recaptchaSiteKey;

const recaptchaContainer = ref<HTMLElement | null>(null);
const recaptchaWidgetId = ref<number | null>(null);

// Загрузка скрипта reCAPTCHA
onMounted(async () => {
  if (!recaptchaSiteKey) {
    console.error('reCAPTCHA site key is not configured');
    return;
  }

  // Проверяем, загружен ли уже скрипт
  if (!window.grecaptcha) {
    await loadRecaptchaScript();
  }

  // Инициализируем виджет
  if (window.grecaptcha) {
    const options: RecaptchaOptions = {
      sitekey: recaptchaSiteKey as string,
      size: 'invisible',
      callback: (token: string) => {
        // Вызываем событие при успешной проверке
        emit('verify', token);
      },
      'expired-callback': () => {
        // Вызываем событие при истечении срока действия токена
        emit('expired');
      },
      'error-callback': () => {
        // Вызываем событие при ошибке
        emit('error');
      },
    };

    recaptchaWidgetId.value = window.grecaptcha.render(recaptchaContainer.value, options);
  }
});

// Функция для загрузки скрипта reCAPTCHA
function loadRecaptchaScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Проверяем, существует ли уже скрипт
    if (document.querySelector('script[src*="recaptcha"]')) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
    document.head.appendChild(script);
  });
}

// Метод для выполнения проверки reCAPTCHA
const execute = () => {
  if (recaptchaWidgetId.value !== null && window.grecaptcha) {
    window.grecaptcha.execute(recaptchaWidgetId.value);
  }
};

// Метод для сброса reCAPTCHA
const reset = () => {
  if (recaptchaWidgetId.value !== null && window.grecaptcha) {
    window.grecaptcha.reset(recaptchaWidgetId.value);
  }
};

// Определяем emit
const emit = defineEmits(['verify', 'expired', 'error']);

// Экспортируем методы для использования в родительском компоненте
defineExpose({
  execute,
  reset,
});
</script>
