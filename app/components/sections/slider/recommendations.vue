<template>
  <div class="md:py-20 py-16 overflow-hidden">
    <div class="container">
      <div>
        <div class="flex md:flex-row flex-col md:items-end justify-between md:gap-0 gap-8">
          <div class="md:pl-0 pl-6">
            <div class="flex items-center gap-2.5">
              <div>
                <nuxt-picture src="/images/icons/fence-green.svg" alt="Иконка" width="24" height="24" loading="lazy" />
              </div>
              <div class="uppercase font-bold text-green-505">СОВЕТУЕМ</div>
            </div>

            <h2 class="text-[2rem] lg:text-5xl font-medium mt-4 leading-small text-green-505">Возможно вам подойдут</h2>
          </div>
          <div class="flex items-center gap-5 md:ml-0 ml-auto">
            <button
              class="recommendations-slider-button-prev md:size-15 size-15 rounded-full flex items-center justify-center cursor-pointer"
              aria-label="Предыдущий слайд"
            >
              <icon name="name:arrow" class="w-5! h-5! fill-green-505 rotate-180" />
            </button>
            <button
              class="recommendations-slider-button-next md:size-15 size-15 rounded-full flex items-center justify-center cursor-pointer"
              aria-label="Следующий слайд"
            >
              <icon name="name:arrow" class="w-5! h-5! fill-green-505" />
            </button>
          </div>
        </div>

        <div class="recommendations-slider mt-6 md:mt-14">
          <div class="swiper-wrapper">
            <div v-for="item in catalog" :key="item.title" class="swiper-slide">
              <shared-card :image="item.image" :shield="item.shield" :title="item.title" :price="item.price" :tags="item.tags" :description="item.description" />
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

const recommendationsSlider = ref();

onMounted(() => {
  recommendationsSlider.value = new Swiper('.recommendations-slider', {
    modules: [Navigation, Pagination],
    grabCursor: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.recommendations-slider-button-next',
      prevEl: '.recommendations-slider-button-prev',
    },
  });
});

onBeforeUnmount(() => {
  recommendationsSlider.value.destroy();
});

const catalog = [
  {
    image: '/images/catalog/1.png',
    shield: 'Забор из профнастила',
    title: 'Из профнастила',
    price: 'от 3 200 ₽ /п.м.',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Прочный и долговечный забор из профнастила обеспечивает отличную защиту и низкие затраты на обслуживание.',
  },
  {
    image: '/images/catalog/2.png',
    shield: 'Забор на ленточном фундаменте',
    title: 'На ленточном фундаменте',
    price: 'от 13 500 ₽ /п.м.',
    tags: ['Рассрочка', 'Подарки'],
    description:
      'Установка забора из профнастила на ленточном фундаменте гарантирует устойчивость и надежность, что особенно важно для участков с нестабильным грунтом.',
  },
  {
    image: '/images/catalog/3.png',
    shield: 'Забор из сетки рабицы',
    title: 'Из сетки рабицы',
    price: 'от 2 500 ₽ /п.м.',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Легкий и экономичный забор из сетки рабицы обеспечивает хорошую видимость и вентиляцию, идеально подходят для ограждения садов и участков.',
  },
  {
    image: '/images/catalog/4.png',
    shield: 'Газонные ограждения',
    title: 'Ограждения',
    price: 'от 3 000 ₽ /п.м.',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Эстетически привлекательные газонные ограждения гармонично вписываются в ландшафт и защищают растения от повреждений.',
  },
  {
    image: '/images/catalog/5.png',
    shield: 'Забор из 3D сетки',
    title: '3D сетка',
    price: 'от 4 000 ₽ /п.м.',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Забор из 3D сетки сочетает в себе высокую прочность и современный дизайн, обеспечивая безопасность и стильный внешний вид.',
  },
  {
    image: '/images/catalog/6.png',
    shield: 'Забор из штакетника',
    title: 'Металлический штакетник',
    price: 'от 6 500 ₽ /п.м.',
    tags: ['Рассрочка', 'Подарки'],
    description:
      'Забор из металлического штакетника предлагает долговечность и разнообразие стилей, создавая красивое ограждение с минимальными затратами на уход.',
  },
  {
    image: '/images/catalog/7.png',
    shield: 'Ворота из профнастила',
    title: 'Откатные ворота',
    price: 'от 100 000 ₽ ',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Отличный вариант для ограниченных пространств. Откатные ворота открываются вбок, не занимая место на проезжей части.',
  },
  {
    image: '/images/catalog/8.png',
    shield: 'Ворота из профнастила',
    title: 'Распашные ворота',
    price: 'от 40 000 ₽ ',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Распашные ворота просты в установке и использовании, обеспечивают надежную защиту и широкий проезд при открытии.',
  },
  {
    image: '/images/catalog/9.png',
    shield: 'Калитки из профнастила',
    title: 'Калитки',
    price: 'от 15 000 ₽ ',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Калитки из профнастила удобны для пешеходного доступа, позволяют быстро войти на территорию без необходимости открывать основные ворота.',
  },
  {
    image: '/images/catalog/10.png',
    shield: 'Навесы',
    title: 'Навесы для автомобиля',
    price: 'от 6 500 ₽ /кв.м.',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Навес для машины обеспечивает защиту от погодных условий и может служить стильным дополнением к вашему участку.',
  },
];
</script>

<style>
@import 'swiper/css';
@import 'swiper/css/navigation';

.recommendations-slider {
  overflow: visible;
}
.recommendations-slider .swiper-slide {
  max-width: 31.1875rem;
  height: auto;
}
.recommendations-slider .swiper-slide:not(:last-child) {
  padding-right: 5.5625rem;
}
@media (max-width: 768px) {
  .recommendations-slider .swiper-slide:not(:last-child) {
    padding-right: 1rem;
  }
}
.slider-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.recommendations-slider-button-prev,
.recommendations-slider-button-next {
  border: 1px solid var(--color-green-105);
  background-color: var(--color-green-105);
  transition:
    background-color 0.3s,
    border-color 0.3s;
}
.recommendations-slider-button-prev span,
.recommendations-slider-button-next span {
  background-color: white;
}

.recommendations-slider-button-prev.swiper-button-disabled span,
.recommendations-slider-button-next.swiper-button-disabled span {
  background-color: var(--color-green-505);
}
.recommendations-slider-button-prev:hover,
.recommendations-slider-button-next:hover {
  border: 1px solid var(--color-green-600);
  background-color: var(--color-green-600);
}
.recommendations-slider-button-prev:active,
.recommendations-slider-button-next:active {
  border: 1px solid var(--color-green-700);
  background-color: var(--color-green-700);
}

.recommendations-slider-button-prev.swiper-button-disabled,
.recommendations-slider-button-next.swiper-button-disabled {
  border: 1px solid #e1e8e6;
  background-color: #e1e8e6;
}
</style>
