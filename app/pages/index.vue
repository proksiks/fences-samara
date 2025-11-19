<template>
  <div>
    <lazy-sections-hero />
    <lazy-sections-features />
    <lazy-sections-banner />
    <lazy-sections-slider />
    <lazy-sections-catalog />
    <lazy-sections-installment />
    <lazy-sections-recommended />
    <lazy-sections-reviews />
    <lazy-sections-callback />
  </div>
</template>

<script lang="ts" setup>
const data = reactive({
  title: 'Установка забора для частного дома или дачи под ключ — Самара, Самарская область',
  description:
    'Установите забор в Самаре и Самарской области под ключ. Низкие цены за погонный метр, качественные материалы и бесплатный замер. Изготовим металлический забор из профнастила, на ленточном фундаменте, 3D-забор, сетку-рабицу, штакетник и другие варианты по вашему желанию. Звоните по телефону +7 (920) 344-70-27.',
  image: '/images/catalog/9.png',
});

useSeo(data);
</script>
