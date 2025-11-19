import { defineNuxtPlugin } from '#app'
import phoneMask from '~/directives/phone-mask'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('phone-mask', phoneMask)
})