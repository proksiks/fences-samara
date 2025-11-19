<template>
  <span>
    <template v-if="labelText">
      <label class="mb-3 text-green-505 block cursor-pointer" :for="id">
        {{ labelText }}
      </label>
    </template>

    <span class="relative block">
      <input
        :id="id"
        ref="inputRef"
        :placeholder="placeholder"
        :class="[
          'border-gray-250 w-full py-4 pl-4 pr-10 rounded-4xl border hover:ring-gray-205 hover:ring-1 focus:outline-none focus:ring-2 focus:ring-green-105 placeholder:text-gray-150 transition duration-30 ease-in-out',
          isError ? 'border-red-500 focus:ring-red-500' : '',
        ]"
        :type="inputType"
        :inputmode="inputMode"
      >
      <transition name="error-message">
        <span v-if="isError && errorText" class="text-red-500 text-sm mt-1 block absolute -bottom-4">{{ errorText }}</span>
      </transition>

      <template v-if="iconName">
        <icon :name="`name:${iconName}`" class="w-5! h-5! bg-green-505! absolute top-1/2 right-4 -translate-y-1/2" />
      </template>
    </span>
  </span>
</template>

<script lang="ts" setup>
import IMask from 'imask';
import { onMounted, ref, watch, onUnmounted, computed } from 'vue';

interface Props {
  id?: string;
  iconName?: string;
  placeholder?: string;
  labelText?: string;
  isError?: boolean;
  errorText?: string;
  type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'date';
  mask?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
});

const inputRef = ref<HTMLInputElement | null>(null);
let maskInstance: unknown = null;

const inputType = computed(() => {
  if (props.mask) return 'text';
  return props.type;
});

const inputMode = computed(() => {
  if (props.mask) return 'text';
  if (props.type === 'number') return 'numeric';
  if (props.type === 'email') return 'email';
  return 'text';
});

onMounted(() => {
  if (props.mask && inputRef.value) {
    maskInstance = IMask(inputRef.value, {
      mask: props.mask,
    });
  }
});
watch(
  () => props.mask,
  (newMask) => {
    if (maskInstance) {
      (maskInstance as { destroy: () => void }).destroy();
      maskInstance = null;
    }

    if (newMask && inputRef.value) {
      maskInstance = IMask(inputRef.value, {
        mask: newMask,
      });
    }
  },
);

onUnmounted(() => {
  if (maskInstance) {
    (maskInstance as { destroy: () => void }).destroy();
  }
});
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
