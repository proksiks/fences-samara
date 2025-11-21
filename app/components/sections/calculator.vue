<template>
  <div class="calculator-container bg-white p-6 rounded-xl shadow-md">
    <h3 class="text-xl font-semibold mb-4 text-green-505">{{ title }}</h3>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">{{ labelX }} (X)</label>
        <input
          v-model.number="x"
          type="number"
          :min="minValue"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          :placeholder="`Введите ${labelX.toLowerCase()}`"
        />
      </div>
      
      <div class="flex items-end justify-center">
        <span class="text-2xl font-bold text-gray-700">×</span>
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">{{ labelY }} (Y)</label>
        <input
          v-model.number="y"
          type="number"
          :min="minValue"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          :placeholder="`Введите ${labelY.toLowerCase()}`"
        />
      </div>
    </div>
    
    <div class="mb-6">
      <label class="block text-sm font-medium text-gray-700 mb-1">{{ labelZ }} (Z)</label>
      <input
        v-model.number="z"
        type="number"
        :min="minValue"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-505"
        :placeholder="`Введите ${labelZ.toLowerCase()}`"
      />
    </div>
    
    <div class="result-section bg-green-50 p-4 rounded-lg mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="text-sm text-gray-600">{{ resultLabel }}:</p>
          <p class="text-xl font-semibold text-green-505">{{ resultValue }} {{ resultUnit }}</p>
        </div>
        <div>
          <p class="text-sm text-gray-600">{{ totalLabel }}:</p>
          <p class="text-xl font-semibold text-green-505">{{ formatCurrency(totalResult) }}</p>
        </div>
      </div>
    </div>
    
    <div class="description text-gray-600 text-sm">
      <p>{{ calculationDescription }}</p>
      <p class="mt-1">{{ formulaDescription }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title?: string;
  labelX?: string;
  labelY?: string;
  labelZ?: string;
  resultLabel?: string;
  resultUnit?: string;
  totalLabel?: string;
  calculationDescription?: string;
  formulaDescription?: string;
  initialX?: number;
  initialY?: number;
  initialZ?: number;
  minValue?: number;
  calculationFormula?: 'multiplyXYbyZ' | 'addXYthenMultiplyByZ' | 'simpleMultiplyXYZ';
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Калькулятор стоимости',
  labelX: 'Ширина',
  labelY: 'Высота',
  labelZ: 'Стоимость за погонный метр',
  resultLabel: 'Погонные метры',
  resultUnit: 'п.м.',
  totalLabel: 'Общая стоимость',
  calculationDescription: 'Расчет: (Ширина × Высота) × Стоимость за погонный метр = Общая стоимость',
  formulaDescription: 'Формула: (X × Y) × Z = Общая стоимость',
  initialX: 1,
  initialY: 1,
  initialZ: 1000,
  minValue: 0,
  calculationFormula: 'multiplyXYbyZ'
});

const x = ref(props.initialX);
const y = ref(props.initialY);
const z = ref(props.initialZ);

// Вычисляем результат в зависимости от формулы
const resultValue = computed(() => {
  if (props.calculationFormula === 'multiplyXYbyZ') {
    // Формула: X * Y (для подсчета погонных метров)
    if (x.value && y.value) {
      return x.value * y.value;
    }
  } else if (props.calculationFormula === 'addXYthenMultiplyByZ') {
    // Формула: (X + Y) * Z
    if (x.value && y.value) {
      return x.value + y.value;
    }
  } else if (props.calculationFormula === 'simpleMultiplyXYZ') {
    // Формула: X * Y * Z
    if (x.value && y.value && z.value) {
      return x.value * y.value * z.value;
    }
  }
  
  return 0;
});

// Вычисляем общую стоимость
const totalResult = computed(() => {
  if (props.calculationFormula === 'multiplyXYbyZ') {
    // Формула: (X * Y) * Z
    if (x.value && y.value && z.value) {
      return resultValue.value * z.value;
    }
  } else if (props.calculationFormula === 'addXYthenMultiplyByZ') {
    // Формула: (X + Y) * Z
    if (x.value && y.value && z.value) {
      return resultValue.value * z.value;
    }
  } else if (props.calculationFormula === 'simpleMultiplyXYZ') {
    // Формула: X * Y * Z (уже вычислено в resultValue)
    if (x.value && y.value && z.value) {
      return resultValue.value;
    }
  }
  
  return 0;
});

// Форматируем стоимость с разделением разрядов
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  }).format(value);
};
</script>