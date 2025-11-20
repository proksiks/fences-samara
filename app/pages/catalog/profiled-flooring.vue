<template>
  <main>
    <lazy-sections-hero-catalog image="/images/pages/catalog/profiled-flooring/1.png">
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
    <lazy-sections-features-catalog />
    <lazy-sections-table />

    <lazy-sections-slider />
    <lazy-sections-catalog />
    <lazy-sections-installment />
    <lazy-sections-recommended />
    <lazy-sections-reviews />
    <lazy-sections-callback />
  </main>
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
