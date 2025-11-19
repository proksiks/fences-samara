<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';
</script>

<template>
  <VueFinalModal class="flex" content-class="flex-1 flex overflow-y-auto py-4 px-4">
    <div class="md:max-w-157.5 m-auto">
      <div class="rounded-3xl bg-white flex items-center">
        <div class="flex-1 flex items-center justify-center lg:justify-end">
          <nuxt-picture
            class="modal-image rounded-3xl overflow-hidden w-full"
            src="/images/pages/main/fence.png"
            width="420"
            height="363"
            alt="Зелёный забор"
          />
        </div>

        <div class="p-4">
          <h2 class="text-green-505 font-medium text-xl">
            Рассрочка 0-0-12* <br />
            на новый забор!
          </h2>

          <div class="flex items-center gap-3 mt-2">
            <div class="px-4 py-1 text-[0.5rem] text-green-105 border border-green-105 rounded-4xl font-medium">Бесплатный выезд на замер</div>
            <div class="px-4 py-1 text-[0.5rem] text-green-105 border border-green-105 rounded-4xl font-medium">Подарки</div>
          </div>

          <p class="text-gray-150 text-[0.625rem] max-w-68 mt-2">Быстрое рассмотрение заявки и высокий процент одобрения в аккредитованных банках России.</p>
        </div>
      </div>

      <div class="bg-white md:p-10 p-6 rounded-[1.25rem] mt-4">
        <shared-callback-form />
      </div>
      <button class="modal-close">
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

<script lang="ts" setup>

</script>

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
  max-height: 10rem;
  object-fit: cover;
}
</style>
