<template>
  <footer class="bg-green-505 pt-20 text-white hidden md:block">
    <div class="container">
      <div class="mb-20 flex justify-between gap-4">
        <div class="max-w-121.5">
          <div class="flex items-center gap-2 uppercase font-bold text-2xl">
            <span>забор</span>
            <span class="text-green-505 bg-white rounded-sm p-1">163</span>
          </div>
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
              >
                <icon name="name:telegram-border" class="w-6! h-6!" />
              </a>
            </li>
          </ul>
        </div>
        <div>
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
        <div>
          <h3 class="font-medium text-lg">Каталог</h3>
        </div>
        <div>
          <div class="flex items-center gap-6">
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
          <div class="flex items-center gap-6 mt-6">
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
              <span class="block mt-3 text-lg font-medium">09:00 - 18:00 СБ, ВС - выходные</span>
            </div>
          </div>
          <div class="flex items-center gap-6 mt-6">
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
        <div class="text-center pt-8 pb-10 text-sm leading-snug">Copyright © «Забор163», 2025 гг. Все права защищены.</div>
      </div>
    </div>
  </footer>
</template>
