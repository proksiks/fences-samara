<template>
  <header class="sticky z-10 top-0 border-b border-green-105 hidden md:block bg-white">
    <nav class="container flex items-center">
      <span class="flex items-center gap-2 uppercase font-bold text-2xl">
        <span>забор</span>
        <span class="text-white bg-green-105 rounded-sm p-1">163</span>
      </span>
      <ul class="flex items-center gap-8 ml-32">
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
    </nav>
  </header>
</template>

<script lang="ts" setup></script>
