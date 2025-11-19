<template>
  <div>
    <navigation-menu />
    <div class="relative">
      <slot />
    </div>
    <footer-menu />
    <shared-callback-modal v-model="show" />
    <modals-container />
  </div>
</template>

<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal';

const { show } = storeToRefs(useCallbackModalStore());
</script>
