<template>
  <component :is="componentTag" v-bind="componentProps" class="cursor-pointer" :class="variant">
    <slot :default="() => {}" />
  </component>
</template>

<script lang="ts" setup>
interface Button {
  to?: string;
  target?: string;
  variant?: 'green' | 'white' | 'border';
}

const props = withDefaults(defineProps<Button>(), {
  variant: 'green',
});


const componentTag = computed(() => {
  if (props.to && props.target !== '_blank') return resolveComponent('nuxt-link');
  if (props.target === '_blank') return 'a';
  return 'button';
});

const componentProps = computed(() => {
  if (props.to && props.target !== '_blank') {
    return { to: props.to };
  }
  if (props.target === '_blank') {
    return { href: props.to, target: props.target };
  }
  return {};
});

const variant = computed(() => {
  if (props.variant === 'green') {
    return 'bg-green-105 hover:bg-green-505 active:bg-green-700 transition-colors duration-200 text-white';
  }
  if (props.variant === 'white') {
    return 'bg-blue-600';
  }
  if (props.variant === 'border') {
    return 'bg-white border border-gray-250 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200';
  }
  return 'bg-gray-200';
});
</script>
