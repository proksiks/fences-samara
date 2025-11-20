<template>
  <div class="border border-[#BCC0C5]/33 rounded-xl w-full overflow-auto">
    <table class="w-full">
      <thead class="w-full">
        <tr class="bg-gray-155 border-b border-[#BCC0C5]">
          <th v-for="(header, index) in headers" :key="index" class="text-[0.625rem] md:text-[1.5rem] font-bold md:p-4 p-1.5 text-left">{{ header }}</th>
        </tr>
      </thead>
      <tbody class="w-full">
        <tr v-for="(row, index) in tableData" :key="index" :class="index % 2 !== 0 ? 'bg-gray-155' : ''">
          <td v-for="(value, key) in row" :key="key" class="md:p-4 p-1.5 font-medium text-[0.625rem] md:text-[1.5rem] leading-snug whitespace-nowrap">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  headers?: string[];
  tableData?: Record<string, string>[];
}

withDefaults(defineProps<Props>(), {
  headers: () => [],
  tableData: () => [],
});
</script>
