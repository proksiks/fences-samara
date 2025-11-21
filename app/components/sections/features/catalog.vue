<template>
  <div class="flex items-center lg:flex-row flex-col-reverse gap-6 lg:gap-20">
    <div class="md:px-0 px-6">
      <slot />
      <div class="flex items-center sm:flex-row flex-col sm:gap-8 gap-4 mt-6">
        <shared-button
          class="md:w-auto w-full py-4 px-8 rounded-4xl font-medium text-white flex items-center justify-center gap-2 button_shadow group"
          variant="green"
          @click="callbackModalStore.open"
        >
          Поможем выбрать <icon name="name:arrow" class="w-5! h-5! group-hover:translate-x-1 transition duration-300" />
        </shared-button>
        <shared-button
          class="md:w-auto w-full py-4 md:px-8 px-2 rounded-4xl font-bold inline-flex items-center justify-center gap-2 text-green-505 md:text-default text-sm group"
          variant="border"
          tag="a"
          href="tel:+79203447027"
        >
          Звонок <icon name="name:arrow" class="w-5! h-5! fill-green-505! group-hover:translate-x-1 transition duration-300" />
        </shared-button>
      </div>
    </div>
    <div class="xl:shrink-0">
      <div class="relative">
        <span class="absolute w-full h-full -left-10 -bottom-10 bg-gray-155 rounded-[1.25rem] lg:block hidden"></span>
        <nuxt-picture
          class="catalog-feature-image relative"
          :src="image"
          width="594"
          height="573"
          alt="Чёрный забор"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const callbackModalStore = useCallbackModalStore();

defineProps<{ image: string }>();
</script>

<style>
@media (max-width: 1023px) {
  .catalog-feature-image img {
    border-radius: 1.25rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 22.5rem;
  }
}
</style>
