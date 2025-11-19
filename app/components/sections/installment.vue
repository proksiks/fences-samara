<template>
  <div class="bg-gray-105 md:py-24 py-16 overflow-hidden">
    <div class="container-small">
      <div class="flex items-center lg:flex-row flex-col-reverse bg-white rounded-[1.25rem] sm:gap-4">
        <div class="xl:pl-20 xl:pr-0 pr-6 pl-6 py-6 xl:py-16 w-full">
          <h2 class="text-[2rem] sm:text-[3rem] text-green-505 font-medium leading-small sm:text-left text-center">Забор под ключ в&nbsp;рассрочку</h2>
          <p class="text-xs text-gray-205 mt-6 sm:text-left text-center">
            Мы предлагаем заказать установку забора в рассрочку с условиями 0-0-12*, что означает отсутствие первоначального взноса и процентов в первые два
            месяца, а затем равные платежи в течение следующих 12 месяцев*. Это идеальное решение для тех, кто хочет быстро и без лишних затрат обновить свой
            участок.
          </p>
          <div class="flex items-center sm:flex-row flex-col sm:gap-8 gap-4 mt-6">
            <shared-button
              class="sm:w-auto w-full py-4 px-8 rounded-4xl font-medium text-white flex items-center justify-center gap-2 button_shadow group"
              variant="green"
              @click="show = true"
            >
              Поможем выбрать <icon name="name:arrow" class="w-5! h-5! group-hover:translate-x-1 transition duration-300" />
            </shared-button>
            <shared-button
              class="md:w-auto w-full py-4 md:px-8 px-2 rounded-4xl font-bold inline-flex items-center justify-center gap-2 text-green-505 md:text-default text-sm group"
              variant="border"
              tag="a"
              href="tel:+79203447027"
            >
              Звонок <icon name="name:arrow" class="w-5! h-5! fill-green-505! group-hover:translate-x-1 transition duration-300" />
            </shared-button>
          </div>
        </div>
        <div class="xl:shrink-0 sm:px-0 sm:pt-0 px-6 pt-6 xl:max-w-169 lg:max-w-139 w-full">
          <div class="lg:-mr-10 lg:-mt-10 flex justify-center">
            <nuxt-picture src="/images/sections/installment/installment.png" width="676" height="451" alt="Забор под ключ в рассрочку" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { show } = storeToRefs(useCallbackModalStore());
</script>
