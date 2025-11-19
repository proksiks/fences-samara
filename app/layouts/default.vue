<template>
  <div>
    <navigation-menu />
    <div class="relative">
      <slot />
    </div>
    <footer-menu />
    <shared-callback-modal v-model="show" :text="data.text" :title="data.title" :tags="data.tags" :image="data.image" />
    <modals-container />
  </div>
</template>

<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal';
const { show, data } = storeToRefs(useCallbackModalStore());
</script>
