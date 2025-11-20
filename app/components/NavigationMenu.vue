<template>
  <header
    class="sticky z-50 top-0 border-b"
    :class="{ 'border-green-105 bg-white': !transparent, 'bg-transparent border-white text-white header-effect': transparent }"
  >
    <nav class="container flex items-center">
      <template v-if="$route.path === '/'">
        <span class="flex items-center gap-2 uppercase font-bold text-2xl py-6 lg:py-0">
          <span class="logo-text transition-colors duration-300">забор</span>
          <span class="text-white bg-green-105 rounded-sm p-1">163</span>
        </span>
      </template>
      <template v-else>
        <nuxt-link to="/" class="flex items-center gap-2 uppercase font-bold text-2xl py-6 lg:py-0">
          <span class="logo-text transition-colors duration-300">забор</span>
          <span class="text-white bg-green-105 rounded-sm p-1">163</span>
        </nuxt-link>
      </template>
      <ul class="hidden lg:flex items-center gap-8 ml-4 xl:ml-32">
        <li>
          <nuxt-link
            :class="{ transparent: transparent }"
            class="block py-8 border-b-2 border-transparent transition-colors"
            active-class="border-green-105!"
            to="/"
            @click="closeMenu"
            >Главная</nuxt-link
          >
        </li>
        <li class="group">
          <button class="flex items-center gap-3 w-full justify-between cursor-pointer py-8">
            Каталог
            <icon name="name:arrow-up" class="w-6! h-6! bg-green-105! transition duration-300 group-hover:rotate-180" />
          </button>

          <div
            class="absolute pt-0.5 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 opacity-0 transition-opacity max-w-65 w-full pointer-events-none"
          >
            <div class="bg-white text-black p-4 sub-menu_shadow rounded-lg">
              <button class="flex items-center gap-3 w-full justify-between font-medium" @click="showDesctopFences = !showDesctopFences">
                Заборы
                <icon name="name:arrow-up" class="w-6! h-6! bg-green-105! transition duration-300" :class="{ 'rotate-180': showDesctopFences }" />
              </button>
              <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
              >
                <div v-show="showDesctopFences" class="overflow-hidden">
                  <ul class="opacity-0 transition-opacity duration-200 px-2 mt-3 border-t border-black/5" :class="{ 'opacity-100': showDesctopFences }">
                    <li><nuxt-link class="py-2 block hover:font-medium" to="/catalog/profiled-flooring">Забор из профнастила</nuxt-link></li>
                    <li><nuxt-link class="py-2 block hover:font-medium" to="/">Забор на ленточном фундаменте</nuxt-link></li>
                    <li><nuxt-link class="py-2 block hover:font-medium" to="/">Забор из сетки рабицы</nuxt-link></li>
                    <li><nuxt-link class="py-2 block hover:font-medium" to="/">Газонные ограждения</nuxt-link></li>
                    <li><nuxt-link class="py-2 block hover:font-medium" to="/">Забор из 3D сетки</nuxt-link></li>
                    <li><nuxt-link class="py-2 block hover:font-medium" to="/">Забор из штакетника</nuxt-link></li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
        </li>
        <li>
          <a class="block py-8 border-b-2 border-transparent transition-colors" active-class="border-green-105!" href="#callbackForm" @click="closeMenu">
            Контакты
          </a>
        </li>
        <li :class="{ hidden: transparent }">
          <nuxt-link class="block py-8 border-b-2 border-transparent transition-colors" active-class="border-green-105!" to="/projects" @click="closeMenu">
            Наши проекты
          </nuxt-link>
        </li>
      </ul>

      <span class="items-center gap-6 ml-auto hidden lg:flex">
        <div>
          <a
            href="tel:+79203447027"
            :class="{
              'bg-gray-105 hover:bg-gray-100 active:bg-gray-200': !transparent,
              'bg-transparent border-2 hover:bg-white/15 active:bg-white/25': transparent,
            }"
            class="flex items-center whitespace-nowrap gap-2 px-5 py-3 rounded-4xl transition"
          >
            <icon name="name:phone" class="w-4! h-4! fill-black!" /> <span> +7 (920) 344 70 27</span>
          </a>
        </div>
        <shared-button
          class="w-full px-5 py-3 rounded-4xl font-medium text-white flex items-center justify-center gap-2"
          variant="green"
          @click="callbackModalStore.open()"
        >
          Заказать
        </shared-button>
      </span>

      <span class="flex items-center gap-6 ml-auto lg:hidden">
        <a class="phone-call w-8 h-8 bg-green-105 flex items-center justify-center rounded-full" href="tel:+79203447027">
          <icon name="name:phone" class="w-4! h-4! bg-white!" />
        </a>

        <button class="burger ml-auto" :class="{ _active: showMenu }" @click="toggleMenu">
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
        </button>
      </span>
    </nav>
  </header>
  <div class="mobile-menu fixed top-0 left-0 bottom-0 z-9 w-full bg-white flex flex-col py-10 px-6 overflow-auto lg:hidden" :class="{ _active: showMenu }">
    <div class="pt-20 flex-1 flex flex-col">
      <ul class="text-right">
        <li>
          <nuxt-link
            class="inline-block border-b-2 border-transparent transition-colors text-[1.5rem]"
            active-class="border-green-105! font-medium"
            to="/"
            @click="closeMenu"
          >
            Главная
          </nuxt-link>
        </li>
        <li class="mt-6">
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
                            <nuxt-link class="hover:underline text-lg" to="/catalog/profiled-flooring" @click="closeMenu">Забор из профнастила</nuxt-link>
                          </li>
                          <li class="mt-5">
                            <nuxt-link class="hover:underline text-lg" to="/" @click="closeMenu">Забор на ленточном фундаменте</nuxt-link>
                          </li>
                          <li class="mt-5">
                            <nuxt-link class="hover:underline text-lg" to="/" @click="closeMenu">Забор из сетки рабицы</nuxt-link>
                          </li>
                          <li class="mt-5">
                            <nuxt-link class="hover:underline text-lg" to="/" @click="closeMenu">Газонные ограждения</nuxt-link>
                          </li>
                          <li class="mt-5">
                            <nuxt-link class="hover:underline text-lg" to="/" @click="closeMenu">Забор из 3D сетки</nuxt-link>
                          </li>
                          <li class="mt-5">
                            <nuxt-link class="hover:underline text-lg" to="/" @click="closeMenu">Забор из штакетника</nuxt-link>
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
          <nuxt-link
            class="inline-block border-b-2 border-white transition-colors text-[1.5rem]"
            active-class="border-green-105! font-medium"
            to="/contacts"
            @click="closeMenu"
          >
            Контакты
          </nuxt-link>
        </li>
        <li class="mt-6">
          <nuxt-link
            class="inline-block border-b-2 border-white transition-colors text-[1.5rem]"
            active-class="border-green-105! font-medium"
            to="/projects"
            @click="closeMenu"
          >
            Наши проекты
          </nuxt-link>
        </li>
      </ul>

      <div class="mt-auto">
        <div class="flex justify-center items-center my-4 gap-2">
          <div>
            <nuxt-picture class="md:max-w-none max-w-20 block" src="/images/pages/main/prize.png" width="91" height="91" alt="prize" loading="lazy" />
          </div>
          <div>
            <h2 class="text-green-505 font-bold text-lg">Выезд и замер бесплатно</h2>
            <p class="text-gray-150 underline font-light">При оформлении заказа!*</p>
          </div>
        </div>

        <div>
          <a
            href="tel:+79203447027"
            :class="{
              'bg-gray-105 hover:bg-gray-100 active:bg-gray-200': !transparent,
              'bg-transparent border-2 hover:bg-white/15 active:bg-white/25': transparent,
            }"
            class="flex items-center justify-center whitespace-nowrap gap-2 px-5 py-3 rounded-4xl transition"
          >
            <icon name="name:phone" class="w-4! h-4! fill-black!" /> <span> +7 (920) 344 70 27</span>
          </a>
        </div>

        <div class="mt-4">
          <shared-button
            class="w-full p-4 rounded-4xl font-medium text-white flex items-center justify-center gap-2 button_shadow group"
            variant="green"
            @click="callbackModalStore.open()"
          >
            Заказать забор <icon name="name:arrow" class="w-5! h-5! group-hover:translate-x-1 transition duration-30" />
          </shared-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  transparent?: boolean;
}

