<template>
  <div class="py-6 px-4 border border-black/10 rounded-[1.25rem]">
    <div>
      <button class="flex items-center justify-between w-full cursor-pointer text-[1.375rem] font-bold leading-small text-green-505 text-left" @click="toggle">
        <slot name="title" />
        <span class="p-2 bg-gray-155 block rounded-full transition duration-300" :class="{ '-rotate-90 bg-green-105': isOpen }">
          <icon name="name:short-arrow" class="w-6! h-6! block! transition duration-300" :class="{ 'bg-white!': isOpen, 'bg-green-505!': !isOpen }" />
        </span>
      </button>

      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
        <div v-show="isOpen" class="overflow-hidden">
          <div class="py-4 opacity-0 transition duration-300" :class="{ 'opacity-100': isOpen }">
            <slot name="content" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  show: { type: [Boolean, String], default: false },
  active: { type: Boolean, default: false },
});

const emit = defineEmits(['activate']);

const isOpen = ref(false);

onMounted(() => {
  isOpen.value = props.show === '' || props.show === true || props.show === 'true' || props.active;
});

watch(
  () => props.show,
  (val) => {
    isOpen.value = val === '' || val === true || val === 'true';
  },
);

watch(
  () => props.active,
  (val) => {
    isOpen.value = val;
  },
);

function toggle() {
  emit('activate');
}

const { beforeEnter, enter, afterEnter, beforeLeave, leave, afterLeave } = useHeightAnimation();
</script>
