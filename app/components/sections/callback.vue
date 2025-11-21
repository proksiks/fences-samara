<template>
  <div id="callbackForm" class="bg-gray-155 md:py-20 py-16">
    <div class="container-small">
      <div class="flex items-center justify-between lg:flex-row flex-col-reverse gap-8">
        <div class="md:max-w-157.5 bg-white md:p-10 p-6 rounded-[1.25rem]">
          <shared-callback-form />
        </div>
        <div class="max-w-145 px-6 md:px-0">
          <div class="flex items-center gap-2.5">
            <div class="text-sm text-green-505 leading-snug font-bold uppercase">ОСТАВЬТЕ ЗАЯВКУ</div>
            <div>
              <nuxt-picture src="/images/icons/arr.svg" width="52" height="10" alt="Иконка" loading="lazy" />
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
    </div>
  </div>
</template>
