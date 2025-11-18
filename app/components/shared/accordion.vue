<template>
  <div class="py-6 px-4 border border-black/10 rounded-[1.25rem]">
    <div>
      <button class="flex items-center justify-between w-full cursor-pointer text-[1.375rem] font-bold leading-small text-green-505">
        <slot name="title" />
        <span class="p-2 bg-gray-155 block rounded-full">
          <icon name="name:short-arrow block!" class="w-6! h-6! fill-green-505" />
        </span>
      </button>

      <div>
        <div class="pt-5">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  open: Boolean,
});
</script>
