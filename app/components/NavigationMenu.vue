<template>
  <header class="sticky z-10 top-0 border-b border-green-105 bg-white">
    <nav class="container flex items-center">
      <span class="flex items-center gap-2 uppercase font-bold text-2xl py-6 lg:py-0">
        <span>забор</span>
        <span class="text-white bg-green-105 rounded-sm p-1">163</span>
      </span>
      <ul class="hidden lg:flex items-center gap-8 ml-4 xl:ml-32">
        <li>
          <nuxt-link class="block py-8 border-b-2 border-white transition-colors" active-class="border-green-105!" to="/">Главная</nuxt-link>
        </li>
        <li>
          <nuxt-link class="block py-8 border-b-2 border-white transition-colors" active-class="border-green-105!" to="/catalog">Каталог</nuxt-link>
        </li>
        <li>
          <nuxt-link class="block py-8 border-b-2 border-white transition-colors" active-class="border-green-105!" to="/contacts">Контакты</nuxt-link>
        </li>
        <li>
          <nuxt-link class="block py-8 border-b-2 border-white transition-colors" active-class="border-green-105!" to="/projects">Наши проекты</nuxt-link>
        </li>
      </ul>

      <span class="items-center gap-6 ml-auto hidden lg:flex">
        <div>
          <a
            href="tel:+79203447027"
            class="bg-gray-105 flex items-center whitespace-nowrap gap-2 px-5 py-3 rounded-4xl hover:bg-gray-100 active:bg-gray-200 transition"
          >
            <icon name="name:phone" class="w-4! h-4! fill-black!" /> <span> +7 (920) 344 70 27</span>
          </a>
        </div>
        <shared-button class="w-full px-5 py-3 rounded-4xl font-medium text-white flex items-center justify-center gap-2" variant="green">
          Заказать
        </shared-button>
      </span>

      <span class="flex items-center gap-6 ml-auto lg:hidden">
        <a class="phone-call w-8 h-8 bg-green-105 flex items-center justify-center rounded-full" href="tel:+79203447027">
          <icon name="name:phone" class="w-4! h-4! bg-white!" />
        </a>

        <button class="burger ml-auto" :class="{ _active: showMenu }" @click="showMenu = !showMenu">
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
        </button>
      </span>
    </nav>
  </header>
  <div class="mobile-menu fixed top-0 left-0 bottom-0 z-9 w-full bg-white flex flex-col py-10 px-6 overflow-auto" :class="{ _active: showMenu }">
    <div class="pt-20">
      <ul class="text-right">
        <li>
          <nuxt-link class="inline-block border-b-2 border-white transition-colors text-[1.5rem]" active-class="border-green-105! font-medium" to="/">
            Главная
          </nuxt-link>
        </li>
        <li class="mt-6">
          <!-- <nuxt-link class="inline-block border-b-2 border-white transition-colors" active-class="border-green-105! font-medium" to="/catalog">Каталог</nuxt-link> -->
          <button class="flex items-center justify-between text-[1.5rem] gap-3 w-full" @click="showCatalog = !showCatalog">
            <icon name="name:arrow-up" class="w-8! h-8! bg-green-105! transition duration-300" :class="{ 'rotate-180': showCatalog }" />
            Каталог
          </button>

          <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
            <div v-show="showCatalog" class="overflow-hidden">
              <div class="opacity-0 transition-opacity duration-200" :class="{ 'opacity-100': showCatalog }">
                <div class="border-t border-b border-black/5 pt-6 pb-6 mt-6">
                  <button class="flex items-center text-[1.25rem] gap-3 w-full justify-between" @click="showFences = !showFences">
                    <icon name="name:arrow-up" class="w-8! h-8! bg-green-105! transition duration-300" :class="{ 'rotate-180': showFences }" />
                    Заборы
                  </button>

                  <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                  >
                    <div v-show="showFences" class="overflow-hidden">
                      <div class="opacity-0 transition-opacity duration-200" :class="{ 'opacity-100': showFences }">
                        <ul>
                          <li class="mt-5">
                            <nuxt-link class="hover:underline text-lg" to="/">Забор из профнастила</nuxt-link>
                          </li>
                          <li class="mt-5">
                            <nuxt-link class="hover:underline text-lg" to="/">Забор на ленточном фундаменте</nuxt-link>
                          </li>
                          <li class="mt-5">
                            <nuxt-link class="hover:underline text-lg" to="/">Забор из сетки рабицы</nuxt-link>
                          </li>
                          <li class="mt-5">
                            <nuxt-link class="hover:underline text-lg" to="/">Газонные ограждения</nuxt-link>
                          </li>
                          <li class="mt-5">
                            <nuxt-link class="hover:underline text-lg" to="/">Забор из 3D сетки</nuxt-link>
                          </li>
                          <li class="mt-5">
                            <nuxt-link class="hover:underline text-lg" to="/">Забор из штакетника</nuxt-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </transition>
        </li>
        <li class="mt-6">
          <nuxt-link class="inline-block border-b-2 border-white transition-colors text-[1.5rem]" active-class="border-green-105! font-medium" to="/contacts">
            Контакты
          </nuxt-link>
        </li>
        <li class="mt-6">
          <nuxt-link class="inline-block border-b-2 border-white transition-colors text-[1.5rem]" active-class="border-green-105! font-medium" to="/projects">
            Наши проекты
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const showMenu = ref(true);

const showCatalog = ref(false);
const showFences = ref(false);

const { beforeEnter, enter, afterEnter, beforeLeave, leave, afterLeave } = useHeightAnimation();
</script>

<style>
.phone-call {
  box-shadow: 6px 6.67px 19.67px 0px #0000001a;
}
.burger {
  width: 32px;
  height: 32px;
  position: relative;
}

.burger-line {
  position: absolute;
  left: 0.25rem;
  width: 1.5rem;
  height: 0.1875rem;
  border-radius: 2.5rem;
  background-color: #2c2c2c;
  transition: all 0.3s ease 0s;
}
.burger-line:nth-child(1) {
  top: 0.25rem;
}
.burger-line:nth-child(2) {
  top: 0.875rem;
}
.burger-line:nth-child(3) {
  top: 1.5rem;
}

.burger._active .burger-line:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}
.burger._active .burger-line:nth-child(2) {
  opacity: 0;
  transform: translateY(-50%) rotate(45deg) scale(0);
}
.burger._active .burger-line:nth-child(3) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.mobile-menu {
  transform: translateX(100%);
  transition: all 0.3s ease 0s;
}
.mobile-menu._active {
  transform: translateX(0);
}
</style>
