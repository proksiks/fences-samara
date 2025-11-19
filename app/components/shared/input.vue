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
      />
      <transition name="error-message">
        <span v-if="isError && errorText" class="text-red-500 text-sm mt-1 block absolute">{{ errorText }}</span>
      </transition>

      <template v-if="iconName">
        <icon :name="`name:${iconName}`" class="w-5! h-5! bg-green-505! absolute top-1/2 right-4 -translate-y-1/2" />
      </template>
    </span>
  </span>
</template>

<script lang="ts" setup>
import IMask, { type InputMask } from 'imask';

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
  isError: false,
  errorText: '',
  iconName: '',
  placeholder: '',
  labelText: '',
  id: '',
  mask: '',
});

const emit = defineEmits(['update:modelValue']);

const model = defineModel<string>();

const inputRef = ref<HTMLInputElement | null>(null);

let maskInstance: InputMask | null = null;

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

    if (model.value) {
      maskInstance.value = String(model.value);
    }

    maskInstance.on('accept', () => {
      emit('update:modelValue', maskInstance?.value);
    });
  } else if (inputRef.value) {
    inputRef.value.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      emit('update:modelValue', target.value);
    });
  }

  if (model.value && inputRef.value && !props.mask) {
    inputRef.value.value = String(model.value);
  }
});

watch(
  () => props.mask,
  (newMask) => {
    if (maskInstance) {
      maskInstance.destroy();
      maskInstance = null;
    }

    if (newMask && inputRef.value) {
      maskInstance = IMask(inputRef.value, {
        mask: newMask,
      });

      if (model.value) {
        maskInstance.value = String(model.value);
      }

      maskInstance.on('accept', () => {
        emit('update:modelValue', maskInstance?.value);
      });
    }
  },
);

watch(model, (newValue) => {
  if (maskInstance) {
    maskInstance.value = String(newValue || '');
  } else if (inputRef.value) {
    inputRef.value.value = String(newValue || '');
  }
});

onUnmounted(() => {
  if (maskInstance) {
    maskInstance.destroy();
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
