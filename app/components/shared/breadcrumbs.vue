<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex flex-wrap items-center gap-2 py-4">
      <li v-for="(crumb, index) in crumbs" :key="index" class="flex items-center">
        <nuxt-link v-if="crumb.to" :to="crumb.to" class="text-black/60 hover:text-green-505 transition-colors duration-300">
          {{ crumb.title }}
        </nuxt-link>
        <span v-else class="font-medium">{{ crumb.title }}</span>
        <svg
          v-if="index < crumbs.length - 1"
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mx-2 w-4 h-4 fill-gray-300 rotate-90 md:rotate-0"
        >
          <path
            d="M1.28318 0.221302L6.28318 5.2213C6.3531 5.29098 6.40857 5.37377 6.44643 5.46494C6.48428 5.5561 6.50377 5.65384 6.50377 5.75255C6.50377 5.85126 6.48428 5.949 6.44643 6.04017C6.40857 6.13133 6.3531 6.21412 6.28318 6.2838L1.28318 11.2838C1.14228 11.4247 0.951183 11.5039 0.751926 11.5039C0.552669 11.5039 0.361572 11.4247 0.220676 11.2838C0.0797797 11.1429 0.000625142 10.9518 0.000625142 10.7526C0.000625143 10.5533 0.0797797 10.3622 0.220676 10.2213L4.69005 5.75193L0.220051 1.28255C0.0791551 1.14166 1.25847e-07 0.950561 1.28223e-07 0.751303C1.30599e-07 0.552045 0.0791552 0.360949 0.220051 0.220053C0.360948 0.0791569 0.552044 6.58306e-09 0.751301 8.95918e-09C0.950559 1.13353e-08 1.14166 0.0791569 1.28255 0.220053L1.28318 0.221302Z"
            fill="black"
            fill-opacity="0.6"
          />
        </svg>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
interface Breadcrumb {
  title: string;
  to?: string;
}

const props = defineProps<{
  customCrumbs?: Breadcrumb[];
}>();

const route = useRoute();
const crumbs = computed(() => {
  if (props.customCrumbs && props.customCrumbs.length > 0) {
    return props.customCrumbs;
  }

  const pathArray = route.path.split('/').filter((path) => path);
  const breadcrumbs: Breadcrumb[] = [{ title: 'Главная', to: '/' }];

  pathArray.reduce((acc, path, index) => {
    const currentPath = `${acc}/${path}`;
    const capitalizedPath = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');

    if (index === pathArray.length - 1) {
      breadcrumbs.push({ title: capitalizedPath });
    } else {
      breadcrumbs.push({ title: capitalizedPath, to: currentPath });
    }

    return currentPath;
  }, '');

  return breadcrumbs;
});
</script>
