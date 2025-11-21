<template>
  <main>
    <lazy-sections-hero-catalog image="/images/pages/catalog/ribbon/1.png" :breadcrumbs="breadcrumbs">
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
        <lazy-sections-features-catalog image="/images/pages/catalog/ribbon/2.png">
          <h2 class="text-[2rem] leading-small font-medium text-green-505">В чем особенность заборов из профнастила на ленточном фундаменте</h2>
          <ul class="mt-6">
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105">Максимальная устойчивость:</span> Ленточный фундамент обеспечивает надежную основу, предотвращая проседание и
              деформацию забора даже на сложных грунтах.
            </li>
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105">Долговечность:</span> Профнастил с антикоррозийным покрытием и прочный фундамент гарантируют срок службы забора более
              20 лет.
            </li>
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105">Эстетика:</span> Широкая цветовая палитра профнастила и аккуратный фундамент создают стильный и современный вид.
            </li>
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105">Защита от подкопов:</span> Ленточный фундамент предотвращает подкопы животными и защищает участок от подтоплений.
            </li>
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105">Доступная цена:</span> Оптимальное сочетание стоимости материалов, фундамента и качества работ с прозрачным расчетом.
            </li>
          </ul>
        </lazy-sections-features-catalog>
      </div>
    </div>
    <div class="md:py-20 pt-4 pb-16">
      <div class="container">
        <h2 class="text-[2rem] font-medium text-center text-green-505">Стоимость заборов из профнастила на ленточном фундаменте</h2>
        <p class="text-gray-150 md:text-lg mt-8 text-center">
          Установите надежный и стильный забор из профнастила на ленточном фундаменте с компанией «Забор163»! Мы предлагаем конкурентоспособные цены, которые
          делают мечту о прочном и красивом заборе реальностью для каждого. Стоимость зависит от высоты забора, толщины профнастила, типа покрытия (цинк или
          полимер) и особенностей вашего участка. Благодаря прозрачной смете вы всегда знаете, за что платите, без скрытых доплат. Хотите сэкономить, не теряя в
          качестве? Оставьте заявку прямо сейчас, и наш специалист рассчитает точную стоимость, предложив оптимальное решение под ваш бюджет!
        </p>
        <lazy-sections-table class="mt-6" :headers="tableHeaders" :table-data="tableData" />
      </div>
    </div>
    <lazy-sections-stages>
      <template #title>
        <h2 class="text-[2rem] lg:text-[2.5rem] font-medium mt-4 leading-small text-green-505">
          Этапы работы по установке забора из профнастила на ленточном фундаменте
        </h2>
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

const breadcrumbs = [{ title: 'Главная', to: '/' }, { title: 'Заборы на ленточном фундаменте' }];

const tableHeaders: string[] = ['Высота (M)', 'Толщина', 'Ленточный фундамент', 'Лаги', 'Стоимость (руб./п.м.)'];

const tableData: Record<string, string>[] = [
  {
    height: '1,5',
    thickness: '0,45 мм',
    posts: '400х250 мм',
    coating: '2',
    cost: 'От 13 500',
  },
  {
    height: '1,8',
    thickness: '0,45 мм',
    posts: '400х250 мм',
    coating: '2',
    cost: 'От 14 000',
  },
  {
    height: '2,0',
    thickness: '0,45 мм',
    posts: '500х250 мм',
    coating: '2',
    cost: 'От 15 000',
  },
  {
    height: '2,5',
    thickness: '0,45 мм',
    posts: '600х250 мм',
    coating: '3',
    cost: 'От 16 000',
  },
  {
    height: '1,5',
    thickness: '0,4 мм',
    posts: '400х250 мм',
    coating: '2',
    cost: 'От 13 500',
  },
  {
    height: '1,8',
    thickness: '0,4 мм',
    posts: '500х250 мм',
    coating: '2',
    cost: 'От 14 000',
  },
  {
    height: '2,0',
    thickness: '0,4 мм',
    posts: '500х250 мм',
    coating: '3',
    cost: 'От 14 000',
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

const images = ['/images/pages/catalog/ribbon/3.png', '/images/pages/catalog/ribbon/4.png', '/images/pages/catalog/ribbon/5.png'];

useSeo(data);
</script>
