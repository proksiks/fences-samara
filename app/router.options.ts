import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        nextTick(() => {
          const element = document.querySelector(to.hash);
          if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
            const headerHeight = document.querySelector('header')?.clientHeight || 64;
            resolve({
              top: offsetTop - headerHeight,
              behavior: 'smooth',
            });
          } else {
            resolve({ top: 0 });
          }
        });
      });
    }
    return { top: 0 };
  },
};
