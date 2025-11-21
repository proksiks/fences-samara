<template>
  <div class="calculator-container bg-white p-6 rounded-xl shadow-md">
    <h3 class="text-xl font-semibold mb-4 text-green-505">{{ title }}</h3>
    
    <div class="mb-6">
      <shared-input 
        v-model="sotkiString"
        type="number"
        :label-text="labelSotki"
        :placeholder="placeholderSotki"
        :min="minValue"
        :step="stepValue"
      />
    </div>
    
    <button
      @click="calculate"
      class="w-full mb-6 bg-green-105 hover:bg-green-505 active:bg-green-700 transition-colors duration-200 text-white py-3 px-4 rounded-4xl cursor-pointer"
    >
      {{ buttonText }}
    </button>
    
    <div class="result-section bg-green-50 p-4 rounded-lg">
      <p class="text-sm text-gray-600">{{ resultLabel }}:</p>
      <p class="text-xl font-semibold text-green-505">{{ resultText }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title?: string;
  labelSotki?: string;
  placeholderSotki?: string;
  resultLabel?: string;
  buttonText?: string;
  minValue?: number;
  stepValue?: string;
  initialSotki?: number;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Калькулятор погонных метров забора',
  labelSotki: 'Количество соток',
  placeholderSotki: 'Введите количество соток',
  resultLabel: 'Результат',
  buttonText: 'Рассчитать',
  minValue: 0,
  stepValue: '0.01',
  initialSotki: 0
});

const sotkiString = ref(props.initialSotki.toString());
const resultText = ref('Введите количество соток и нажмите "Рассчитать"');

// Вычисляем числовые значения
const sotki = computed(() => {
  const value = parseFloat(sotkiString.value);
  return isNaN(value) ? 0 : value;
});

// Вычисляем квадратные метры (1 сотка = 100 м²)
const squareMeters = computed(() => {
  return sotki.value * 100;
});

// Вычисляем приблизительный периметр участка, предполагая квадратную форму
const perimeter = computed(() => {
  if (squareMeters.value <= 0) return 0;
  // Для квадратного участка: сторона = sqrt(площадь), периметр = 4 * сторона
  const sideLength = Math.sqrt(squareMeters.value);
  return 4 * sideLength;
});

const calculate = () => {
  if (isNaN(sotki.value) || sotki.value < 0) {
    resultText.value = 'Введите корректное число';
    return;
  }
  
  resultText.value = `${sotki.value} соток = ${squareMeters.value} м² площади ≈ ${perimeter.value.toFixed(2)} пог.м забора`;
};
</script>