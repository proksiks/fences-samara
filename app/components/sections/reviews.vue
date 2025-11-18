<template>
  <div class="md:py-20 py-16 overflow-hidden">
    <div class="container">
      <div class="flex">
        <div class="shrink-0 max-w-[712px] overflow-hidden rounded-3xl">
          <div class="reviews-slider-image">
            <div class="swiper-wrapper">
              <div class="swiper-slide pr-4">
                <div class="h-full">
                  <nuxt-picture
                    class="block overflow-hidden rounded-3xl h-full"
                    src="/images/sections/reviews/slide_1.png"
                    width="712"
                    height="693"
                    alt="Забор "
                  />
                </div>
              </div>
              <div class="swiper-slide">
                <div>
                  <nuxt-picture class="block overflow-hidden rounded-3xl" src="/images/sections/reviews/slide_2.png" width="712" height="693" alt="Забор " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-202">
          <div>
            <h2 class="text-[3.125rem] leading-small font-bold text-green-505 mt-5 ml-15">Отзывы</h2>

            <div class="reviews-slider -ml-25 mt-5">
              <div class="swiper-wrapper">
                <div class="swiper-slide pr-4">
                  <div class="bg-white reviews_shadow py-15 px-10 rounded-[1.25rem]">
                    <div>
                      <nuxt-picture src="/images/icons/quote.svg" width="68" height="52" alt="Забор " />
                    </div>
                    <div>
                      <p class="mt-5 text-gray-205 leading-snug text-[1.5rem]">
                        Спасибо компании «Забор 163» за установку забора из профнастила. Мастера работали быстро и аккуратно, соблюдая все договоренности. Цена
                        за метр забора вышла ниже, чем у других компаний. Качество забора отличное - спустя 2 года выглядит как будто только что установили.
                      </p>
                    </div>

                    <div class="flex items-center justify-between gap-4 mt-20">
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
                <div class="swiper-slide">
                  <div class="bg-white reviews_shadow py-15 px-10 rounded-[1.25rem]">
                    <div>
                      <nuxt-picture src="/images/icons/quote.svg" width="68" height="52" alt="Забор " />
                    </div>
                    <div>
                      <p class="mt-5 text-gray-205 leading-snug text-[1.5rem]">
                        Устанавливали металлический штакетник на участок частного дома. Команда, которая устанавливала забор настоящие профи. Подробно
                        проконсультировали по всем этапам, держали в курсе и отвечали на каждый вопрос. Клиентоориентированность на высоте. Качеством
                        выполненной работы доволен на 100%.
                      </p>
                    </div>

                    <div class="flex items-center justify-between gap-4 mt-20">
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
import { Pagination } from 'swiper/modules';

onMounted(() => {
  new Swiper('.reviews-slider', {
    modules: [Pagination],
    grabCursor: true,
    slidesPerView: 'auto',
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.reviews-slider-pagination',
      clickable: true,
    },
  });
  new Swiper('.reviews-slider-image', {
    grabCursor: true,
    slidesPerView: 'auto',
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });
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
.reviews-slider-image img {
  height: 100%;
}
</style>
