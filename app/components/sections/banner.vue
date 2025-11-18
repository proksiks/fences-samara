<template>
  <div class="relative">
    <nuxt-picture
      class="flowers-img pointer-events-none absolute inset-0 md:block hidden"
      src="/images/sections/banner/flowers.jpg"
      alt="Цветы"
      width="1905"
      height="257"
      loading="lazy"
    />
    <nuxt-picture
      class="flowers-img_m pointer-events-none absolute inset-0 md:hidden"
      src="/images/sections/banner/flowers_m.jpg"
      alt="Цветы"
      width="390"
      height="384"
      loading="lazy"
    />
    <div class="container relative">
      <div class="md:flex gap-12 items-center justify-center px-4 py-16 md:py-20 md:text-left text-center">
        <h2 class="text-3xl md:text-[2.5rem] uppercase text-white max-w-205 font-bold leading-small">сделай предзаказ забора вне сезон по скидке, получи весной</h2>
        <div class="md:mt-0 mt-8">
          <shared-button
            class="md:w-auto w-full mt-auto py-4 md:px-8 px-2 rounded-4xl font-bold inline-flex items-center justify-center gap-2 text-green-505 md:text-default text-sm group"
            variant="border"
          >
            Перейти к предложению <icon name="name:arrow" class="w-5! h-5! fill-green-505 group-hover:translate-x-1 transition duration-300" />
          </shared-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.flowers-img img {
  height: 100%;
  object-fit: cover;
  object-position: right;
}
.flowers-img_m img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
