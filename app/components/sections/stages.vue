<template>
  <div class="py-10 px-4 2xl:px-15">
    <div class="bg-gray-155 rounded-[1.25rem] xl:py-20 py-6 relative overflow-hidden">
      <nuxt-picture
        class="absolute top-0 left-0 w-full h-full"
        :src="backgroundImage"
        width="1800"
        height="788"
        alt="Декоративные линии"
        loading="lazy"
      />
      <div class="container relative">
        <div class="flex md:items-end md:justify-between md:flex-row flex-col gap-4">
          <div class="max-w-150">
            <div>
              <div class="flex items-center gap-2.5">
                <div>
                  <nuxt-picture class="md:max-w-none max-w-10" :src="icon" alt="Иконка" width="24" height="24" loading="lazy" />
                </div>
                <div class="uppercase font-bold text-green-505">{{ title }}</div>
              </div>
            </div>
            <slot name="title" />
          </div>
          <div>
            <p class="max-w-100 text-gray-205">
              {{ description }}
            </p>
          </div>
        </div>
        <div class="grid md:grid-cols-2 xl:grid-cols-3 mt-6 md:mt-14 gap-6 2xl:gap-x-15 2xl:gap-y-10">
          <div 
            v-for="(stage, index) in stages" 
            :key="index" 
            class="bg-white rounded-[1.25rem] p-2.5 flex items-center gap-4"
          >
            <div class="bg-green-105 rounded-[0.625rem] flex items-center justify-center md:py-13 py-8.5 md:px-12 px-7.5 relative xl:shrink-0">
              <span class="leading-none absolute md:top-3 md:left-3 top-2 left-2 text-transparent md:text-[1.875rem] text-[1.25rem] font-bold number-stroke"
                >{{ String(index + 1).padStart(2, '0') }}</span
              >
              <nuxt-picture class="md:max-w-none max-w-10" :src="stage.icon" alt="Иконка" width="64" height="64" loading="lazy" />
            </div>
            <div>
              <h3 class="md:text-[1.375rem] leading-snug font-medium text-green-505">
                {{ stage.title }}
              </h3>
              <p class="text-gray-205 leading-snug mt-3 md:text-default text-sm">
                {{ stage.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Stage {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  title?: string;
  icon?: string;
  description?: string;
  backgroundImage?: string;
  stages: Stage[];
}

// Используем пропсы напрямую через defineProps
withDefaults(defineProps<Props>(), {
  title: 'Этапы работы',
  icon: '/images/icons/fence-green.svg',
  description: 'При заказе забора в нашей компании вы получите специальный подарок на ваш выбор: от декоративных элементов до бесплатной консультации с ландшафтным дизайнером.',
  backgroundImage: '/images/sections/stages/stages-bg.svg'
});
</script>

<style>
.number-stroke {
  -webkit-text-stroke: 1px #fff;
}
</style>
