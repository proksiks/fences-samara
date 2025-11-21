<template>
  <div class="">
    <div class="pb-7.5">
      <div class="relative">
        <nuxt-picture
          class="block w-full overflow-hidden rounded-[1.25rem] border border-green-505"
          width="430"
          height="340"
          :src="image"
          :alt="title"
          loading="lazy"
        />
        <div class="absolute -right-0.5 -bottom-7.5 colors-card_shadow bg-white rounded-[1.25rem] px-4 py-6 text-green-505">
          <h3 class="leading-small font-bold text-lg">{{ title }}</h3>
          <p class="leading-small font-medium text-lg">{{ shade }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  image?: string;
  title?: string;
  shade?: string;
}
defineProps<Props>();
</script>

<style>
.colors-card_shadow {
  box-shadow: 0px 0px 18.8px 0px #0000000d;
}
</style>
