<template>
  <main>
    <lazy-sections-hero-catalog image="/images/pages/catalog/profiled-flooring/1.png" :breadcrumbs="breadcrumbs">
      <h3 class="text-[1.5rem] font-medium text-green-505 leading-small">
        Установка заборов из <br />
        профнастила в Самаре и <br />
        области
      </h3>
      <p class="my-4.5 text-gray-205">
        В компании «Забор163» вы можете заказать изготовление или установку готового забора из профлиста под ключ. Мы работаем по Самаре и Самарской области.
        Наши надёжные заборы из профнастила прослужат долго и идеально подойдут вашему участку.
      </p>
    </lazy-sections-hero-catalog>
    <lazy-sections-features />
    <lazy-sections-banner />
    <div class="md:py-20 pt-16 pb-4">
      <div class="container">
        <lazy-sections-features-catalog image="/images/pages/catalog/profiled-flooring/2.png">
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
              <span class="text-green-105">Цена:</span> Забор из профлиста – оптимальный выбор для бюджета, баланс цены и качества с прозрачным расчетом
              стоимости.
            </li>
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105">Быстрая установка:</span> Монтаж забора из профлиста выполняется в кратчайшие сроки, обычно до 3 дней.
            </li>
          </ul>
        </lazy-sections-features-catalog>
      </div>
    </div>
    <div class="md:py-20 pt-4 pb-16">
      <div class="container">
        <h2 class="text-[2rem] font-medium text-center text-green-505">Стоимость заборов из профнастила</h2>
        <lazy-sections-table class="mt-6" :headers="tableHeaders" :table-data="tableData" />
      </div>
    </div>
    <lazy-sections-stages >
      <template #title>
        <h2 class="text-[2rem] lg:text-[2.5rem] font-medium mt-4 leading-small text-green-505">Этапы работы по установке забора из профнастила</h2>
      </template>
    </lazy-sections-stages>
    <lazy-sections-tabs />
    <lazy-sections-recommended />
    <lazy-sections-colors :colors="colors" />
    <lazy-sections-slider-works :images="images" />
    <lazy-sections-callback />
    <lazy-sections-slider-recommendations />
  </main>
</template>

<script lang="ts" setup>
const data = reactive({
  title: 'Установка забора для частного дома или дачи под ключ — Самара, Самарская область',
  description:
    'Установите забор в Самаре и Самарской области под ключ. Низкие цены за погонный метр, качественные материалы и бесплатный замер. Изготовим металлический забор из профнастила, на ленточном фундаменте, 3D-забор, сетку-рабицу, штакетник и другие варианты по вашему желанию. Звоните по телефону +7 (920) 344-70-27.',
  image: '/images/catalog/9.png',
});

const breadcrumbs = [{ title: 'Главная', to: '/' }, { title: 'Забор из профнастила' }];

const tableHeaders: string[] = ['Высота (M)', 'Толщина', 'Столбы', 'Покрытие', 'Стоимость (руб./п.м.)'];

const tableData: Record<string, string>[] = [
  {
    height: '1,5',
    thickness: '0,45 мм',
    posts: '60x60 мм',
    coating: 'Цинк',
    cost: 'От 3 200',
  },
  {
    height: '1,8',
    thickness: '0,45 мм',
    posts: '60x60 мм',
    coating: 'Цинк',
    cost: 'От 3 300',
  },
  {
    height: '2,0',
    thickness: '0,45 мм',
    posts: '60x60 мм',
    coating: 'Цинк',
    cost: 'От 3 500',
  },
  {
    height: '2,5',
    thickness: '0,45 мм',
    posts: '60x60 мм',
    coating: 'Цинк',
    cost: 'От 4 500',
  },
  {
    height: '1,5',
    thickness: '0,4 мм',
    posts: '60x60 мм',
    coating: 'Полимер',
    cost: 'От 3 500',
  },
  {
    height: '1,8',
    thickness: '0,4 мм',
    posts: '60x60 мм',
    coating: 'Полимер',
    cost: 'От 3 700',
  },
  {
    height: '2,0',
    thickness: '0,4 мм',
    posts: '60x60 мм',
    coating: 'Полимер',
    cost: 'От 4 000',
  },
];

const colors = ref([
  {
    image: '/images/colors/1.jpg',
    shade: 'RAL 3003',
    title: 'Рубиново-красный',
  },
  {
    image: '/images/colors/2.jpg',
    shade: 'RAL 3005',
    title: 'Винно-красный',
  },
  {
    image: '/images/colors/3.jpg',
    shade: 'RAL 6002',
    title: 'Лиственно-зелёный',
  },
  {
    image: '/images/colors/4.jpg',
    shade: 'RAL 6005',
    title: 'Зелёный мох',
  },
  {
    image: '/images/colors/5.jpg',
    shade: 'RAL 8017',
    title: 'Шоколадно-коричневый',
  },
  {
    image: '/images/colors/6.jpg',
    shade: 'RAL 9002',
    title: 'Светло-серый',
  },
  {
    image: '/images/colors/7.jpg',
    shade: 'RAL 9003',
    title: 'Сигнальный белый',
  },
  {
    image: '/images/colors/8.jpg',
    shade: 'RAL 7004',
    title: 'Сигнальный серый',
  },
  {
    image: '/images/colors/9.jpg',
    shade: 'RAL 1018',
    title: 'Цинково-жёлтый',
  },
  {
    image: '/images/colors/10.jpg',
    shade: 'RAL 5005',
    title: 'Сигнальный синий',
  },
]);

const images = [
  '/images/pages/catalog/profiled-flooring/3.png',
  '/images/pages/catalog/profiled-flooring/4.png',
  '/images/pages/catalog/profiled-flooring/5.png',
];

useSeo(data);
</script>
