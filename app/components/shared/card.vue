<template>
  <div class="catalog-card">
    <div class="relative">
      <nuxt-picture class="block w-full" :src="image" :alt="shield" />
      <div class="absolute py-1 px-4 bg-green-105 text-white top-6 right-px rounded-l-4xl font-medium">{{ shield }}</div>
    </div>

    <div class="-mt-20 relative pl-7">
      <div class="bg-white p-6 rounded-[1.25rem] catalog-card_shadow">
        <div class="flex justify-between">
          <div class="text-green-505 font-bold text-[1.375rem]">{{ title }}</div>
          <div>
            <shared-button class="p-4.5 rounded-[1.25rem]">
              <icon name="name:basket" class="w-6! h-6! block!" />
            </shared-button>
          </div>
        </div>
        <div class="flex items-center mt-3">
          <div class="text-[1.25rem] font-medium">от {{ price }} <span class="text-base">₽</span>/п.м.</div>
          <div class="flex gap-3 text-[0.5rem] mx-auto">
            <div v-for="tag in tags" :key="tag" class="px-4 py-1 text-green-105 border border-green-105 rounded-4xl font-medium">{{ tag }}</div>
          </div>
        </div>
        <div class="mt-3">
          <p class="text-gray-205 text-xs">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  image: string;
  shield: string;
  title: string;
  price: string;
  tags: string[];
  description: string;
}
defineProps<Props>();
</script>

<style>
.catalog-card picture img {
  width: 100%;
  display: block;
}
.catalog-card_shadow {
  box-shadow: 0px 0px 18.8px 0px #0000000d;
}
</style>
