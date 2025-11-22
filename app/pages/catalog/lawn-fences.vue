<template>
  <main>
    <lazy-sections-hero-catalog image="/images/pages/catalog/lawn-fences/1.png" :breadcrumbs="breadcrumbs">
      <h1 class="text-[1.5rem] font-medium text-green-505 leading-small">Установка газонных ограждений в Самаре и области</h1>
      <p class="my-4.5 text-gray-205">
        В компании «Забор163» вы можете заказать изготовление и установку газонных ограждений под ключ. Мы работаем в Самаре, Тольятти и по всей Самарской
        области. Наши металлические газонные ограждения – это стильное, долговечное и практичное решение для уличного ограждения клумб, газонов и садовых
        участков.
      </p>
    </lazy-sections-hero-catalog>
    <lazy-sections-features />
    <lazy-sections-banner />
    <div class="md:py-20 pt-16 pb-4">
      <div class="container">
        <lazy-sections-features-catalog image="/images/pages/catalog/lawn-fences/2.png">
          <h2 class="text-[2rem] leading-small font-medium text-green-505">Почему выбирают газонные ограждения</h2>
          <ul class="mt-6">
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105 font-medium">Эстетика и стиль:</span> Металлические газонные ограждения придают участку аккуратный и современный вид, подчеркивая
              красоту клумб и газонов.
            </li>
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105 font-medium">Долговечность:</span> Изготовленные из оцинкованной стали с полимерным покрытием, наши ограждения устойчивы к
              коррозии, погодным условиям и механическим повреждениям.
            </li>
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105 font-medium">Простота установки:</span> Монтаж газонного ограждения занимает всего 1–2 дня, что экономит ваше время.
            </li>
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105 font-medium">Функциональность:</span> Уличное газонное ограждение защищает газоны и клумбы от вытаптывания, сохраняя их ухоженный
              вид.
            </li>
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105 font-medium">Доступная цена:</span> Газонные ограждения в Самаре от «Забор163» – это оптимальное сочетание качества и стоимости.
            </li>
          </ul>
        </lazy-sections-features-catalog>
      </div>
    </div>
    <div class="md:py-20 pt-4 pb-16">
      <div class="container">
        <h2 class="text-[2rem] font-medium text-center text-green-505">Стоимость газонных ограждений</h2>
        <p class="text-gray-150 md:text-lg mt-8 text-center">
          Хотите купить газонное ограждение и преобразить ваш участок? В «Забор163» мы предлагаем изготовление и установку газонных заборов по доступным ценам,
          которые подойдут любому бюджету! Стоимость зависит от высоты, дизайна, типа покрытия (эмалевое или грунтовое) и длины ограждения. Мы гарантируем
          прозрачную смету без скрытых доплат и индивидуальный подход, чтобы ваше декоративное ограждение идеально вписалось в ландшафт. Преобразите свои клумбы
          и газоны с надежными и красивыми ограждениями уже сегодня – оставьте заявку, и наш специалист бесплатно рассчитает стоимость, подобрав идеальное
          решение для вашего бюджета и ландшафта!
        </p>
        <lazy-sections-table class="mt-6" :headers="tableHeaders" :table-data="tableData" />
        <p class="text-gray-150 md:text-lg mt-8 text-center">
          Металлические секционные заборы производятся из профильной трубы и стального прутка. Сварные секции выполняются с прямым, арочным или фигурным верхом.
          вы можете выбрать любой дизайн заполнения секций: геометрические узоры, растительные или цветочные орнаменты.
        </p>
      </div>
    </div>
    <lazy-sections-stages :stages="stagesData">
      <template #title>
        <h2 class="text-[2rem] lg:text-[2.5rem] font-medium mt-4 leading-small text-green-505">Этапы работы по установке забора из профнастила</h2>
      </template>
    </lazy-sections-stages>
    <lazy-sections-tabs :tabs="tabsData" />
    <lazy-sections-recommended />
    <lazy-sections-colors :colors="colors" />
    <lazy-sections-slider-works :images="images">
      <template #head>
        <h2 class="text-[2rem] lg:text-[2.5rem] font-medium mt-4 leading-small text-green-505">Готовые работы заборов из профнастила</h2>
        <p class="text-gray-150 md:text-[1.5rem] mt-8">
          Ознакомьтесь с нашими проектами заборов из профнастила на ленточном фундаменте в Самаре и Самарской области. Мы предлагаем разнообразные дизайны – от
          классических до современных – с акцентом на качество и долговечность. Каждый проект отражает профессионализм нашей команды.
        </p>
      </template>
    </lazy-sections-slider-works>
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

const breadcrumbs = [{ title: 'Главная', to: '/' }, { title: 'Газонные ограждения' }];

const tableHeaders: string[] = ['Высота (M)', 'Длина', 'Материал', 'Покрытие', 'Стоимость (руб./п.м.)'];

