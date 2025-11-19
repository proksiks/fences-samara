export const useCallbackModalStore = defineStore('callbackModal', () => {
  const defaultData = {
    title: 'Рассрочка 0-0-12* <br/> на новый забор!',
    tags: ['Бесплатный выезд на замер', 'Подарки'],
    text: 'Быстрое рассмотрение заявки и высокий процент одобрения в аккредитованных банках России.',
    image: '/images/pages/main/fence.png',
    priceText: undefined as string | undefined,
  };

  const data = ref({ ...defaultData });

  const show = ref(false);
  function open() {
    show.value = true;
  }
  function close() {
    show.value = false;
    data.value = { ...defaultData };
  }

  return { show, open, close, data };
});
