<template>
  <div class="md:py-20 py-16">
    <div class="container">
      <div class="flex justify-between gap-8 lg:flex-row flex-col-reverse">
        <div class="lg:flex hidden lg:justify-start justify-center shrink-0 gap-7.5">
          <div>
            <div>
              <nuxt-picture
                class="overflow-hidden rounded-3xl block"
                quality="5"
                loading="lazy"
                alt="Серый забор"
                width="300"
                height="470"
                src="/images/sections/recommended/1.jpg"
              />
            </div>
            <div class="flex items-center gap-4 px-4.5 mt-7">
              <div>
                <div class="flex items-center justify-center bg-green-105 rounded-full size-13.75">
                  <nuxt-picture src="/images/icons/call.svg" width="24" height="24" alt="Позвонить" loading="lazy" />
                </div>
              </div>
              <div class="leading-small">
                <div class="text-green-505 font-medium">Нужна помощь?</div>
                <a class="block mt-2 text-lg text-green-505 font-bold hover:underline" href="tel:+79203447027">+7 (920) 344 70 27</a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <nuxt-picture
                class="overflow-hidden rounded-[1.25rem] block"
                src="/images/sections/recommended/2.jpg"
                quality="20"
                width="270"
                height="181"
                alt="Коричневый забор"
                loading="lazy"
              />
            </div>
            <div class="mt-7.5"><nuxt-picture src="/images/sections/recommended/3.png" quality="20" width="270" height="353" alt="Чёрный забор" loading="lazy" /></div>
          </div>
        </div>
        <div class="lg:hidden flex flex-col lg:items-center">
          <div>
            <nuxt-picture class="recommended-image" src="/images/sections/recommended/1_m.jpg" quality="20" width="358" height="240" alt="Серый забор" loading="lazy" />
          </div>
          <div class="mt-10">
            <nuxt-picture class="recommended-image" src="/images/sections/recommended/3.png" quality="20" width="358" height="468" alt="Коричневый забор" loading="lazy" />
          </div>
          <div class="mt-10">
            <nuxt-picture class="recommended-image" src="/images/sections/recommended/1.jpg" quality="20" width="358" height="558" alt="Чёрный забор" loading="lazy" />
          </div>
          <div class="flex items-center gap-4 px-4.5 mt-7">
            <div>
              <div class="flex items-center justify-center bg-green-105 rounded-full size-13.75">
                <nuxt-picture src="/images/icons/call.svg" width="24" height="24" alt="Позвонить" loading="lazy" />
              </div>
            </div>
            <div class="leading-small">
              <div class="text-green-505 font-medium">Нужна помощь?</div>
              <a class="block mt-2 text-lg text-green-505 font-bold hover:underline" href="tel:+79203447027">+7 (920) 344 70 27</a>
            </div>
          </div>
        </div>

        <div class="flex-1 lg:max-w-157.5">
          <div class="flex items-center gap-2.5">
            <div class="text-sm text-green-505 leading-snug font-bold uppercase">Отвечаем на вопросы</div>
            <div>
              <nuxt-picture src="/images/icons/arr.svg" width="52" height="10" alt="Иконка" loading="lazy" />
            </div>
          </div>
          <h2 class="text-[2rem] lg:text-[3rem] font-bold leading-small text-green-505 mt-2.5">Почему выбирают нас?</h2>

          <div>
            <div class="mt-10">
              <div>
                <shared-accordion :active="activeAccordion === 'accordion1'" @activate="setActiveAccordion('accordion1')">
                  <template #title>Под ключ</template>
                  <template #content>
                    <p class="text-gray-205 leading-snug">
                      Мы самостоятельно проводим все этапы работы: от замера до конечного монтажа забора и сдачи проекта.
                    </p>
                  </template>
                </shared-accordion>
              </div>
              <div class="mt-6">
                <shared-accordion :active="activeAccordion === 'accordion2'" @activate="setActiveAccordion('accordion2')">
                  <template #title>Сертификат гарантии</template>
                  <template #content>
                    <p class="text-gray-205 leading-snug">
                      Даем гарантию на изделие и монтаж на 1 год, чтобы вы чувствовали уверенность в качестве выполненной работы. Все это время мы остаемся с
                      вами на связи и готовы бесплатно помочь в возникшей ситуации.
                    </p>
                  </template>
                </shared-accordion>
              </div>
              <div class="mt-6">
                <shared-accordion :active="activeAccordion === 'accordion3'" @activate="setActiveAccordion('accordion3')">
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

<script setup lang="ts">
const activeAccordion = ref('accordion1')

function setActiveAccordion(accordionId: string) {
  activeAccordion.value = accordionId
}
</script>

<style>
.recommended-image img {
  width: 100%;
  object-position: center;
  object-fit: cover;
  max-height: 26.25rem;
  border-radius: 1.25rem;
}
</style>
