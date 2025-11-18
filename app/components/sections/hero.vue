<template>
  <div class="bg-gray-105 pt-10 md:pt-14 pb-16 md:pb-20">
    <div class="container">
      <div class="flex xl:flex-row flex-col gap-6 xl:gap-7.5">
        <div class="xl:max-w-102.5 bg-white py-10 md:px-6 px-4 rounded-[1.25rem]">
          <h1 class="text-2xl md:text-[2rem] text-green-505 font-medium md:text-left text-center">
            Установка забора под&nbsp;ключ в Самаре и&nbsp;Самарской области
          </h1>
          <p class="mt-6 md:mt-10 text-gray-205 leading-snug md:text-left text-center">
            В нашей компании «Забор163» вы можете заказать металлический забор любой сложности. Изготовим забор под ключ, обеспечивая надежные решения для
            вашего дома или дачи.
          </p>

          <div class="flex justify-center items-center my-8 md:my-15 gap-2">
            <div>
              <nuxt-picture class="md:max-w-auto max-w-15 block" src="/images/pages/main/prize.png" width="111" height="92" alt="prize" loading="lazy" />
            </div>
            <div>
              <h2 class="text-green-505 font-bold text-lg">Выезд и замер бесплатно</h2>
              <p class="text-gray-150 underline font-light">При оформлении заказа!*</p>
            </div>
          </div>

          <div class="md:mt-15">
            <shared-button class="w-full p-4 rounded-4xl font-medium text-white flex items-center justify-center gap-2 button_shadow" variant="green">
              Заказать звонок <icon name="name:arrow" class="w-5! h-5!" />
            </shared-button>
          </div>
        </div>

        <div class="flex xl:flex-col flex-col-reverse gap-6 xl:gap-7.5">
          <div class="rounded-3xl bg-white flex md:flex-row flex-col-reverse md:gap-4 xl:gap-15">
            <div class="flex flex-col items-center md:items-start xl:py-8 xl:px-8 md:py-10 py-8 px-6 md:text-left text-center">
              <div class="w-18 h-18 bg-green-105 rounded-full flex items-center justify-center">
                <nuxt-picture src="/images/icons/fence.svg" width="42" height="42" alt="Иконка забора" loading="lazy" />
              </div>
              <h3 class="text-xl font-medium mt-6">Персональный подход</h3>
              <p class="my-3 text-gray-150">Разработаем индивидуальный план проекта, учитывая ваши пожелания и особенности участка.</p>

              <shared-button
                class="md:w-auto w-full mt-auto py-4 md:px-8 px-2 rounded-4xl font-medium inline-flex items-center justify-center gap-2 text-green-505 md:text-default text-sm"
                variant="border"
              >
                Получить обратный звонок <icon name="name:arrow" class="w-5! h-5! fill-green-505" />
              </shared-button>
            </div>
            <div class="shrink-0 flex justify-center">
              <nuxt-picture
                class="block rounded-tr-2xl md:rounded-br-2xl rounded-tl-2xl md:rounded-tl-none overflow-hidden"
                src="/images/pages/main/fence.jpg"
                width="420"
                height="363"
                alt="Зелёный забор"
              />
            </div>
          </div>
          <div class="md:py-14 md:px-14 py-10 px-4 rounded-3xl bg-gray-155">
            <ul class="flex md:flex-row flex-col items-center justify-center gap-6 xl:gap-16 text-green-505 md:text-left text-center">
              <li>
                <p class="text-5xl leading-small font-bold">5000+</p>
                <h4>
                  Метров забора <br class="md:block hidden" />
                  установленно
                </h4>
              </li>
              <li>
                <p class="text-5xl leading-small font-bold">20+</p>
                <h4>
                  Человек <br class="md:block hidden" />
                  в команде
                </h4>
              </li>
              <li>
                <p class="text-5xl leading-small font-bold">5 лет</p>
                <h4>
                  Срок <br class="md:block hidden" />
                  службы
                </h4>
              </li>
              <li>
                <p class="text-5xl leading-small font-bold">100+</p>
                <h4>
                  Выполненных <br class="md:block hidden" />
                  заказов
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
