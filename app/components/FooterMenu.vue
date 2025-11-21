<template>
  <div>
    <div class="bg-gray-155 py-16 md:py-20">
      <div class="container-small">
        <div class="text-center">
          <h3 class="text-2xl md:text-[2rem] font-bold leading-small text-green-505">ОЦЕНИВАЙТЕ СВОИ ФИНАНСОВЫЕ ВОЗМОЖНОСТИ И РИСКИ</h3>
          <p class="mt-6 text-gray-150">
            * Рассрочка — это форма кредита (займа) с оплатой товаров или услуг несколькими частями, при котором проценты по кредиту (займу) частично или
            полностью компенсируется продавцом. Пос-кредит (займ) — это форма кредита (займа), предоставленная непосредственно в точке продаж или на сайте
            интернет-магазина. АО "ТБанк": полная стоимость потребительского кредита (займа) — от 0% до 60% годовых, процентная ставка от 0% до 100%
            годовых,Минимальная сумма - 300 р., максимальная сумма — 500 000 рублей. Срок предоставления — от 3 до 36 месяцев. Условия обслуживания будут
            определены по результатам рассмотрения заявки.
            <a class="underline" href="https://acdn.tinkoff.ru/static/documents/b5802475-a663-4ac2-90b3-aeb7781df0a9.pdf" target="_blank">Подробные условия</a>.
          </p>
        </div>
      </div>
    </div>
    <footer class="md:pt-20 pt-16 text-white relative z-10" :class="{ 'with-effect border-t border-white/50': transparent, 'bg-green-505': !transparent }">
      <div class="container">
        <div class="mb-12 md:mb-20 flex justify-between md:flex-row flex-col gap-4 xl:flex-nowrap flex-wrap">
          <div class="max-w-121.5 md:order-0 order-1">
            <template v-if="$route.path === '/'">
              <div class="flex items-center gap-2 uppercase font-bold text-2xl">
                <span>забор</span>
                <span class="text-green-505 bg-white rounded-sm p-1">163</span>
              </div>
            </template>
            <template v-else>
              <nuxt-link to="/" class="flex items-center gap-2 uppercase font-bold text-2xl">
                <span>забор</span>
                <span class="text-green-505 bg-white rounded-sm p-1">163</span>
              </nuxt-link>
            </template>

            <div class="leading-snug mt-6">
              Изготовление и установка заборов под ключ <br />
              в Самаре и&nbsp;Самарской области.
            </div>
            <ul class="mt-6">
              <li>
                <a
                  class="size-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition"
                  href="https://t.me/zaborsmr163"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Телеграм"
                >
                  <icon name="name:telegram-border" class="w-6! h-6!" />
                </a>
              </li>
            </ul>
          </div>
          <div :class="{ hidden: transparent }">
            <h3 class="font-medium text-lg">Меню</h3>
            <ul class="mt-3">
              <li>
                <nuxt-link class="hover:underline" to="/">Главная</nuxt-link>
              </li>
              <li class="mt-2">
                <nuxt-link class="hover:underline" to="/">Контакты</nuxt-link>
              </li>
              <li class="mt-2">
                <nuxt-link class="hover:underline" to="/">Наши проекты</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="md:max-w-52.25 w-full md:mt-0 mt-8">
            <h3 class="font-medium text-lg">Каталог</h3>

            <ul>
              <li class="mt-3">
                <button class="text-medium flex items-center gap-2 cursor-pointer" @click="fencesOpen = !fencesOpen">
                  Заборы <icon name="name:arrow-up" class="w-5! h-5! bg-green-105! transition duration-300" :class="{ 'rotate-180': fencesOpen }" />
                </button>

                <transition
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
                  @before-leave="beforeLeave"
                  @leave="leave"
                  @after-leave="afterLeave"
                >
                  <div v-show="fencesOpen" class="overflow-hidden">
                    <ul class="opacity-0 transition-opacity duration-200" :class="{ 'opacity-100': fencesOpen }">
                      <li class="mt-5">
                        <nuxt-link class="hover:underline" to="/catalog/profiled-flooring">Забор из профнастила</nuxt-link>
                      </li>
                      <li class="mt-5">
                        <nuxt-link class="hover:underline" to="/catalog/ribbon">Забор на ленточном фундаменте</nuxt-link>
                      </li>
                      <li class="mt-5">
                        <nuxt-link class="hover:underline" to="/catalog/chain-link">Забор из сетки рабицы</nuxt-link>
                      </li>
                      <li class="mt-5">
                        <nuxt-link class="hover:underline" to="/catalog/lawn-fences">Газонные ограждения</nuxt-link>
                      </li>
                      <li class="mt-5">
                        <nuxt-link class="hover:underline" to="/catalog/3d-mesh-fence">Забор из 3D сетки</nuxt-link>
                      </li>
                      <li class="mt-5">
                        <nuxt-link class="hover:underline" to="/catalog/picket-fence">Забор из штакетника</nuxt-link>
                      </li>
                    </ul>
                  </div>
                </transition>
              </li>
            </ul>
          </div>
          <div>
            <div class="flex items-center gap-6 md:mt-0 mt-8">
              <div class="md:block hidden">
                <icon name="name:phone" class="w-6! h-6! bg-green-105! block!" />
              </div>
              <div>
                <div class="md:block flex items-center gap-3">
                  <div class="md:hidden">
                    <icon name="name:phone" class="w-6! h-6! bg-green-105! block!" />
                  </div>
                  Служба консультации:
                </div>
                <a class="block mt-3 text-lg font-medium hover:underline" href="tel:+79203447027">+7 (920) 344 70 27</a>
              </div>
            </div>
            <div class="flex items-center gap-6 md:mt-6 mt-8">
              <div class="md:block hidden">
                <icon name="name:calendar" class="w-6! h-6! bg-green-105! block!" />
              </div>
              <div>
                <div class="md:block flex items-center gap-3">
                  <div class="md:hidden">
                    <icon name="name:calendar" class="w-6! h-6! bg-green-105! block!" />
                  </div>
                  График работы:
                </div>
                <span class="block mt-3 text-lg font-medium">Ежедневно с 8:00 - 20:00</span>
              </div>
            </div>
            <div class="flex items-center gap-6 md:mt-6 mt-8">
              <div class="md:block hidden">
                <icon name="name:location" class="w-6! h-6! bg-green-105! block!" />
              </div>
              <div>
                <div class="md:block flex items-center gap-3">
                  <div class="md:hidden">
                    <icon name="name:location" class="w-6! h-6! bg-green-105! block!" />
                  </div>
                  Локация:
                </div>
                <a class="block mt-3 text-lg font-medium hover:underline" href="https://yandex.ru/maps/-/CLGpz2oH" target="_blank">
                  Самара, 443066, улица 22-го Партсъезда, 44
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t border-white/20">
          <div class="text-center pt-8 pb-10 text-sm leading-snug">Copyright © «Забор163», {{ getYear }} г. Все права защищены.</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const fencesOpen = ref(false);
const { beforeEnter, enter, afterEnter, beforeLeave, leave, afterLeave } = useHeightAnimation();

interface Props {
  transparent?: boolean;
}
defineProps<Props>();

const getYear = computed(() => new Date().getFullYear());
</script>

<style>
.with-effect {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(1.5rem);
}
</style>
