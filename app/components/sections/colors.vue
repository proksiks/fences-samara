<template>
  <div class="md:py-20 py-16">
    <div class="container">
      <div class="flex md:items-end justify-between md:flex-row flex-col gap-8">
        <div>
          <div class="flex items-center gap-2.5">
            <div>
              <nuxt-picture src="/images/icons/fence-green.svg" alt="Иконка" width="24" height="24" loading="lazy" />
            </div>
            <div class="uppercase font-bold text-green-505">цветовая палитра</div>
          </div>

          <h2 class="text-[2rem] lg:text-5xl font-medium mt-4 leading-small text-green-505">Варианты расцветок</h2>
        </div>

        <div>
          <shared-button
            class="inline-flex md:w-auto w-full mt-auto py-4 md:px-8 px-2 rounded-4xl font-medium items-center justify-center gap-2 md:text-default text-sm group"
            @click="callbackModalStore.open"
          >
            Заказать консультацию <icon name="name:arrow" class="w-5! h-5! group-hover:translate-x-1 transition duration-300" />
          </shared-button>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-4 mt-8 md:mt-14">
        <div v-for="item in colors" :key="item.image">
          <shared-card-color :image="item.image" :title="item.title" :shade="item.shade" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  colors: {
    image: string;
    title: string;
    shade: string;
  }[];
}
defineProps<Props>();

const callbackModalStore = useCallbackModalStore();
</script>
