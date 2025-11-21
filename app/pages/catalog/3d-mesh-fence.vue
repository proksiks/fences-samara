<template>
  <main>
    <lazy-sections-hero-catalog image="/images/pages/catalog/3d-mesh-fence/1.png" :breadcrumbs="breadcrumbs">
      <h1 class="text-[1.5rem] font-medium text-green-505 leading-small">Установка заборов из 3D-сетки в Самаре и области</h1>
      <p class="my-4.5 text-gray-205">
        В компании «Забор163» вы можете заказать изготовление и установку забора из 3D-сетки под ключ. Мы работаем в Самаре, Тольятти и по всей Самарской
        области. Наши заборы из 3D-сетки – это современное, надежное и эстетичное решение для ограждения вашего участка, сочетающее прочность, стиль и
        доступность.
      </p>
    </lazy-sections-hero-catalog>
    <lazy-sections-features />
    <lazy-sections-banner />
    <div class="md:py-20 pt-16 pb-4">
      <div class="container">
        <lazy-sections-features-catalog image="/images/pages/catalog/3d-mesh-fence/2.png">
          <h2 class="text-[2rem] leading-small font-medium text-green-505">Преимущества заборов из 3D-сетки</h2>
          <ul class="mt-6">
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105">Прочность и долговечность:</span> 3D-сетка для забора изготовлена из оцинкованной стали с полимерным покрытием,
              устойчивым к коррозии и погодным условиям, что гарантирует срок службы более 20 лет.
            </li>
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105">Современность:</span> Дизайн забора из 3D-сетки с объемной структурой и разнообразием цветов (например, тёмная
              металлическая или классическая зелёная 3D-сетка для забора) идеально вписывается в любой ландшафт.
            </li>
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105">Прозрачность и легкость:</span> Сетка пропускает свет, не создавая тени, что делает её отличным выбором для садов и
              дачных участков.
            </li>
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105">Быстрая установка:</span> Монтаж 3D-забора занимает 1–2 дня, благодаря простоте конструкции и профессионализму наших
              бригад.
            </li>
            <li class="relative pl-6 mt-3 text-gray-150 text-lg">
              <span class="absolute w-1.5 h-1.5 rounded-full bg-green-105 top-2.5 left-1"></span>
              <span class="text-green-105">Функциональность:</span> Подходит для частных домов, дач, спортивных площадок и промышленных объектов.
            </li>
          </ul>
        </lazy-sections-features-catalog>
      </div>
    </div>
    <div class="md:py-20 pt-4 pb-16">
      <div class="container">
        <h2 class="text-[2rem] font-medium text-center text-green-505">Стоимость заборов из 3D-сетки</h2>
        <p class="text-gray-150 md:text-lg mt-8 text-center">
          Хотите преобразить свой участок с помощью современного и долговечного забора? В «Забор163» мы предлагаем заборы из 3D-сетки по ценам, доступным
          каждому! Стоимость будет зависеть от высоты забора, типа сетки, длины участка и дополнительных элементов, таких как ворота, калитки или усиленные
          рейки. Вы получите подробную смету без скрытых доплат и индивидуальное предложение, которое идеально впишется в ваш бюджет и стиль участка. Оставьте
          заявку прямо сейчас, и наш специалист бесплатно рассчитает стоимость 3D-сетки для забора, предложив оптимальное решение для вашего проекта!
        </p>
        <lazy-sections-table class="mt-6" :headers="tableHeaders" :table-data="tableData" />
        <p class="text-gray-150 md:text-lg mt-8 text-center">
          Вы можете обсудить дополнительные детали заказа, например - размер ячейки сетки, толщину прутка, изгиб сетки под определенным углом.
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
        <h2 class="text-[2rem] lg:text-[2.5rem] font-medium mt-4 leading-small text-green-505">Готовые работы заборов из 3D-сетки</h2>
        <p class="text-gray-150 md:text-[1.5rem] mt-8">
          Ознакомьтесь с нашими проектами заборов из 3D-сетки в Самаре и Самарской области. Мы предлагаем современные и практичные решения для частных домов,
          дач, спортивных площадок и промышленных объектов. Каждый проект демонстрирует профессионализм нашей команды и высокое качество 3D-сетки.
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

