<template>
  <div class="bg-gray-105 pb-16 md:pb-20">
    <div class="container">
      <shared-breadcrumbs :custom-crumbs="breadcrumbs" />
      <div class="flex xl:flex-row flex-col gap-6 xl:gap-7.5">
        <div class="flex xl:flex-col flex-col-reverse gap-6 xl:gap-7.5 w-full">
          <div class="rounded-3xl bg-white flex md:flex-row flex-col-reverse md:gap-4">
            <div class="max-w-133 flex flex-col items-center md:items-start pl-10 py-10 md:text-left text-center">
              <slot />

              <div class="flex justify-center items-center gap-2">
                <div>
                  <nuxt-picture class="md:max-w-none max-w-20 block" src="/images/pages/main/prize.png" width="91" height="91" alt="prize" loading="lazy" />
                </div>
                <div>
                  <h2 class="text-green-505 font-bold text-lg">Выезд и замер бесплатно</h2>
                  <p class="text-gray-150 underline font-light">При оформлении заказа!*</p>
                </div>
              </div>
            </div>
            <div class="flex-1 flex justify-center lg:justify-end">
              <nuxt-picture
                class="catalog-hero-image block rounded-tr-2xl md:rounded-br-2xl rounded-tl-2xl md:rounded-tl-none overflow-hidden w-full"
                :src="image"
                width="420"
                height="420"
                alt="Зелёный забор"
                loading="lazy"
              />
            </div>
          </div>
          <div class="md:py-7 md:px-14 px-4 rounded-3xl bg-gray-155">
            <ul class="flex md:flex-row flex-col justify-center gap-6 xl:gap-16 text-green-505 md:text-left text-center">
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
                <p class="text-5xl leading-small font-bold">1 год</p>
                <h4>Гарантия</h4>
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
        <div class="xl:max-w-102.5 bg-white py-10 md:px-6 px-4 rounded-[1.25rem]">
          <h2 class="text-[1.75rem] text-green-505 text-center font-medium">Оставить заявку</h2>
          <shared-callback-form-short class="mt-10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  image: string;
  breadcrumbs?: { title: string; to?: string }[];
}
defineProps<Props>();
</script>

<style>
.catalog-hero-image img {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
}
</style>
