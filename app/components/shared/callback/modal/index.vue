<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';
const callbackModalStore = useCallbackModalStore();
const { data } = storeToRefs(callbackModalStore);
</script>

<template>
  <VueFinalModal
    v-model="callbackModalStore.show"
    class="flex px-4"
    swipe-to-close="down"
    overlay-transition="vfm-fade"
    content-transition="vfm-slide-down"
    content-class="flex-1 py-4 md:max-w-157.5 m-auto h-screen overflow-y-auto"
  >
    <div class="">
      <div class="rounded-3xl bg-white sm:w-auto w-full flex sm:flex-row flex-col">
        <div class="flex-1 flex items-center justify-center lg:justify-end sm:w-auto w-full">
          <nuxt-picture
            class="modal-image rounded-t-3xl sm:rounded-3xl overflow-hidden w-full"
            :src="data.image"
            width="320"
            height="170"
            alt="Зелёный забор"
            loading="lazy"
          />
        </div>

        <div class="p-4 sm:w-auto w-full">
          <h2 class="text-green-505 font-medium text-xl" v-html="data.title"></h2>

          <template v-if="data.priceText">
            <div class="font-medium" v-html="data.priceText"></div>
          </template>

          <div class="flex items-center gap-3 mt-2">
            <div v-for="tag in data.tags" :key="tag" class="px-4 py-1 text-[0.5rem] text-green-105 border border-green-105 rounded-4xl font-medium">
              {{ tag }}
            </div>
          </div>

          <p class="text-gray-150 text-[0.625rem] max-w-68 mt-2">
            {{ data.text }}
          </p>
        </div>
      </div>

      <div class="bg-white md:p-10 p-6 rounded-[1.25rem] mt-4">
        <shared-callback-form />
      </div>
      <button class="modal-close" @click="callbackModalStore.close">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.2212 1.22119L1.22119 17.2212M1.22119 1.22119L17.2212 17.2212"
            stroke="black"
            stroke-opacity="0.25"
            stroke-width="2.44231"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </VueFinalModal>
</template>

<style>
.modal-close {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  background-color: white;
  border-radius: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  transition: transform 0.2s ease;
}
.modal-close:hover {
  transform: rotate(90deg) scale(1.1);
}
.modal-close:active {
  transform: rotate(90deg) scale(0.95);
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 480px) {
  .modal-image img {
    max-height: 7.5rem;
  }
}
</style>
