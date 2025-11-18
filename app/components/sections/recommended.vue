<template>
  <div class="md:py-20 py-16">
    <div class="container">
      <div class="flex justify-between gap-8 lg:flex-row flex-col-reverse">
        <div class="lg:flex hidden lg:justify-start justify-center shrink-0 gap-7.5">
          <div>
            <div><nuxt-picture src="/images/sections/recommended/1.jpg" width="300" height="468" /></div>
            <div class="flex items-center gap-4 px-4.5 mt-7">
              <div>
                <div class="flex items-center justify-center bg-green-105 rounded-full size-13.75">
                  <nuxt-picture src="/images/icons/call.svg" width="24" height="24" alt="Позвонить" />
                </div>
              </div>
              <div class="leading-small">
                <div class="text-green-505 font-medium">Нужна помощь?</div>
                <a class="block mt-2 text-lg text-green-505 font-medium" href="tel:+79203447027">+7 (920) 344 70 27</a>
              </div>
            </div>
          </div>
          <div>
            <div><nuxt-picture src="/images/sections/recommended/2.jpg" width="270" height="181" /></div>
            <div class="mt-7.5"><nuxt-picture src="/images/sections/recommended/3.jpg" width="270" height="353" /></div>
          </div>
        </div>
        <div class="lg:hidden flex flex-col items-center">
          <div><nuxt-picture src="/images/sections/recommended/1_m.jpg" width="358" height="240" /></div>
          <div class="mt-10"><nuxt-picture src="/images/sections/recommended/2_m.jpg" width="358" height="468" /></div>
          <div class="mt-10"><nuxt-picture src="/images/sections/recommended/3_m.jpg" width="358" height="558" /></div>
          <div class="flex items-center gap-4 px-4.5 mt-7">
            <div>
              <div class="flex items-center justify-center bg-green-105 rounded-full size-13.75">
                <nuxt-picture src="/images/icons/call.svg" width="24" height="24" alt="Позвонить" />
              </div>
            </div>
            <div class="leading-small">
              <div class="text-green-505 font-medium">Нужна помощь?</div>
              <a class="block mt-2 text-lg text-green-505 font-medium" href="tel:+79203447027">+7 (920) 344 70 27</a>
            </div>
          </div>
        </div>

        <div class="flex-1 lg:max-w-157.5">
          <div class="flex items-center gap-2.5">
            <div class="text-sm text-green-505 leading-snug font-bold uppercase">Отвечаем на вопросы</div>
            <div>
              <nuxt-picture src="/images/icons/arr.svg" width="52" height="10" />
            </div>
          </div>
          <h2 class="text-[2rem] lg:text-[3rem] font-bold leading-small text-green-505 mt-2.5">Почему выбирают нас?</h2>

          <div>
            <div class="mt-10">
              <div>
                <shared-accordion>
                  <template #title>Под ключ</template>
                  <template #content>
                    <p class="text-gray-205 leading-snug">
                      Мы самостоятельно проводим все этапы работы: от замера до конечного монтажа забора и сдачи проекта.
                    </p>
                  </template>
                </shared-accordion>
              </div>
              <div class="mt-6">
                <shared-accordion>
                  <template #title>Сертификат гарантии</template>
                  <template #content>
                    <p class="text-gray-205 leading-snug">
                      Мы самостоятельно проводим все этапы работы: от замера до конечного монтажа забора и сдачи проекта.
                    </p>
                  </template>
                </shared-accordion>
              </div>
              <div class="mt-6">
                <shared-accordion>
                  <template #title>Команда профессионалов</template>
                  <template #content>
                    <p class="text-gray-205 leading-snug">
                      Всю работу над проектом выполняет наша собственная команда, имеющая большой опыт в монтаже заборов под ключ. Мы реализуем проекты любой
                      сложности и учитываем любые пожелания клиента.
                    </p>
                  </template>
                </shared-accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
