<template>
  <div class="flex items-center lg:flex-row flex-col-reverse gap-6 lg:gap-20">
    <div class="md:px-0 px-6">
      <h2 class="text-[2rem] leading-small font-medium text-green-505">Почему выбирают заборы из профлиста</h2>
      <ul class="mt-6">
        <li class="relative pl-6 mt-3 text-gray-150 text-lg">
          <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
          <span class="text-green-105">Долговечность:</span> Забор из профнастила с металлическими столбами устойчив к коррозии, погодным условиям и
          механическим повреждениям.
        </li>
        <li class="relative pl-6 mt-3 text-gray-150 text-lg">
          <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
          <span class="text-green-105">Эстетика:</span> Широкая цветовая палитра позволит выбрать любой оттенок на ваш вкус.
        </li>
        <li class="relative pl-6 mt-3 text-gray-150 text-lg">
          <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
          <span class="text-green-105">Цена:</span> Забор из профлиста – оптимальный выбор для бюджета, баланс цены и качества с прозрачным расчетом стоимости.
        </li>
        <li class="relative pl-6 mt-3 text-gray-150 text-lg">
          <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
          <span class="text-green-105">Быстрая установка:</span> Монтаж забора из профлиста выполняется в кратчайшие сроки, обычно до 3 дней.
        </li>
      </ul>
      <div class="flex items-center sm:flex-row flex-col sm:gap-8 gap-4 mt-6">
        <shared-button
          class="md:w-auto w-full py-4 px-8 rounded-4xl font-medium text-white flex items-center justify-center gap-2 button_shadow group"
          variant="green"
          @click="callbackModalStore.open"
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
    <div class="xl:shrink-0">
      <div class="relative">
        <span class="absolute w-full h-full -left-10 -bottom-10 bg-gray-155 rounded-[1.25rem] lg:block hidden"></span>
        <nuxt-picture
          class="catalog-feature-image relative"
          src="/images/pages/catalog/profiled-flooring/2.png"
          width="594"
          height="573"
          alt="Чёрный забор"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const callbackModalStore = useCallbackModalStore();
</script>

<style>
@media (max-width: 1023px) {
  .catalog-feature-image img {
    border-radius: 1.25rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 22.5rem;
  }
}
</style>
