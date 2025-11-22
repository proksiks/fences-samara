<template>
  <div class="calculator-container bg-white p-6 rounded-xl shadow-md">
    <div class="flex lg:flex-row flex-col justify-between lg:items-center gap-4">
      <h3 class="text-xl font-semibold text-green-505">{{ title }}</h3>
      <div class="flex space-x-4">
        <shared-button class="py-2 px-4 rounded-lg" :variant="activeTab === 'sotki' ? 'green' : 'border'" @click="activeTab = 'sotki'">
          По соткам
        </shared-button>
        <shared-button class="py-2 px-4 rounded-lg" :variant="activeTab === 'dimensions' ? 'green' : 'border'" @click="activeTab = 'dimensions'">
          По размерам
        </shared-button>
      </div>
    </div>

    <div class="mt-10">
      <div class="mb-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <shared-input
              id="pricePerMeter"
              v-model="pricePerMeterString"
              type="number"
              :label-text="labelPrice"
              :placeholder="placeholderPrice"
              :min="minValue"
            />
          </div>
          <div v-if="activeTab === 'dimensions'">
            <shared-input
              id="firstDimension"
              v-model="n1String"
              type="number"
              :label-text="labelN1"
              :placeholder="`Введите ${labelN1.toLowerCase()}`"
              :min="minValue"
            />
          </div>
          <div v-if="activeTab === 'dimensions'">
            <shared-input
              id="secondDimension"
              v-model="n2String"
              type="number"
              :label-text="labelN2"
              :placeholder="`Введите ${labelN2.toLowerCase()}`"
              :min="minValue"
            />
          </div>
          <div v-if="activeTab === 'sotki'">
            <shared-input
              id="sotki"
              v-model="sotkiString"
              type="number"
              :label-text="labelSotki"
              :placeholder="placeholderSotki"
              :min="minValue"
              :step="stepValue"
            />
          </div>
        </div>
      </div>
    </div>

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
        <p v-if="activeTab === 'dimensions'">Расчет: {{ n1 }} × {{ n2 }} = {{ totalLinearMeters.toFixed(2) }} п.м. забора</p>
        <p v-else>Расчет: {{ sotki }} соток ≈ {{ totalLinearMeters.toFixed(2) }} п.м. забора (на основе квадратного участка)</p>
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
  initialPrice: 3200,
});

const activeTab = ref<'dimensions' | 'sotki'>('sotki');

const n1String = ref(props.initialN1.toString());
const n2String = ref(props.initialN2.toString());
const sotkiString = ref(props.initialSotki.toString());
const pricePerMeterString = ref(props.initialPrice.toString());

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

const totalLinearMeters = computed(() => {
  if (activeTab.value === 'dimensions') {
    return n1.value * n2.value;
  } else {
    const squareMeters = sotki.value * 100;
    if (squareMeters <= 0) return 0;
    const sideLength = Math.sqrt(squareMeters);
    return 4 * sideLength;
  }
});

const totalCost = computed(() => {
  return totalLinearMeters.value * pricePerMeter.value;
});

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(value);
};
</script>
