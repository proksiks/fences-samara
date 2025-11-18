<template>
  <header class="sticky z-10 top-0 border-b border-green-105 hidden lg:block bg-white">
    <nav class="container flex items-center">
      <span class="flex items-center gap-2 uppercase font-bold text-2xl">
        <span>забор</span>
        <span class="text-white bg-green-105 rounded-sm p-1">163</span>
      </span>
      <ul class="flex items-center gap-8 ml-4 xl:ml-32">
        <li>
          <nuxt-link class="block py-8 border-b-2 border-white transition-colors" active-class="border-green-105!" to="/">Главная</nuxt-link>
        </li>
        <li>
          <nuxt-link class="block py-8 border-b-2 border-white transition-colors" active-class="border-green-105!" to="/catalog">Каталог</nuxt-link>
        </li>
        <li>
          <nuxt-link class="block py-8 border-b-2 border-white transition-colors" active-class="border-green-105!" to="/contacts">Контакты</nuxt-link>
        </li>
        <li>
          <nuxt-link class="block py-8 border-b-2 border-white transition-colors" active-class="border-green-105!" to="/projects">Наши проекты</nuxt-link>
        </li>
      </ul>

      <span class="flex items-center gap-6 ml-auto">
        <div>
          <a
            href="tel:+79203447027"
            class="bg-gray-105 flex items-center whitespace-nowrap gap-2 px-5 py-3 rounded-4xl hover:bg-gray-100 active:bg-gray-200 transition"
          >
            <icon name="name:phone" class="w-4! h-4! fill-black!" /> <span> +7 (920) 344 70 27</span>
          </a>
        </div>
        <shared-button class="w-full px-5 py-3 rounded-4xl font-medium text-white flex items-center justify-center gap-2" variant="green"> Заказать </shared-button>
      </span>
    </nav>
  </header>
</template>

<script lang="ts" setup></script>
