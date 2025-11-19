function beforeEnter(el: Element) {
  if (el instanceof HTMLElement) {
    el.style.height = '0px';
  }
}
function enter(el: Element) {
  if (el instanceof HTMLElement) {
    const h = el.scrollHeight;
    el.style.transition = 'height 220ms cubic-bezier(.4,0,.2,1)';
    requestAnimationFrame(() => {
      el.style.height = h + 'px';
    });
  }
}
function afterEnter(el: Element) {
  if (el instanceof HTMLElement) {
    el.style.height = 'auto';
    el.style.transition = '';
  }
}
function beforeLeave(el: Element) {
  if (el instanceof HTMLElement) {
    el.style.height = el.scrollHeight + 'px';
    el.style.transition = '';
  }
}
function leave(el: Element) {
  if (el instanceof HTMLElement) {
    el.style.transition = 'height 200ms cubic-bezier(.4,0,.2,1)';
    requestAnimationFrame(() => {
      el.style.height = '0px';
    });
  }
}
function afterLeave(el: Element) {
  if (el instanceof HTMLElement) {
    el.style.height = '0px';
    el.style.transition = '';
  }
}

export function useHeightAnimation() {
  return { beforeEnter, enter, afterEnter, beforeLeave, leave, afterLeave };
}
