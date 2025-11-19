export const useCallbackModalStore = defineStore('callbackModal', () => {
  const data = ref({
    title: 'Рассрочка 0-0-12* на новый забор!',
    tags: ['Бесплатный выезд на замер', 'Подарки'],
    text: 'Быстрое рассмотрение заявки и высокий процент одобрения в аккредитованных банках России.',
    image: '/images/pages/main/fence.png',
  });

  const show = ref(false);
  function open() {
    show.value = true;
  }
  function close() {
    show.value = false;
  }

  return { show, open, close, data };
});
