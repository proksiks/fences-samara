<template>
  <div class="calculator-container bg-white p-6 rounded-xl shadow-md">
    <h3 class="text-xl font-semibold mb-4 text-green-505">{{ title }}</h3>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div>
        <shared-input 
          v-model="n1String"
          type="number"
          :label-text="labelN1"
          :placeholder="`Введите ${labelN1.toLowerCase()}`"
          :min="minValue"
        />
      </div>
      
      <div class="flex items-end justify-center">
        <span class="text-2xl font-bold text-gray-70">×</span>
      </div>
      
      <div>
        <shared-input 
          v-model="n2String"
          type="number"
          :label-text="labelN2"
          :placeholder="`Введите ${labelN2.toLowerCase()}`"
          :min="minValue"
        />
      </div>
    </div>
    
    <div class="result-section bg-green-50 p-4 rounded-lg mb-6">
      <div class="grid grid-cols-1 gap-4">
        <div>
          <p class="text-sm text-gray-600">{{ resultLabel }}:</p>
          <p class="text-xl font-semibold text-green-505">{{ formatResult }} {{ resultUnit }}</p>
        </div>
      </div>
      <div class="description text-gray-600 text-sm">
        <p>{{ formulaDescription }}</p>
        <p class="mt-1">{{ calculationResult }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title?: string;
  labelN1?: string;
  labelN2?: string;
  resultLabel?: string;
  resultUnit?: string;
  formulaDescription?: string;
  initialN1?: number;
  initialN2?: number;
  minValue?: number;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Калькулятор',
  labelN1: 'Первое число',
  labelN2: 'Второе число',
  resultLabel: 'Результат',
  resultUnit: '',
  formulaDescription: 'Формула: n1 × n2 = n3',
  initialN1: 1,
  initialN2: 1,
  minValue: 0
});

const n1String = ref(props.initialN1.toString());
const n2String = ref(props.initialN2.toString());

// Вычисляем числовые значения
const n1 = computed(() => {
  const value = parseFloat(n1String.value);
  return isNaN(value) ? 0 : value;
});

const n2 = computed(() => {
  const value = parseFloat(n2String.value);
  return isNaN(value) ? 0 : value;
});

// Вычисляем результат n1 * n2
const result = computed(() => {
 return n1.value * n2.value;
});

// Форматируем результат
const formatResult = computed(() => {
  return result.value.toLocaleString('ru-RU');
});

// Строка с вычислением
const calculationResult = computed(() => {
  return `${n1.value} × ${n2.value} = ${formatResult.value}`;
});
</script>