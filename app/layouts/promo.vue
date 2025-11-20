<template>
  <div class="relative">
    <navigation-menu transparent />
    <div class="relative">
      <slot />
    </div>
    <footer-menu transparent />
    <shared-callback-modal />
    <modals-container />

    <nuxt-picture
      class="layout-promo-bg absolute h-full w-full left-0 top-0 -z-10 sm:block hidden"
      height="2562"
      width="1913"
      src="/images/layouts/promo-bg.jpg"
      alt="Background Image"
      priority
      loading="lazy"
    />
    <nuxt-picture
      class="layout-promo-bg absolute h-full w-full left-0 top-0 -z-10 sm:hidden bg-[#477a95]"
      height="4091"
      width="390"
      src="/images/layouts/bg_m.jpg"
      alt="Background Image"
      priority
      loading="lazy"
    />

    <div class="snow-container">
      <div v-for="n in 200" :key="n" class="snow"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal';
</script>

<style lang="scss">
@use 'sass:math';
.layout-promo-bg img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: top;
}

.snow-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: -9;
}

@function random_range($min, $max) {
  $rand: math.random();
  $random_range: $min + math.floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.snow {
  $total: 200;
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  opacity: 0.8;
  box-shadow: 0px 0px 30px 15px rgba(191, 191, 191, 0.7);

  @for $i from 1 through $total {
    $random-x: (math.floor(math.random() * 1000000) + 1) * 0.0001vw;
    $random-offset: random_range(-100000, 100000) * 0.0001vw;
    $random-x-end: $random-x + $random-offset;
    $random-x-end-yoyo: $random-x + math.div($random-offset, 2);
    $random-yoyo-time: math.div(random_range(30000, 80000), 100000);
    $random-yoyo-y: $random-yoyo-time * 100vh;
    $random-scale: (math.floor(math.random() * 10000) + 1) * 0.0001;
    $fall-duration: random_range(10, 30) * 1s;
    $fall-delay: (math.floor(math.random() * 30) + 1) * -1s;

    &:nth-child(#{$i}) {
      opacity: (math.floor(math.random() * 10000) + 1) * 0.0001;
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }

    @keyframes fall-#{$i} {
      #{math.percentage($random-yoyo-time)} {
        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
      }

      to {
        transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
      }
    }
  }
}
</style>
