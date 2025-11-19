<template>
  <div class="relative">
    <navigation-menu transparent />
    <div class="relative">
      <slot />
    </div>
    <footer-menu transparent />
    <shared-callback-modal v-model="show" :text="data.text" :title="data.title" :tags="data.tags" :image="data.image" :price="data.priceText" />
    <modals-container />

    <nuxt-picture
      class="layout-promo-bg absolute h-full w-full left-0 top-0"
      height="2562"
      width="1920"
      src="/images/layouts/promo-bg.jpg"
      alt="Background Image"
      priority
    />
  </div>
</template>

<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal';
const { show, data } = storeToRefs(useCallbackModalStore());
</script>

<style>
.layout-promo-bg img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
