<template>
  <div class="md:py-20 py-16 overflow-hidden">
    <div class="container">
      <h2 class="lg:hidden text-[2rem] leading-small font-bold text-green-505 text-center">Отзывы</h2>
      <div class="lg:flex lg:mt-0 mt-10">
        <div class="2xl:shrink-0 w-full max-w-[712px] mx-auto overflow-hidden rounded-3xl">
          <div class="reviews-slider-image max-h-140 lg:max-h-none">
            <div class="swiper-wrapper">
              <div class="swiper-slide md:pr-4">
                <div class="h-full">
                  <nuxt-picture
                    class="block overflow-hidden rounded-3xl h-full"
                    src="/images/sections/reviews/slide_1.webp"
                    width="712"
                    height="693"
                    alt="Забор "
                  />
                </div>
              </div>
              <div class="swiper-slide md:pr-4">
                <div>
                  <nuxt-picture class="block overflow-hidden rounded-3xl" src="/images/sections/reviews/slide_2.png" width="712" height="693" alt="Забор " />
                </div>
              </div>
              <div class="swiper-slide">
                <div>
                  <nuxt-picture class="block overflow-hidden rounded-3xl" src="/images/sections/reviews/slide_3.jpg" width="712" height="693" alt="Забор " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:max-w-202 w-full lg:mt-0 -mt-20">
          <div>
            <h2 class="lg:block hidden text-[3.125rem] leading-small font-bold text-green-505 mt-5 ml-15">Отзывы</h2>

            <div class="reviews-slider lg:-ml-25 md:mt-5 bg-white reviews_shadow relative z-2 rounded-[1.25rem]">
              <div class="swiper-wrapper">
                <div class="swiper-slide md:pr-4">
                  <div class="md:py-15 py-8 md:px-10 px-6">
                    <div>
                      <nuxt-picture class="md:max-w-none max-w-11.25 block" src="/images/icons/quote.svg" width="68" height="52" alt="Забор " />
                    </div>
                    <div>
                      <p class="mt-5 text-gray-205 leading-snug md:text-[1.5rem]">
                        Спасибо компании «Забор 163» за установку забора из профнастила. Мастера работали быстро и аккуратно, соблюдая все договоренности. Цена
                        за метр забора вышла ниже, чем у других компаний. Качество забора отличное - спустя 2 года выглядит как будто только что установили.
                      </p>
                    </div>

                    <div class="flex items-center justify-between gap-4 md:mt-20 mt-6">
                      <div class="flex items-center gap-4">
                        <div>
                          <nuxt-picture
                            class="block rounded-full overflow-hidden"
                            src="/images/sections/reviews/1.jpg"
                            width="70"
                            height="70"
                            alt="Владимир И."
                          />
                        </div>
                        <div>
                          <div class="text-green-505 font-bold text-[1.375rem] leading-snug">Владимир И.</div>
                          <div class="text-gray-150 mt-1">Клиент</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide md:pr-4">
                  <div class="md:py-15 py-8 md:px-10 px-6">
                    <div>
                      <nuxt-picture class="md:max-w-none max-w-11.25 block" src="/images/icons/quote.svg" width="68" height="52" alt="Забор " />
                    </div>
                    <div>
                      <p class="mt-5 text-gray-205 leading-snug md:text-[1.5rem]">
                        Устанавливали металлический штакетник на участок частного дома. Команда, которая устанавливала забор настоящие профи. Подробно
                        проконсультировали по всем этапам, держали в курсе и отвечали на каждый вопрос. Клиентоориентированность на высоте. Качеством
                        выполненной работы доволен на 100%.
                      </p>
                    </div>

                    <div class="flex items-center justify-between gap-4 mt-6 md:mt-20">
                      <div class="flex items-center gap-4">
                        <div>
                          <nuxt-picture
                            class="block rounded-full overflow-hidden"
                            src="/images/sections/reviews/2.jpg"
                            width="70"
                            height="70"
                            alt="Александр Д."
                          />
                        </div>
                        <div>
                          <div class="text-green-505 font-bold text-[1.375rem] leading-snug">Александр Д.</div>
                          <div class="text-gray-150 mt-1">Клиент</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="md:py-15 py-8 md:px-10 px-6">
                    <div>
                      <nuxt-picture class="md:max-w-none max-w-11.25 block" src="/images/icons/quote.svg" width="68" height="52" alt="Забор " />
                    </div>
                    <div>
                      <p class="mt-5 text-gray-205 leading-snug md:text-[1.5rem]">
                        Обращаюсь за помощью компании во второй раз. 5 лет назад устанавливали забор на дачу. Получилось недорого и очень качественно, поэтому в
                        этот раз снова решил обратиться в «Забор 163» за газонными ограждениями, чтобы украсить территорию участка. Качество материалов на
                        высоком уровне, установка и монтаж без задержек. Проблем никаких, спасибо большое!
                      </p>
                    </div>

                    <div class="flex items-center justify-between gap-4 md:mt-20 mt-6">
                      <div class="flex items-center gap-4">
                        <div>
                          <nuxt-picture
                            class="block rounded-full overflow-hidden"
                            src="/images/sections/reviews/3.jpg"
                            width="70"
                            height="70"
                            alt="Александр Д."
                          />
                        </div>
                        <div>
                          <div class="text-green-505 font-bold text-[1.375rem] leading-snug">Виктор Б.</div>
                          <div class="text-gray-150 mt-1">Клиент</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="reviews-slider-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Swiper from 'swiper';
import { Pagination, Controller, EffectFade } from 'swiper/modules';

let imageSwiper: Swiper;
let reviewSwiper: Swiper;

onMounted(() => {
  imageSwiper = new Swiper('.reviews-slider-image', {
    modules: [Pagination, Controller, EffectFade],
    grabCursor: true,
    slidesPerView: 'auto',
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    pagination: {
      el: '.reviews-slider-pagination',
      clickable: true,
    },
  });

  reviewSwiper = new Swiper('.reviews-slider', {
    modules: [Pagination, Controller, EffectFade],
    autoHeight: true,
    grabCursor: true,
    slidesPerView: 'auto',
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    pagination: {
      el: '.reviews-slider-pagination',
      clickable: true,
    },
    controller: {
      control: imageSwiper,
    },
  });

  if (imageSwiper.controller && reviewSwiper.controller) {
    imageSwiper.controller.control = reviewSwiper;
  }
});
</script>

<style>
@import 'swiper/swiper-bundle.css';
.reviews_shadow {
  box-shadow: 0px 0px 60px 0px #0000000d;
}
.reviews-slider-image .swiper-slide {
  height: auto;
}
.reviews-slider {
  position: relative;
}
.reviews-slider .reviews-slider-pagination {
  position: absolute;
  bottom: 17%;
  transform: translateY(-35%);
  top: auto;
  z-index: 2;
  left: auto;
  right: 3.25rem;
  width: auto;
}
@media (max-width: 768px) {
  .reviews-slider {
    padding-bottom: 2rem;
  }
  .reviews-slider .reviews-slider-pagination {
    right: auto;
    left: 50%;
    bottom: 2rem;
    transform: translateY(0);
  }
}
.reviews-slider .reviews-slider-pagination .swiper-pagination-bullet {
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 100%;
  border: 1px solid var(--color-green-505);
  background-color: transparent;
  opacity: 1;
}
.reviews-slider .reviews-slider-pagination .swiper-pagination-bullet-active {
  background-color: var(--color-green-505);
}
.reviews-slider-image img {
  height: 100%;
}
</style>