const breadcrumbs = [{ title: 'Главная', to: '/' }, { title: 'Забор из профнастила' }];

const tableHeaders: string[] = ['Высота (M)', 'Тип сетки', 'Столбы', 'Покрытие', 'Стоимость (руб./п.м.)'];

const tableData: Record<string, string>[] = [
  {
    height: '1,5',
    thickness: 'Оцинкованная',
    posts: '60x60 мм',
    coating: 'Без покрытия',
    cost: 'От 4 000',
  },
  {
    height: '1,8',
    thickness: 'Оцинкованная',
    posts: '60x60 мм',
    coating: 'Без покрытия',
    cost: 'От 4 200',
  },
  {
    height: '2,0',
    thickness: 'Оцинкованная',
    posts: '60x60 мм',
    coating: 'Без покрытия',
    cost: 'От 4 400',
  },
  {
    height: '1,5',
    thickness: 'Полимерная',
    posts: '60x60 мм',
    coating: 'Полимер',
    cost: 'От 4 500',
  },
  {
    height: '1,8',
    thickness: 'Полимерная',
    posts: '60x60 мм',
    coating: 'Полимер',
    cost: 'От 4 500',
  },
  {
    height: '2,0',
    thickness: 'Полимерная',
    posts: '60x60 мм',
    coating: 'Полимер',
    cost: 'От 4 500',
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

const images = ['/images/pages/catalog/3d-mesh-fence/3.png', '/images/pages/catalog/3d-mesh-fence/4.png', '/images/pages/catalog/3d-mesh-fence/5.png'];

const tabsData = [
  {
    id: 'монтаж',
    title: 'Монтаж',
    description: 'После бесплатного замера и подписания договора наша команда приступает к установке 3D-забора.',
    processTitle: 'Мы гарантируем качество и оперативность за счет профессионального подхода:',
    items: [
      {
        title: 'Подготовка участка.',
        description: 'Очистка территории от растительности и мусора. Разметка линии забора с помощью колышков и шнура для точной установки.',
      },
      {
        title: 'Установка металлических столбов.',
        description:
          'В грунте бурятся или выкапываются ямы глубиной 0,8–1,2 м (в зависимости от высоты забора). Столбы 60х60мм устанавливаются вертикально и бетонируются для устойчивости. Расстояние между столбами – 2,5–3 м.',
      },
      {
        title: 'Крепление 3D-сетки.',
        description:
          'Секции 3D-сетки крепятся к столбам с помощью специальных скоб, болтов или хомутов. Для большей прочности возможна установка дополнительных реек, обеспечивающих жесткость конструкции.',
      },
      {
        title: 'Установка дополнительных элементов.',
        description: 'Монтируются ворота, калитки и декоративные элементы. Проверяется надежность креплений и выравнивание.',
      },
      {
        title: 'Финальная проверка и сдача объекта.',
        description:
          'Проводится осмотр забора на предмет дефектов, проверяется устойчивость конструкции. Убирается строительный мусор, и объект сдается с гарантией качества.',
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
    description: 'Доставим материалы (3D-сетка, столбы, крепежи) на ваш участок',
  },
  {
    icon: '/images/icons/worker.svg',
    title: 'Рабочий процесс',
    description: 'Монтаж ограждения из 3D-сетки под ключ (1–2 дня)',
  },
  {
    icon: '/images/icons/ok-finger.svg',
    title: 'Приемка работ',
    description: 'Вы принимаете работу и получаете гарантию на 1 год',
  },
];

useSeo(data);
</script>
