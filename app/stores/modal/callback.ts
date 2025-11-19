export const useCallbackModalStore = defineStore('callbackModal', () => {
  const show = ref(false);
  function open() {
    show.value = true;
  }
  function close() {
    show.value = false;
  }
  
  return { show, open, close };
});
