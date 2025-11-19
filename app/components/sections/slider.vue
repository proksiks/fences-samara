<template>
  <div class="lg:py-15 xl:px-15 px-4 py-16">
    <div class="bg-green-505 md:rounded-[3.125rem] rounded-[1.25rem] md:py-20 md:px-4 py-6 px-2 overflow-hidden">
      <div class="container">
        <div class="text-white">
          <div class="flex md:flex-row flex-col md:items-end justify-between md:gap-0 gap-8">
            <div>
              <div class="flex items-center gap-2.5">
                <div>
                  <nuxt-picture src="/images/icons/cases.svg" />
                </div>
                <div class="uppercase font-bold">Наши проекты</div>
              </div>

              <h2 class="text-[2rem] lg:text-5xl font-medium mt-4 leading-small">Примеры наших работ</h2>
            </div>
            <div class="flex items-center gap-5">
              <button class="main-slider-button-prev md:size-15 size-10 rounded-full flex items-center justify-center cursor-pointer">
                <icon name="name:arrow" class="w-5! h-5! fill-green-505 rotate-180" />
              </button>
              <button class="main-slider-button-next md:size-15 size-10 rounded-full flex items-center justify-center cursor-pointer">
                <icon name="name:arrow" class="w-5! h-5! fill-green-505" />
              </button>
            </div>
          </div>
          <div class="works-slider main-slider mt-8 md:mt-14">
            <div class="swiper-wrapper">
              <div v-for="(img, index) in 7" :key="index" class="swiper-slide">
                <div class="h-full">
                  <nuxt-picture
                    class="block overflow-hidden rounded-[1.25rem] slider-image h-full"
                    :src="`/images/sections/slider/slide-${index + 1}.webp`"
                    alt="Фотография забора с участка"
                    width="594"
                    height="464"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

onMounted(() => {
  const swiper = new Swiper('.works-slider', {
    modules: [Navigation, Pagination],
    grabCursor: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.main-slider-button-next',
      prevEl: '.main-slider-button-prev',
    },
  });

  onBeforeUnmount(() => {
    swiper.destroy();
  });
});
</script>

<style>
@import 'swiper/css';
@import 'swiper/css/navigation';

.main-slider {
  overflow: visible;
}
.main-slider .swiper-slide {
  max-width: 37.125rem;
  height: auto;
}
.main-slider .swiper-slide:not(:last-child) {
  margin-right: 1.5rem;
}
.slider-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main-slider-button-prev,
.main-slider-button-next {
  border: 1px solid var(--color-green-105);
  background-color: var(--color-green-105);
  transition:
    background-color 0.3s,
    border-color 0.3s;
}
.main-slider-button-prev:hover,
.main-slider-button-next:hover {
  border: 1px solid var(--color-green-700);
  background-color: var(--color-green-700);
}
.main-slider-button-prev:active,
.main-slider-button-next:active {
  border: 1px solid var(--color-green-505);
  background-color: var(--color-green-505);
}

.main-slider-button-prev.swiper-button-disabled,
.main-slider-button-next.swiper-button-disabled {
  border: 1px solid #ffffff;
  background-color: transparent;
}
</style>
