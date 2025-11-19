<template>
  <div class="bg-gray-155 md:py-20 py-16">
    <div class="container-small">
      <div class="flex items-center justify-between lg:flex-row flex-col-reverse gap-8">
        <div class="md:max-w-157.5 bg-white md:p-10 p-6 rounded-[1.25rem]">
          <form @submit.prevent="submitForm">
            <div class="flex md:items-center md:flex-row flex-col gap-6 md:gap-7.5">
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
            </div>
            <shared-input
              id="callback-location"
              v-model="formData.district"
              label-text="Район"
              class="flex-1 mt-6 block"
              placeholder="Район"
              icon-name="location"
              :is-error="v$.district.$error"
              :error-text="getErrorText(v$.district)"
            />
            <shared-textarea
              id="callback-textarea"
              v-model="formData.comment"
              label-text="Комментарий"
              class="flex-1 mt-6 block"
              placeholder="Комментарий"
              icon-name="message"
            />

            <shared-button
              class="w-full p-4 rounded-4xl font-medium text-white flex items-center justify-center gap-2 mt-6 group"
              variant="green"
              type="submit"
            >
              Поможем выбрать <icon name="name:arrow" class="w-5! h-5! group-hover:translate-x-1 transition duration-30" />
            </shared-button>

            <span class="text-center text-black/25 block text-xs mt-3">
              Обращаем ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной
              офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса Российской Федерации. Для получения подробной информации о наличии и
              стоимости указанных товаров и (или) услуг, пожалуйста, обращайтесь к менеджерам отдела клиентского обслуживания с помощью специальной формы связи
              или по телефону.
            </span>
          </form>
        </div>
        <div class="max-w-145 px-6 md:px-0">
          <div class="flex items-center gap-2.5">
            <div class="text-sm text-green-505 leading-snug font-bold uppercase">ОСТАВЬТЕ ЗАЯВКУ</div>
            <div>
              <nuxt-picture src="/images/icons/arr.svg" width="52" height="10" />
            </div>
          </div>
          <h2 class="text-[2rem] lg:text-[3rem] font-bold leading-small text-green-505 mt-2.5">Мы оперативно ответим на&nbsp;вопросы</h2>
          <p class="text-gray-205 leading-snug mt-6">
            Оставьте заявку на обратный звонок и получите консультацию специалиста. Вы сможете задать вопросы нашему менеджеру и договориться о дате и времени
            выезда на замер.
          </p>

          <div class="flex items-center gap-6 mt-10">
            <div class="md:block hidden">
              <icon name="name:phone" class="w-6! h-6! bg-green-105! block!" />
            </div>
            <div>
              <div class="text-gray-150 md:block flex items-center gap-3">
                <div class="md:hidden">
                  <icon name="name:phone" class="w-6! h-6! bg-green-105! block!" />
                </div>
                Служба консультации:
              </div>
              <a class="block mt-3 text-lg text-green-505 font-medium hover:underline" href="tel:+79203447027">+7 (920) 344 70 27</a>
            </div>
          </div>
          <div class="flex items-center gap-6 mt-6">
            <div class="md:block hidden">
              <icon name="name:calendar" class="w-6! h-6! bg-green-105! block!" />
            </div>
            <div>
              <div class="text-gray-150 md:block flex items-center gap-3">
                <div class="md:hidden">
                  <icon name="name:calendar" class="w-6! h-6! bg-green-105! block!" />
                </div>
                График работы:
              </div>
              <span class="block mt-3 text-lg text-green-505 font-medium">Ежедневно с 8:00 - 20:00</span>
            </div>
          </div>
          <div class="flex items-center gap-6 mt-6">
            <div class="md:block hidden">
              <icon name="name:location" class="w-6! h-6! bg-green-105! block!" />
            </div>
            <div>
              <div class="text-gray-150 md:block flex items-center gap-3">
                <div class="md:hidden">
                  <icon name="name:location" class="w-6! h-6! bg-green-105! block!" />
                </div>
                Локация:
              </div>
              <a class="block mt-3 text-lg text-green-505 font-medium hover:underline" href="https://yandex.ru/maps/-/CLGpz2oH" target="_blank">
                Самара, 443066, улица 22-го Партсъезда, 44
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="md:mt-40 mt-25">
        <h3 class="text-2xl md:text-[2rem] font-bold leading-small text-green-505 text-center">ОЦЕНИВАЙТЕ СВОИ ФИНАНСОВЫЕ ВОЗМОЖНОСТИ И РИСКИ</h3>
        <p class="mt-6 text-gray-150">
          * Рассрочка — это форма кредита (займа) с оплатой товаров или услуг несколькими частями, при котором проценты по кредиту (займу) частично или
          полностью компенсируется продавцом. Пос-кредит (займ) — это форма кредита (займа), предоставленная непосредственно в точке продаж или на сайте
          интернет-магазина. АО "ТБанк": полная стоимость потребительского кредита (займа) — от 0% до 60% годовых, процентная ставка от 0% до 100%
          годовых,Минимальная сумма - 300 р., максимальная сумма — 500 000 рублей. Срок предоставления — от 3 до 36 месяцев. Условия обслуживания будут
          определены по результатам рассмотрения заявки.
          <a class="underline" href="https://acdn.tinkoff.ru/static/documents/b5802475-a663-4ac2-90b3-aeb7781df0a9.pdf" target="_blank">Подробные условия</a>.
        </p>
      </div>
    </div>
  </div>
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
        // Проверяем, что номер соответствует формату +7 (XXX) XXX-XX-XX
        const phoneRegex = /^\+7\s\(\d{3}\)\s\d{3}s\\d{2}s\\d{2}$/;
        return phoneRegex.test(value);
      }),
    },
    district: {
      required: helpers.withMessage('Район должен быть длиннее 3-х символов', required),
      minLength: helpers.withMessage('Район должен быть длиннее 3-х символов', minLength(4)),
      notOnlySpaces: helpers.withMessage('Район должен быть длиннее 3-х символов', (value: string) => {
        if (!value) return false;
        return value.trim().length >= 4;
      }),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const getErrorText = (field: { $error: boolean; $errors: Array<{ $message: unknown }> }) => {
  if (field.$error && field.$errors.length > 0 && field.$errors[0] && field.$errors[0].$message) {
    return field.$errors[0].$message as string;
  }
  return '';
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    console.log('Форма отправлена', formData);
  }
};
</script>
