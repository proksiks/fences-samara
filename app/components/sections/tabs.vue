<template>
  <div class="py-20">
    <div class="bg-gray-105">
      <div class="container">
        <div class="flex items-center justify-between md:justify-start pt-7">
          <button
            class="cursor-pointer md:flex-none flex-1 pt-3 md:px-10 px-4 md:pb-10 pb-8 md:text-[1.5rem] font-medium transition-colors duration-300"
            :class="{ 'bg-white': activeTab === 'монтаж' }"
            @click="setActiveTab('монтаж')"
          >
            Монтаж
          </button>
          <button
            class="cursor-pointer md:flex-none flex-1 pt-3 md:px-10 px-4 md:pb-10 pb-8 md:text-[1.5rem] font-medium transition-colors duration-300"
            :class="{ 'bg-white': activeTab === 'сроки' }"
            @click="setActiveTab('сроки')"
          >
            Сроки
          </button>
          <button
            class="cursor-pointer md:flex-none flex-1 pt-3 md:px-10 px-4 md:pb-10 pb-8 md:text-[1.5rem] font-medium transition-colors duration-300"
            :class="{ 'bg-white': activeTab === 'доставка' }"
            @click="setActiveTab('доставка')"
          >
            Доставка
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div v-if="activeTab === 'монтаж'" key="монтаж" class="md:pt-18 pt-14">
        <h2 class="text-[2rem] md:text-[3.125rem] font-medium text-green-505">Монтаж</h2>

        <p class="md:text-lg text-gray-205 md:mt-6 mt-3">
          Проведя бесплатный замер и подписав договор, наша команда приступает к этапу монтажа. Наши бригады используют металлические столбы для забора из
          профлиста и выполняют монтаж быстро, качественно и с учетом всех технических требований.
        </p>
        <p class="md:text-lg font-medium my-6">Мы обеспечиваем надежность и долговечность за счёт чётко организованного процесса:</p>
        <ol class="list-decimal list-inside">
          <li class="md:text-lg mt-2">
            <span class="text-gray-205 font-medium">Подготовка участка. </span> Проводится очистка территории от растительности, мусора и препятствий.
            Выполняется разметка линии забора с помощью колышков и шнура, чтобы обеспечить ровную установку.
          </li>
          <li class="md:text-lg mt-2">
            <span class="text-gray-205 font-medium">Установка металлических столбов.</span>В грунте бурятся или выкапываются ямы глубиной 0,8–1,2 м (в
            зависимости от типа почвы и высоты забора). Столбы для забора из профнастила (металлические трубы 60x60 мм) устанавливаются вертикально и
            бетонируются для устойчивости. Расстояние между столбами – 2–3 м.
          </li>
          <li class="md:text-lg mt-2">
            <span class="text-gray-205 font-medium">Монтаж горизонтальных лаг.</span> К столбам привариваются или прикручиваются металлические лаги (поперечные
            профили 40x20 мм). Они служат основой для крепления листов профнастила. Лаги обрабатываются антикоррозийным покрытием для защиты от ржавчины.
          </li>
          <li class="md:text-lg mt-2">
            <span class="text-gray-205 font-medium">Крепление профнастила.</span> Листы профнастила крепятся к лагам с помощью саморезов с резиновой шайбой,
            обеспечивающих герметичность соединений. Листы монтируются внахлест (на одну волну) для прочности и скрытия стыков. При желании возможна установка
            горизонтального забора из профнастила.
          </li>
          <li class="md:text-lg mt-2">
            <span class="text-gray-205 font-medium">Установка дополнительных элементов.</span> Монтируются ворота, калитки, декоративные планки или колпаки на
            столбы. Проверяется надежность всех креплений и при необходимости корректируется выравнивание.
          </li>
          <li class="md:text-lg mt-2">
            <span class="text-gray-205 font-medium">Финальная проверка и сдача объекта.</span> Проводится осмотр забора на предмет дефектов, проверяется
            устойчивость конструкции. Убирается строительный мусор, и забор передается заказчику с гарантией качества.
          </li>
        </ol>
        <div class="md:mt-14 mt-8">
          <shared-button
            class="sm:w-auto w-full py-4 px-8 rounded-4xl font-medium text-white flex items-center justify-center gap-2 button_shadow group"
            variant="green"
            @click="callbackModalStore.open"
          >
            Заказать консультацию <icon name="name:arrow" class="w-5! h-5! group-hover:translate-x-1 transition duration-300" />
          </shared-button>
        </div>
      </div>
      <div v-else-if="activeTab === 'сроки'" key="сроки" class="pt-18 min-h-[500px]">
        <h2 class="text-[2rem] md:text-[3.125rem] font-medium text-green-505">Сроки</h2>

        <p class="md:text-lg text-gray-205 md:mt-6 mt-3">
          Сроки выполнения работ по установке забора из профнастила под ключ в Самаре, Тольятти и Самарской области зависят от нескольких факторов. Мы стремимся
          завершить проект максимально быстро, сохраняя высокое качество, поэтому гарантируем оперативность и четкое соблюдение договоренностей. Временные
          рамки, на которые вы можете ориентироваться:
        </p>
        <ol class="list-decimal list-inside">
          <li class="md:text-lg mt-2">
            <span class="text-gray-205 font-medium">Согласование и замер (1–2 дня).</span> После вашего обращения мы организуем выезд специалиста для замера
            участка и обсуждения деталей проекта (высота забора, длина, тип профнастила, цвет, дополнительные элементы вроде ворот или калитки). Обычно это
            занимает 1 день. В случае сложных участков или необходимости согласования соседями процесс может занять до 2 дней.
          </li>
          <li class="md:text-lg mt-2">
            <span class="text-gray-205 font-medium">Подготовка материалов (1–7 дней)</span> Подготовка материалов (1–7 дней). После утверждения сметы и дизайна
            мы заказываем или изготавливаем материалы: листы профнастила, металлические столбы, лаги, крепежи и антикоррозийные покрытия. Если материалы есть в
            наличии, подготовка занимает 1 день. При заказе нестандартных цветов или размеров может потребоваться больше времени.
          </li>
          <li class="md:text-lg mt-2">
            <span class="text-gray-205 font-medium">Доставка на участок (1 день).</span> Благодаря собственному автопарку мы обеспечиваем быструю доставку
            материалов. Для участков в Самаре и Тольятти доставка выполняется в течение 1 дня.
          </li>
          <li class="md:text-lg mt-2">
            <span class="text-gray-205 font-medium">Монтаж забора (1–3 дня).</span> Монтаж забора из профлиста – ключевой этап, который в большинстве случаев
            завершается за 1 день для стандартных участков (до 50 погонных метров). Для больших участков (100+ метров) или сложных условий (неровный грунт,
            необходимость демонтажа старого забора) монтаж может занять больше времени.
          </li>
        </ol>

        <div class="md:mt-14 mt-8">
          <shared-button
            class="sm:w-auto w-full py-4 px-8 rounded-4xl font-medium text-white flex items-center justify-center gap-2 button_shadow group"
            variant="green"
            @click="callbackModalStore.open"
          >
            Заказать консультацию <icon name="name:arrow" class="w-5! h-5! group-hover:translate-x-1 transition duration-300" />
          </shared-button>
        </div>
      </div>
      <div v-else-if="activeTab === 'доставка'" key="доставка" class="pt-18 min-h-[500px]">
        <h2 class="text-[2rem] md:text-[3.125rem] font-medium text-green-505">Доставка</h2>

        <p class="md:text-lg text-gray-205 md:mt-6 mt-3">
          Компания «Забор163» обеспечивает быструю и надежную доставку всех необходимых материалов для изготовления и установки заборов из профлиста в Самаре,
          Тольятти и по всей Самарской области. Мы берем на себя все логистические процессы, чтобы вы могли сосредоточиться на выборе дизайна и планировании
          вашего забора из профнастила под ключ.
        </p>
        <p class="md:text-lg text-gray-205 mt-6">
          Мы располагаем современным автопарком, включающим грузовые автомобили, что позволяет оперативно доставлять материалы. Стоимость доставки
          рассчитывается индивидуально и зависит от расстояния до вашего участка, объёма заказа и срочности доставки. Все работы по погрузке и разгрузке
          материалов выполняют наши сотрудники. Это гарантирует сохранность профнастила и столбов для забора из профлиста во время транспортировки. Наши рабочие
          аккуратно размещают материалы на участке, чтобы облегчить последующий монтаж.
        </p>

        <div class="md:mt-14 mt-8">
          <shared-button
            class="sm:w-auto w-full py-4 px-8 rounded-4xl font-medium text-white flex items-center justify-center gap-2 button_shadow group"
            variant="green"
            @click="callbackModalStore.open"
          >
            Заказать консультацию <icon name="name:arrow" class="w-5! h-5! group-hover:translate-x-1 transition duration-300" />
          </shared-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const callbackModalStore = useCallbackModalStore();

const activeTab = ref('монтаж');

const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};
</script>
