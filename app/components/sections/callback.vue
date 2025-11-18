<template>
  <div class="bg-gray-155 md:py-20 py-16">
    <div class="container-small">
      <div class="flex items-center justify-between lg:flex-row flex-col-reverse gap-8">
        <div class="md:min-w-157.5 bg-white md:p-10 p-6 rounded-[1.25rem]">
          <form>
            <div class="flex md:items-center md:flex-row flex-col gap-6 md:gap-7.5">
              <shared-input id="callback-telegram" label-text="Почта" class="flex-1" placeholder="Почта" icon-name="telegram" />
              <shared-input id="callback-phone" label-text="Номер" class="flex-1" placeholder="Номер" icon-name="phone" />
            </div>
            <shared-input id="callback-location" label-text="Район" class="flex-1 mt-6 block" placeholder="Район" icon-name="location" />
            <shared-textarea id="callback-textarea" label-text="Комментарий" class="flex-1 mt-6 block" placeholder="Комментарий" icon-name="message" />

            <shared-button class="w-full p-4 rounded-4xl font-medium text-white flex items-center justify-center gap-2 mt-6" variant="green">
              Поможем выбрать <icon name="name:arrow" class="w-5! h-5!" />
            </shared-button>

            <span class="text-center text-black/25 block text-xs mt-3 max-w-102.5 mx-auto">
              Нажимая кнопку «Отправить» я ознакомился с политикой конфиденциальности и принимаю пользовательское соглашение
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
              <span class="block mt-3 text-lg text-green-505 font-medium">09:00 - 18:00 СБ, ВС - выходные</span>
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
          годовых,Минимальная сумма - 3000 р., максимальная сумма — 500 000 рублей. Срок предоставления — от 3 до 36 месяцев. Условия обслуживания будут
          определены по результатам рассмотрения заявки. <nuxt-link class="underline" to="/">Подробные условия</nuxt-link>.
        </p>
      </div>
    </div>
  </div>
</template>
