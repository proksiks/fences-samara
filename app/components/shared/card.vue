<template>
  <div class="catalog-card">
    <div class="relative">
      <div class="2xl:w-107.5 2xl:h-85">
        <nuxt-picture class="block w-full overflow-hidden rounded-xl" :src="image" :alt="shield" loading="lazy" />
      </div>
      <div class="absolute py-1 px-4 bg-green-105 text-white top-6 right-0 rounded-l-4xl">{{ shield }}</div>
    </div>

    <div class="-mt-20 relative pl-7">
      <div class="bg-white p-6 rounded-[1.25rem] catalog-card_shadow">
        <div class="flex justify-between">
          <div class="text-green-505 font-bold text-[1.375rem] pr-6">{{ title }}</div>
          <div>
            <shared-button class="p-4.5 rounded-[1.25rem]" aria-label="Оставить заявку" @click="openModal">
              <icon name="name:basket" class="w-6! h-6! block!" />
            </shared-button>
          </div>
        </div>
        <div class="flex items-center mt-3">
          <div class="text-[1.25rem] font-medium" v-html="price"></div>
          <div class="flex gap-3 text-[0.5rem] mx-auto">
            <div v-for="tag in tags" :key="tag" class="px-4 py-1 text-green-105 border border-green-105 rounded-4xl font-medium">{{ tag }}</div>
          </div>
        </div>
        <div class="mt-3">
          <p class="text-gray-205 text-xs">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  image: string;
  shield: string;
  title: string;
  price: string;
  tags: string[];
  description: string;
}

const props = defineProps<Props>();
const callbackModalStore = useCallbackModalStore();

const openModal = () => {
  callbackModalStore.data.title = props.title;
  callbackModalStore.data.tags = props.tags;
  callbackModalStore.data.text = props.description;
  callbackModalStore.data.image = props.image;
  callbackModalStore.data.priceText = props.price;
  callbackModalStore.open(false);
};
</script>

<style>
.catalog-card picture img {
  width: 100%;
  display: block;
}
.catalog-card_shadow {
  box-shadow: 0px 0px 18.8px 0px #0000000d;
}
</style>
