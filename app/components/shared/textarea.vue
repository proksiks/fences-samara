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
        :placeholder="placeholder"
        :class="[
          'block border-gray-250 w-full py-4 pl-4 pr-10 rounded-4xl border hover:ring-gray-205 hover:ring-1 focus:outline-none focus:ring-2 focus:ring-green-105 placeholder:text-gray-150 transition duration-300 ease-in-out',
          isError ? 'border-red-500 focus:ring-red-500' : ''
        ]"
      />
      <span v-if="isError && errorText" class="text-red-500 text-sm mt-1 block">{{ errorText }}</span>

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

defineProps<Props>();
</script>

<style scoped></style>