defineProps<Props>();

const callbackModalStore = useCallbackModalStore();

const showMenu = ref(false);

const showCatalog = ref(false);
const showDesctopFences = ref(true);
const showFences = ref(false);

const route = useRoute();

watch(
  () => route.path,
  () => {
    showMenu.value = false;
    disableScroll();
  },
);

const { beforeEnter, enter, afterEnter, beforeLeave, leave, afterLeave } = useHeightAnimation();

const closeMenu = () => {
  showMenu.value = false;
  disableScroll();
};

const toggleMenu = () => {
  showMenu.value = !showMenu.value;

  disableScroll();
};

function disableScroll() {
  if (showMenu.value) {
    document.body.setAttribute('data-position', '');
    const pagePosition = window.scrollY;
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = String(pagePosition);
    document.body.style.top = -pagePosition + 'px';
  } else {
    const pagePosition = parseInt(String(document.body.dataset.position), 10);
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({ top: pagePosition, left: 0, behavior: 'instant' });
    document.body.removeAttribute('data-position');
  }
}
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

.sub-menu_shadow {
  box-shadow:
    0px 0px 0px 0px #0000000d,
    0px 2.71px 6.78px 0px #0000000d,
    1.36px 13.56px 13.56px 0px #0000000a,
    2.71px 29.83px 17.63px 0px #00000008,
    5.42px 54.24px 21.7px 0px #00000003,
    8.14px 84.08px 23.05px 0px #00000000;
}

.header-effect {
  backdrop-filter: blur(1rem);
}

.header-effect .burger .burger-line {
  background-color: white;
}
.header-effect .burger._active .burger-line {
  background-color: black;
}
.header-effect:has(.burger._active) .logo-text {
  color: black;
}
</style>
