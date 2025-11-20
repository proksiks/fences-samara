<template>
  <div class="py-10 px-4 2xl:px-15">
    <div class="bg-gray-155 rounded-[1.25rem] xl:py-20 py-6 relative overflow-hidden">
      <nuxt-picture
        class="absolute top-0 left-0 w-full h-full"
        src="/images/sections/stages/stages-bg.svg"
        width="1800"
        height="788"
        alt="Декоративные линии"
        loading="lazy"
      />
      <div class="container relative">
        <div class="flex md:items-end md:justify-between md:flex-row flex-col gap-4">
          <div class="max-w-150">
            <div>
              <div class="flex items-center gap-2.5">
                <div>
                  <nuxt-picture class="md:max-w-none max-w-10" src="/images/icons/fence-green.svg" alt="Иконка" width="24" height="24" loading="lazy" />
                </div>
                <div class="uppercase font-bold text-green-505">Этапы работы</div>
              </div>
            </div>
            <h2 class="text-[2rem] lg:text-[2.5rem] font-medium mt-4 leading-small text-green-505">Этапы работы по установке забора из профнастила</h2>
          </div>
          <div>
            <p class="max-w-100 text-gray-205">
              При заказе забора в нашей компании вы получите специальный подарок на ваш выбор: от декоративных элементов до бесплатной консультации с
              ландшафтным дизайнером.
            </p>
          </div>
        </div>
        <div class="grid md:grid-cols-2 xl:grid-cols-3 mt-6 md:mt-14 gap-6 2xl:gap-x-15 2xl:gap-y-10">
          <div class="bg-white rounded-[1.25rem] p-2.5 flex items-center gap-4">
            <div class="bg-green-105 rounded-[0.625rem] flex items-center justify-center md:py-13 py-8.5 md:px-12 px-7.5 relative">
              <span class="leading-none absolute md:top-3 md:left-3 top-2 left-2 text-transparent md:text-[1.875rem] text-[1.25rem] font-bold number-stroke"
                >01</span
              >
              <nuxt-picture class="md:max-w-none max-w-10" src="/images/icons/doc-checkmark.svg" alt="Иконка" width="64" height="64" loading="lazy" />
            </div>
            <div>
              <h3 class="md:text-[1.375rem] leading-snug font-medium text-green-505">
                Оформление <br class="hidden xl:block" />
                заявки
              </h3>
              <p class="text-gray-205 leading-snug mt-3 md:text-default text-sm">
                Заявка через сайт <br class="hidden xl:block" />
                или по телефону
              </p>
            </div>
          </div>
          <div class="bg-white rounded-[1.25rem] p-2.5 flex items-center gap-4">
            <div class="bg-green-105 rounded-[0.625rem] flex items-center justify-center md:py-13 py-8.5 md:px-12 px-7.5 relative">
              <span class="leading-none absolute md:top-3 md:left-3 top-2 left-2 text-transparent md:text-[1.875rem] text-[1.25rem] font-bold number-stroke"
                >02</span
              >
              <nuxt-picture class="md:max-w-none max-w-10" src="/images/icons/measurement.svg" alt="Иконка" width="64" height="64" loading="lazy" />
            </div>
            <div>
              <h3 class="md:text-[1.375rem] leading-snug font-medium text-green-505">
                Бесплатная <br class="hidden xl:block" />
                замерка
              </h3>
              <p class="text-gray-205 leading-snug mt-3 md:text-default text-sm">
                Бесплатный <br class="hidden xl:block" />
                выезд замерщика <br class="hidden xl:block" />
                на ваш участок
              </p>
            </div>
          </div>
          <div class="bg-white rounded-[1.25rem] p-2.5 flex items-center gap-4">
            <div class="bg-green-105 rounded-[0.625rem] flex items-center justify-center md:py-13 py-8.5 md:px-12 px-7.5 relative">
              <span class="leading-none absolute md:top-3 md:left-3 top-2 left-2 text-transparent md:text-[1.875rem] text-[1.25rem] font-bold number-stroke"
                >03</span
              >
              <nuxt-picture class="md:max-w-none max-w-10" src="/images/icons/doc-success.svg" alt="Иконка" width="64" height="64" loading="lazy" />
            </div>
            <div>
              <h3 class="md:text-[1.375rem] leading-snug font-medium text-green-505">
                Подписание <br class="hidden xl:block" />
                документации
              </h3>
              <p class="text-gray-205 leading-snug mt-3 md:text-default text-sm">
                Составляем смету <br class="hidden xl:block" />
                и подписываем договор
              </p>
            </div>
          </div>
          <div class="bg-white rounded-[1.25rem] p-2.5 flex items-center gap-4">
            <div class="bg-green-105 rounded-[0.625rem] flex items-center justify-center md:py-13 py-8.5 md:px-12 px-7.5 relative">
              <span class="leading-none absolute md:top-3 md:left-3 top-2 left-2 text-transparent md:text-[1.875rem] text-[1.25rem] font-bold number-stroke"
                >04</span
              >
              <nuxt-picture class="md:max-w-none max-w-10" src="/images/icons/delivery-truck.svg" alt="Иконка" width="64" height="64" loading="lazy" />
            </div>
            <div>
              <h3 class="md:text-[1.375rem] leading-snug font-medium text-green-505">
                Доставка <br class="hidden xl:block" />
                материалов
              </h3>
              <p class="text-gray-205 leading-snug mt-3 md:text-default text-sm">
                Доставим материалы <br class="hidden xl:block" />
                на ваш участок
              </p>
            </div>
          </div>
          <div class="bg-white rounded-[1.25rem] p-2.5 flex items-center gap-4">
            <div class="bg-green-105 rounded-[0.625rem] flex items-center justify-center md:py-13 py-8.5 md:px-12 px-7.5 relative">
              <span class="leading-none absolute md:top-3 md:left-3 top-2 left-2 text-transparent md:text-[1.875rem] text-[1.25rem] font-bold number-stroke"
                >05</span
              >
              <nuxt-picture class="md:max-w-none max-w-10" src="/images/icons/worker.svg" alt="Иконка" width="64" height="64" loading="lazy" />
            </div>
            <div>
              <h3 class="md:text-[1.375rem] leading-snug font-medium text-green-505">
                Рабочий <br class="hidden xl:block" />
                процесс
              </h3>
              <p class="text-gray-205 leading-snug mt-3 md:text-default text-sm">
                Монтаж забора из <br class="hidden xl:block" />
                профлиста и столбов <br class="hidden xl:block" />
                под ключ (1–3 дня)
              </p>
            </div>
          </div>
          <div class="bg-white rounded-[1.25rem] p-2.5 flex items-center gap-4">
            <div class="bg-green-105 rounded-[0.625rem] flex items-center justify-center md:py-13 py-8.5 md:px-12 px-7.5 relative">
              <span class="leading-none absolute md:top-3 md:left-3 top-2 left-2 text-transparent md:text-[1.875rem] text-[1.25rem] font-bold number-stroke"
                >03</span
              >
              <nuxt-picture class="md:max-w-none max-w-10" src="/images/icons/ok-finger.svg" alt="Иконка" width="64" height="64" loading="lazy" />
            </div>
            <div>
              <h3 class="md:text-[1.375rem] leading-snug font-medium text-green-505">
                Приемка <br class="hidden xl:block" />
                работ
              </h3>
              <p class="text-gray-205 leading-snug mt-3 md:text-default text-sm">
                Вы принимаете работу <br class="hidden xl:block" />
                и получаете гарантию <br class="hidden xl:block" />
                на 1 год
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.number-stroke {
  -webkit-text-stroke: 1px #fff;
}
</style>
