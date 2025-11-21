<template>
  <div class="lg:py-15 py-16 overflow-hidden flex flex-col items-end pl-4">
    <div class="container">
      <div>
        <div class="flex items-center gap-2.5">
          <div>
            <nuxt-picture src="/images/icons/fence-green.svg" alt="Иконка" width="24" height="24" loading="lazy" />
          </div>
          <div class="uppercase font-bold text-green-505">цветовая палитра</div>
        </div>

        <h2 class="text-[2rem] lg:text-[2.5rem] font-medium mt-4 leading-small text-green-505">Готовые работы заборов из профнастила</h2>
        <p class="text-gray-150 md:text-[1.5rem] mt-8">
          Ознакомьтесь с нашими проектами заборов из профнастила на ленточном фундаменте в Самаре и Самарской области. Мы предлагаем разнообразные дизайны – от
          классических до современных – с акцентом на качество и долговечность. Каждый проект отражает профессионализм нашей команды.
        </p>
      </div>
    </div>
    <div class="max-w-[1660px] ml-auto overflow-hidden mt-14">
      <div class="text-white bg-green-505 p-6 md:p-20 rounded-l-[1.25rem] relative">
        <div class="works-slider main-works">
          <div class="swiper-wrapper">
            <div v-for="img in images" :key="img" class="swiper-slide">
              <div class="h-full">
                <nuxt-picture
                  class="block overflow-hidden rounded-[1.25rem] works-slider-image h-full"
                  :src="img"
                  alt="Фотография забора с участка"
                  width="594"
                  height="464"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex md:flex-row flex-col md:items-end justify-between md:gap-0 gap-8 mt-2.5 md:mt-14">
          <div class="flex items-center gap-5">
            <button
              class="main-works-button-prev md:size-15 size-10 rounded-full flex items-center justify-center cursor-pointer"
              aria-label="Предыдущий слайд"
            >
              <icon name="name:arrow" class="w-5! h-5! fill-green-505 rotate-180" />
            </button>
            <button class="main-works-button-next md:size-15 size-10 rounded-full flex items-center justify-center cursor-pointer" aria-label="Следующий слайд">
              <icon name="name:arrow" class="w-5! h-5! fill-green-505" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

interface Props {
  images: string[];
}

defineProps<Props>();

const worksSlider = ref();

onMounted(() => {
  worksSlider.value = new Swiper('.works-slider', {
    modules: [Navigation, Pagination],
    grabCursor: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.main-works-button-next',
      prevEl: '.main-works-button-prev',
    },
  });
});

onBeforeUnmount(() => {
  worksSlider.value.destroy();
});
</script>

<style>
@import 'swiper/css';
@import 'swiper/css/navigation';

.main-works {
  overflow: visible;
}
.main-works .swiper-slide {
  max-width: 37.125rem;
  height: auto;
}
.main-works .swiper-slide:not(:last-child) {
  margin-right: 1.5rem;
}
.works-slider-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main-works-button-prev,
.main-works-button-next {
  border: 1px solid var(--color-green-105);
  background-color: var(--color-green-105);
  transition:
    background-color 0.3s,
    border-color 0.3s;
}
.main-works-button-prev:hover,
.main-works-button-next:hover {
  border: 1px solid var(--color-green-700);
  background-color: var(--color-green-700);
}
.main-works-button-prev:active,
.main-works-button-next:active {
  border: 1px solid var(--color-green-505);
  background-color: var(--color-green-505);
}

.main-works-button-prev.swiper-button-disabled,
.main-works-button-next.swiper-button-disabled {
  border: 1px solid #ffffff;
  background-color: transparent;
}
</style>