const tableData: Record<string, string>[] = [
  {
    height: '0,4+',
    thickness: '2 м',
    posts: 'Металл',
    coating: 'Эмаль',
    cost: 'От 3 000',
  },
  {
    height: '0,4+',
    thickness: '2 м',
    posts: 'Металл',
    coating: 'Грунт',
    cost: 'От 3 000',
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

const images = ['/images/pages/catalog/lawn-fences/3.png', '/images/pages/catalog/lawn-fences/4.png', '/images/pages/catalog/lawn-fences/5.png'];

const tabsData = [
  {
    id: 'монтаж',
    title: 'Монтаж',
    description: 'После бесплатного замера и подписания договора наша команда приступает к установке газонного ограждения.',
    processTitle: 'Мы гарантируем качество и оперативность за счет четко организованного процесса:',
    items: [
      {
        title: 'Подготовка участка.',
        description: 'Очистка территории от мусора и растительности. Разметка линии ограждения с помощью колышков и шнура для точной установки.',
      },
      {
        title: 'Установка металлических столбов.',
        description:
          'В грунте бурятся или выкапываются ямы глубиной 0,4–0,6 м (в зависимости от высоты ограждения). Столбы 40х40 мм устанавливаются вертикально и бетонируются для устойчивости. Расстояние между столбами – 1,5–2 м.',
      },
      {
        title: 'Крепление секций ограждения.',
        description:
          'Металлические секции газонного ограждения крепятся к столбам с помощью болтов или сварки. Секции изготавливаются из оцинкованной стали с покрытием на ваш выбор, что обеспечивает долговечность и эстетичный вид.',
      },
      {
        title: 'Установка дополнительных элементов.',
        description: 'При необходимости монтируются декоративные элементы или дополнительные секции. Проверяется надежность креплений и выравнивание.',
      },
      {
        title: 'Финальная проверка и сдача объекта.',
        description:
          'Проводится осмотр ограждения на предмет дефектов, проверяется устойчивость конструкции. Убирается строительный мусор, и объект сдается с гарантией качества.',
      },
    ],
  },
  {
    id: 'сроки',
    title: 'Сроки',
    description:
      'Сроки установки газонных ограждений в Самаре зависят от объема работ и особенностей участка. Мы обеспечиваем максимальную оперативность и соблюдение всех договоренностей:',
    items: [
      {
        title: 'Согласование и замер (1–2 дня).',
        description: 'Выезд специалиста для замера и обсуждения деталей (высота, длина, дизайн). Сложные участки могут потребовать до 2 дней.',
      },
      {
        title: 'Подготовка материалов (1–3 дня).',
        description:
          'Закупка у поставщиков или изготовление на собственном производстве металлических секций, столбов и крепежей. Нестандартные дизайны или покрытия могут увеличить срок подготовки.',
      },
      {
        title: 'Доставка на участок (1 день).',
        description: 'Быстрая доставка материалов в Самаре, Тольятти и области с помощью нашего автопарка.',
      },
      {
        title: 'Монтаж ограждения (1–2 дня).',
        description: 'Монтаж стандартного газонного ограждения (до 50 м) занимает 1 день. Для больших участков или сложных условий – от 2 дней.',
      },
    ],
  },
  {
    id: 'доставка',
    title: 'Доставка',
    description:
      'Компания «Забор163» обеспечивает быструю и надежную доставку всех материалов для металлических газонных ограждений в Самаре, Тольятти и Самарской области. Мы используем собственный автопарк для оперативной транспортировки секций, столбов и крепежей. Стоимость доставки рассчитывается индивидуально в зависимости от расстояния и объема заказа. Наши сотрудники выполняют погрузку и разгрузку, гарантируя сохранность материалов и удобство для последующего монтажа.',
  },
];
const stagesData = [
  {
    icon: '/images/icons/doc-checkmark.svg',
    title: 'Оформление заявки',
    description: 'Заявка через сайт или по телефону',
  },
  {
    icon: '/images/icons/measurement.svg',
    title: 'Бесплатная замерка',
    description: 'Бесплатный выезд замерщика на ваш участок для оценки и составления сметы',
  },
  {
    icon: '/images/icons/doc-success.svg',
    title: 'Подписание документации',
    description: 'Составление сметы и подписание договора',
  },
  {
    icon: '/images/icons/delivery-truck.svg',
    title: 'Доставка материалов',
    description: 'Доставим материалы (металлические секции, столбы, крепежи) на ваш участок',
  },
  {
    icon: '/images/icons/worker.svg',
    title: 'Рабочий процесс',
    description: 'Монтаж газонного ограждения под ключ (1–2 дня)',
  },
  {
    icon: '/images/icons/ok-finger.svg',
    title: 'Приемка работ',
    description: 'Вы принимаете работу и получаете гарантию на 1 год',
  },
];

useSeo(data);
</script>
