<template>
  <div>
    <navigation-menu />
    <div class="relative">
      <slot />
    </div>
    <footer-menu />
    <shared-callback-modal />
    <modals-container />
  </div>
</template>

<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal';
</script>
