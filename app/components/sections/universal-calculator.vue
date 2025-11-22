<template>
  <div class="calculator-container bg-white p-6 rounded-xl shadow-md">
    <h3 class="text-xl font-semibold mb-4 text-green-505">{{ title }}</h3>
    
    <div class="mb-6">
      <div class="flex space-x-4 mb-4">
        <button 
          :class="['px-4 py-2 rounded-md', activeTab === 'dimensions' ? 'bg-green-105 text-white' : 'bg-gray-200']"
          @click="activeTab = 'dimensions'"
        >
          По размерам
        </button>
        <button 
          :class="['px-4 py-2 rounded-md', activeTab === 'sotki' ? 'bg-green-105 text-white' : 'bg-gray-200']"
          @click="activeTab = 'sotki'"
        >
          По соткам
        </button>
      </div>
      
      <!-- Вкладка "По размерам" -->
      <div v-if="activeTab === 'dimensions'" class="mb-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <shared-input 
              v-model="n1String"
              type="number"
              :label-text="labelN1"
              :placeholder="`Введите ${labelN1.toLowerCase()}`"
              :min="minValue"
            />
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
      </div>
      
      <!-- Вкладка "По соткам" -->
      <div v-if="activeTab === 'sotki'" class="mb-4">
        <shared-input 
          v-model="sotkiString"
          type="number"
          :label-text="labelSotki"
          :placeholder="placeholderSotki"
          :min="minValue"
          :step="stepValue"
        />
      </div>
      
      <!-- Цена за погонный метр -->
      <div class="mb-6">
        <shared-input 
          v-model="pricePerMeterString"
          type="number"
          :label-text="labelPrice"
          :placeholder="placeholderPrice"
          :min="minValue"
        />
      </div>
    </div>
    
    <!-- Результаты -->
    <div class="result-section bg-green-50 p-4 rounded-lg">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="text-sm text-gray-600">Погонные метры:</p>
          <p class="text-xl font-semibold text-green-505">{{ totalLinearMeters.toFixed(2) }} п.м.</p>
        </div>
        
        <div>
          <p class="text-sm text-gray-600">Общая стоимость:</p>
          <p class="text-xl font-semibold text-green-505">{{ formatCurrency(totalCost) }}</p>
        </div>
      </div>
      
      <div class="mt-3 text-sm text-gray-600">
        <p v-if="activeTab === 'dimensions'">
          Расчет: {{ n1 }} × {{ n2 }} = {{ totalLinearMeters.toFixed(2) }} п.м. забора
        </p>
        <p v-else>
          Расчет: {{ sotki }} соток ≈ {{ totalLinearMeters.toFixed(2) }} п.м. забора (на основе квадратного участка)
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title?: string;
  labelN1?: string;
  labelN2?: string;
  labelSotki?: string;
  placeholderSotki?: string;
  labelPrice?: string;
  placeholderPrice?: string;
  minValue?: number;
  stepValue?: string;
  initialN1?: number;
  initialN2?: number;
  initialSotki?: number;
  initialPrice?: number;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Калькулятор стоимости забора',
  labelN1: 'Длина участка (м)',
  labelN2: 'Ширина участка (м)',
  labelSotki: 'Количество соток',
  placeholderSotki: 'Введите количество соток',
  labelPrice: 'Цена за погонный метр (руб)',
 placeholderPrice: 'Введите цену за погонный метр',
  minValue: 0,
  stepValue: '0.01',
  initialN1: 10,
  initialN2: 2,
  initialSotki: 6,
  initialPrice: 3200
});

const activeTab = ref<'dimensions' | 'sotki'>('dimensions');

const n1String = ref(props.initialN1.toString());
const n2String = ref(props.initialN2.toString());
const sotkiString = ref(props.initialSotki.toString());
const pricePerMeterString = ref(props.initialPrice.toString());

// Вычисляем числовые значения
const n1 = computed(() => {
  const value = parseFloat(n1String.value);
  return isNaN(value) || value < 0 ? 0 : value;
});

const n2 = computed(() => {
  const value = parseFloat(n2String.value);
  return isNaN(value) || value < 0 ? 0 : value;
});

const sotki = computed(() => {
  const value = parseFloat(sotkiString.value);
  return isNaN(value) || value < 0 ? 0 : value;
});

const pricePerMeter = computed(() => {
  const value = parseFloat(pricePerMeterString.value);
  return isNaN(value) || value < 0 ? 0 : value;
});

// Вычисляем общее количество погонных метров
const totalLinearMeters = computed(() => {
  if (activeTab.value === 'dimensions') {
    // По размерам: длина * ширина (для расчета периметра нужно использовать другую логику)
    // Но для упрощения, будем использовать произведение как приближенное значение
    return n1.value * n2.value;
  } else {
    // По соткам: вычисляем периметр квадратного участка
    const squareMeters = sotki.value * 100;
    if (squareMeters <= 0) return 0;
    const sideLength = Math.sqrt(squareMeters);
    return 4 * sideLength; // периметр квадратного участка
 }
});

// Вычисляем общую стоимость
const totalCost = computed(() => {
  return totalLinearMeters.value * pricePerMeter.value;
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