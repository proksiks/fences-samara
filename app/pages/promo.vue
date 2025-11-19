<template>
  <div class="text-white">
    <div>
      <div class="container">
        <div class="flex justify-between pt-36.5 pb-20">
          <div class="max-w-181.25">
            <h1 class="text-[3.5rem] font-bold leading-none">
              Готовьтесь к весне <br />
              с умом:
              <span class="text-green-105">
                забор со <br />
                скидкой!
              </span>
            </h1>
            <p class="text-[1.5rem] mt-10">
              Зафиксируйте зимнюю цену на забор сейчас, <br />
              а мы установим его весной в первую очередь. <br />
              Не переплачивайте в сезон — экономьте сегодня.
            </p>

            <button class="promo-green-button">предзаказ</button>
          </div>
          <div>
            <div class="relative">
              <nuxt-picture
                class="block p-4 bg-white promo-image-bg"
                src="/images/pages/promo/promo-intro.jpg"
                width="550"
                height="482"
                alt="Картинка"
                loading="lazy"
              />
              <nuxt-picture
                class="promo-image-bottom block p-4 bg-white"
                src="/images/pages/promo/promo-preview-fence.jpg"
                width="292"
                height="260"
                alt="Картинка"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-20">
      <div class="container-big">
        <div class="py-10 px-26.25 custom-features">
          <h2 class="text-[3rem] font-medium leading-small">Почему предзаказ — это выгодно и удобно?</h2>
          <div class="grid lg:grid-cols-3 gap-6 mt-10">
            <div class="p-8 border border-black/10 rounded-3xl promo-card-feature">
              <div class="flex items-center gap-5">
                <div class="size-10 bg-green-105 flex items-center justify-center rounded-full">
                  <nuxt-picture src="/images/icons/doc-star.svg" width="24" height="24" alt="Иконка файла" loading="lazy" />
                </div>
                <h2 class="text-[1.375rem] font-bold">Экономия бюджета</h2>
              </div>
              <p class="mt-5">Получите лучшую цену года. Весной стоимость материалов и работ неизбежно вырастет.</p>
            </div>
            <div class="p-8 border border-black/10 rounded-3xl promo-card-feature">
              <div class="flex items-center gap-5">
                <div class="size-10 bg-green-105 flex items-center justify-center rounded-full">
                  <nuxt-picture src="/images/icons/present.svg" width="24" height="24" alt="Иконка файла" loading="lazy" />
                </div>
                <h2 class="text-[1.375rem] font-bold">Гарантия сроков</h2>
              </div>
              <p class="mt-5">Ваш монтаж будет в числе первых. Не ждите в очереди, когда забор нужен «еще вчера».</p>
            </div>
            <div class="p-8 border border-black/10 rounded-3xl promo-card-feature">
              <div class="flex items-center gap-5">
                <div class="size-10 bg-green-105 flex items-center justify-center rounded-full">
                  <nuxt-picture src="/images/icons/mingcute.svg" width="24" height="24" alt="Иконка файла" loading="lazy" />
                </div>
                <h2 class="text-[1.375rem] font-bold">Уверенность</h2>
              </div>
              <p class="mt-5">Забудьте о весенних хлопотах. Ваш забор уже ждет своего часа на нашем складе.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-20">
      <div class="container-big">
        <div class="bg-[#F2F8FF] text-black p-10 rounded-[1.25rem]">
          <h2 class="text-green-505 text-[3rem] font-medium text-center leading-small">Готовы сделать умный ход?</h2>
          <p class="max-w-221 mx-auto text-center text-[1.5rem] leading-small text-green-505 mt-6">
            Оставьте заявку, и наш менеджер подготовит для вас точный расчет c учетом зимней скидки. Это бесплатно и ни к чему вас не обязывает!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'promo',
});
</script>

<style>
.promo-image-bg {
  margin-top: -38px;
  transform: rotate(3deg);
  border-radius: 2rem;
  background: linear-gradient(52.37deg, #ffffff 2.22%, #b1dcff 96.05%);
  box-shadow:
    -2px 11px 25px 0px #031f308a,
    -7px 44px 45px 0px #031f3078,
    -16px 99px 60px 0px #031f3047,
    -29px 176px 71px 0px #031f3014,
    -45px 276px 78px 0px #031f3003;
}
.promo-image-bg img {
  border-radius: 1.25rem;
}

.promo-image-bottom {
  position: absolute;
  bottom: -80px;
  left: -120px;
  border-radius: 2rem;
  transform: rotate(-4deg);
  background: linear-gradient(52.37deg, #ffffff 2.22%, #b1dcff 96.05%);
  box-shadow:
    -2px 11px 25px 0px #031f308a,
    -7px 44px 45px 0px #031f3078,
    -16px 99px 60px 0px #031f3047,
    -29px 176px 71px 0px #031f3014,
    -45px 276px 78px 0px #031f3003;
}

.promo-image-bottom img {
  border-radius: 1.25rem;
}

.promo-green-button {
  margin-top: 2.5rem;
  cursor: pointer;
  border-radius: 0.625rem;
  font-size: 2rem;
  text-transform: uppercase;
  line-height: 1.4;
  font-weight: 700;
  padding: 1.4375rem 4.8125rem;
  background: linear-gradient(180deg, #a7ff31 0%, #83cd20 100%);
  border: 3px solid #83cd20;
  box-shadow:
    0px 5px 11px 0px #031f308a,
    0px 21px 21px 0px #031f3078,
    0px 47px 28px 0px #031f3047,
    0px 83px 33px 0px #031f3014,
    0px 130px 36px 0px #031f3003;
  transition: transform 0.2s ease 0s;
}

.promo-green-button:hover {
  transform: scale(1.05);
}
.promo-green-button:active {
  transform: scale(0.95);
}

.custom-features {
  border: 0.125rem solid rgba(255, 255, 255, 0.102);
  border-radius: 1.6875rem;
  background: rgba(255, 255, 255, 0.102);
  backdrop-filter: blur(0.375rem);
}

.promo-card-feature {
  background: #c2f4ff33;
  border: 1px solid #ffffff1a;
  box-shadow:
    0px 15px 32px 0px #0000001a,
    0px 59px 59px 0px #00000017,
    0px 132px 79px 0px #0000000d,
    0px 235px 94px 0px #00000003,
    0px 366px 103px 0px #00000000;
}
</style>
