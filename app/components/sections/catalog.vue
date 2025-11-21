<template>
  <div class="py-16 md:py-20">
    <div class="container">
      <div class="flex md:flex-row flex-col md:items-end justify-between">
        <div class="md:pl-0 pl-6">
          <div class="flex items-center gap-2.5">
            <div>
              <nuxt-picture src="/images/icons/fence-green.svg" alt="Иконка" width="24" height="24" loading="lazy" />
            </div>
            <div class="uppercase font-bold text-green-505">КАТАЛОГ ЗАБОРОВ</div>
          </div>

          <h2 class="text-[2rem] lg:text-5xl font-medium mt-4 leading-small text-green-505">Поможем выбрать проект</h2>
        </div>
        <div class="flex items-center gap-5">
          <shared-button
            class="md:inline-flex hidden md:w-auto w-full mt-auto py-4 md:px-8 px-2 rounded-4xl font-medium items-center justify-center gap-2 md:text-default text-sm group"
            @click="openCallbackModal"
          >
            Поможем выбрать <icon name="name:arrow" class="w-5! h-5! group-hover:translate-x-1 transition duration-300" />
          </shared-button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-x-8 2xl:gap-x-22.25 lg:gap-y-8 2xl:gap-y-14 mt-10 md:mt-14">
        <div v-for="item in catalog" :key="item.image">
          <shared-card :image="item.image" :shield="item.shield" :title="item.title" :price="item.price" :tags="item.tags" :description="item.description" />
        </div>
      </div>

      <div class="mt-10">
        <shared-button
          class="md:hidden md:w-auto w-full mt-auto py-4 md:px-8 px-2 rounded-4xl font-medium inline-flex items-center justify-center gap-2 md:text-default text-sm group"
          @click="openCallbackModal"
        >
          Поможем выбрать <icon name="name:arrow" class="w-5! h-5! group-hover:translate-x-1 transition duration-300" />
        </shared-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const callbackModalStore = useCallbackModalStore();

const openCallbackModal = () => {
  callbackModalStore.open();
};
const catalog = [
  {
    image: '/images/catalog/1.png',
    shield: 'Забор из профнастила',
    title: 'Из профнастила',
    price: 'от 3 200 <span class="text-base">₽</span>/п.м.',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Прочный и долговечный забор из профнастила обеспечивает отличную защиту и низкие затраты на обслуживание.',
  },
  {
    image: '/images/catalog/2.png',
    shield: 'Забор на ленточном фундаменте',
    title: 'На ленточном фундаменте',
    price: 'от 13 500 <span class="text-base">₽</span>/п.м.',
    tags: ['Рассрочка', 'Подарки'],
    description:
      'Установка забора из профнастила на ленточном фундаменте гарантирует устойчивость и надежность, что особенно важно для участков с нестабильным грунтом.',
  },
  {
    image: '/images/catalog/3.png',
    shield: 'Забор из сетки рабицы',
    title: 'Из сетки рабицы',
    price: 'от 2 500 <span class="text-base">₽</span>/п.м.',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Легкий и экономичный забор из сетки рабицы обеспечивает хорошую видимость и вентиляцию, идеально подходят для ограждения садов и участков.',
  },
  {
    image: '/images/catalog/4.png',
    shield: 'Газонные ограждения',
    title: 'Ограждения',
    price: 'от 3 000 <span class="text-base">₽</span>/п.м.',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Эстетически привлекательные газонные ограждения гармонично вписываются в ландшафт и защищают растения от повреждений.',
  },
  {
    image: '/images/catalog/5.png',
    shield: 'Забор из 3D сетки',
    title: '3D сетка',
    price: 'от 4 000 <span class="text-base">₽</span>/п.м.',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Забор из 3D сетки сочетает в себе высокую прочность и современный дизайн, обеспечивая безопасность и стильный внешний вид.',
  },
  {
    image: '/images/catalog/6.png',
    shield: 'Забор из штакетника',
    title: 'Металлический штакетник',
    price: 'от 6 500 <span class="text-base">₽</span>/п.м.',
    tags: ['Рассрочка', 'Подарки'],
    description:
      'Забор из металлического штакетника предлагает долговечность и разнообразие стилей, создавая красивое ограждение с минимальными затратами на уход.',
  },
  {
    image: '/images/catalog/7.png',
    shield: 'Ворота из профнастила',
    title: 'Откатные ворота',
    price: 'от 100 000 <span class="text-base">₽</span>',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Отличный вариант для ограниченных пространств. Откатные ворота открываются вбок, не занимая место на проезжей части.',
  },
  {
    image: '/images/catalog/8.png',
    shield: 'Ворота из профнастила',
    title: 'Распашные ворота',
    price: 'от 40 000 <span class="text-base">₽</span>',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Распашные ворота просты в установке и использовании, обеспечивают надежную защиту и широкий проезд при открытии.',
  },
  {
    image: '/images/catalog/9.png',
    shield: 'Калитки из профнастила',
    title: 'Калитки',
    price: 'от 15 000 <span class="text-base">₽</span>',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Калитки из профнастила удобны для пешеходного доступа, позволяют быстро войти на территорию без необходимости открывать основные ворота.',
  },
  {
    image: '/images/catalog/10.png',
    shield: 'Навесы',
    title: 'Навесы для автомобиля',
    price: 'от 6 500 <span class="text-base">₽</span>/кв.м.',
    tags: ['Рассрочка', 'Подарки'],
    description: 'Навес для машины обеспечивает защиту от погодных условий и может служить стильным дополнением к вашему участку.',
  },
];
</script>
