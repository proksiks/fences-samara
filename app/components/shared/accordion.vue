<template>
  <div class="py-6 px-4 border border-black/10 rounded-[1.25rem]">
    <div>
      <button class="flex items-center justify-between w-full cursor-pointer text-[1.375rem] font-bold leading-small text-green-505 text-left" @click="toggle">
        <slot name="title" />
        <span class="p-2 bg-gray-155 block rounded-full transition duration-300" :class="{ '-rotate-90 bg-green-105': isOpen }">
          <icon name="name:short-arrow" class="w-6! h-6! block! transition duration-300" :class="{ 'bg-white!': isOpen, 'bg-green-505!': !isOpen }" />
        </span>
      </button>

      <Transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
        <div v-show="isOpen" class="overflow-hidden">
          <div class="py-4 opacity-0 transition-opacity duration-200" :class="{ 'opacity-100': isOpen }">
            <slot name="content" />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  show: { type: [Boolean, String], default: false },
});

const isOpen = ref(false);

onMounted(() => {
  isOpen.value = props.show === '' || props.show === true || props.show === 'true';
});

watch(
  () => props.show,
  (val) => {
    isOpen.value = val === '' || val === true || val === 'true';
  },
);

function toggle() {
  isOpen.value = !isOpen.value;
}

function beforeEnter(el: Element) {
  if (el instanceof HTMLElement) {
    el.style.height = '0px';
  }
}
function enter(el: Element) {
  if (el instanceof HTMLElement) {
    const h = el.scrollHeight;
    el.style.transition = 'height 220ms cubic-bezier(.4,0,.2,1)';
    requestAnimationFrame(() => {
      el.style.height = h + 'px';
    });
  }
}
function afterEnter(el: Element) {
  if (el instanceof HTMLElement) {
    el.style.height = 'auto';
    el.style.transition = '';
  }
}
function beforeLeave(el: Element) {
  if (el instanceof HTMLElement) {
    el.style.height = el.scrollHeight + 'px';
    el.style.transition = '';
  }
}
function leave(el: Element) {
  if (el instanceof HTMLElement) {
    el.style.transition = 'height 200ms cubic-bezier(.4,0,.2,1)';
    requestAnimationFrame(() => {
      el.style.height = '0px';
    });
  }
}
function afterLeave(el: Element) {
  if (el instanceof HTMLElement) {
    el.style.height = '0px';
    el.style.transition = '';
  }
}
</script>
