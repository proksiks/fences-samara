<template>
  <div class="py-16 md:py-20">
    <div class="container">
      <div class="flex md:flex-row flex-col md:items-end justify-between">
        <div class="md:pl-0 pl-6">
          <div class="flex items-center gap-2.5">
            <div>
              <nuxt-picture src="/images/icons/fence-green.svg" />
            </div>
            <div class="uppercase font-bold text-green-505">КАТАЛОГ ЗАБОРОВ</div>
          </div>

          <h2 class="text-[2rem] lg:text-5xl font-medium mt-4 leading-small text-green-505">Поможем выбрать проект</h2>
        </div>
        <div class="flex items-center gap-5">
          <shared-button
            class="md:inline-flex hidden md:w-auto w-full mt-auto py-4 md:px-8 px-2 rounded-4xl font-medium items-center justify-center gap-2 md:text-default text-sm button_shadow"
          >
            Поможем выбрать <icon name="name:arrow" class="w-5! h-5!" />
          </shared-button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-15 mt-10 md:mt-14">
        <div v-for="item in catalog" :key="item.image">
          <shared-card :image="item.image" :shield="item.shield" :title="item.title" :price="item.price" :tags="item.tags" :description="item.description" />
        </div>
      </div>

      <div class="mt-10">
        <shared-button
          class="md:hidden md:w-auto w-full mt-auto py-4 md:px-8 px-2 rounded-4xl font-medium inline-flex items-center justify-center gap-2 md:text-default text-sm button_shadow"
        >
          Поможем выбрать <icon name="name:arrow" class="w-5! h-5!" />
        </shared-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const catalog = [
  {
    image: '/images/catalog/1.jpg',
    shield: 'Забор из профнастила',
    title: 'Из профнастила',
    price: '30 987',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Прочный и долговечный забор из профнастила обеспечивает отличную защиту и низкие затраты на обслуживание.',
  },
  {
    image: '/images/catalog/2.jpg',
    shield: 'Забор из профнастила',
    title: 'На ленточном фундаменте',
    price: '30 987',
    tags: ['Рассрочка', 'Подарки'],
    description:
      'Установка забора из профнастила на ленточном фундаменте гарантирует устойчивость и надежность, что особенно важно для участков с нестабильным грунтом.',
  },
  {
    image: '/images/catalog/3.jpg',
    shield: 'Забор из сетки рабицы',
    title: 'Из сетки рабицы',
    price: '30 987',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Легкий и экономичный забор из сетки рабицы обеспечивает хорошую видимость и вентиляцию, идеально подходят для ограждения садов и участков.',
  },
  {
    image: '/images/catalog/4.jpg',
    shield: 'Газонные ограждения',
    title: 'Ограждения',
    price: '30 987',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Эстетически привлекательные газонные ограждения гармонично вписываются в ландшафт и защищают растения от повреждений.',
  },
  {
    image: '/images/catalog/5.jpg',
    shield: 'Забор из 3D сетки',
    title: '3D сетка',
    price: '30 987',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Забор из 3D сетки сочетает в себе высокую прочность и современный дизайн, обеспечивая безопасность и стильный внешний вид.',
  },
  {
    image: '/images/catalog/6.jpg',
    shield: 'Забор из штакетника',
    title: 'Металлический штакетник',
    price: '30 987',
    tags: ['Рассрочка', 'Подарки'],
    description:
      'Забор из металлического штакетника предлагает долговечность и разнообразие стилей, создавая красивое ограждение с минимальными затратами на уход.',
  },
];
</script>
