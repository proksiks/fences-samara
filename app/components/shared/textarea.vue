<template>
  <span>
    <template v-if="labelText">
      <label class="mb-3 text-green-505 block cursor-pointer" :for="id">
        {{ labelText }}
      </label>
    </template>

    <span class="relative block">
      <textarea
        :id="id"
        v-model="model"
        :placeholder="placeholder"
        :class="[
          'block border-gray-250 w-full py-4 pl-4 pr-10 rounded-4xl border hover:ring-gray-205 hover:ring-1 focus:outline-none focus:ring-2 focus:ring-green-105 placeholder:text-gray-150 transition duration-300 ease-in-out',
          isError ? 'border-red-500 focus:ring-red-500' : ''
        ]"
      />
      <transition name="error-message">
        <span v-if="isError && errorText" class="text-red-500 text-sm mt-1 block">{{ errorText }}</span>
      </transition>

      <template v-if="iconName">
        <icon :name="`name:${iconName}`" class="w-5! h-5! bg-green-505! absolute top-4 right-4 pointer-events-none" />
      </template>
    </span>
  </span>
</template>

<script lang="ts" setup>
interface Props {
  id?: string;
  iconName?: string;
  placeholder?: string;
  labelText?: string;
  isError?: boolean;
  errorText?: string;
}

withDefaults(defineProps<Props>(), {
  isError: false,
});

const model = defineModel<string>();
</script>

<style scoped>
.error-message-enter-active,
.error-message-leave-active {
  transition: all 0.3s ease;
}

.error-message-enter-from,
.error-message-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
