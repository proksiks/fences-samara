import type { Directive } from 'vue';

const phoneMask: Directive<HTMLInputElement, void> = {
  mounted(el) {
    el.addEventListener('input', handleInput);
    el.addEventListener('keydown', handleBackspace);

    if (!el.value) {
      el.value = '+7 (___) ___ __ __';

      if (el.setSelectionRange) {
        el.setSelectionRange(4, 4);
      }
    }
  },
  unmounted(el) {
    el.removeEventListener('input', handleInput);
    el.removeEventListener('keydown', handleBackspace);
  },
  updated(el) {
    if (!el.value.match(/^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/) && el.value !== '+7 (___) ___ __ __') {
      const numbers = el.value.replace(/\D/g, '');
      applyMask(el, numbers);
    }
  },
};

function handleInput(event: Event) {
  const el = event.target as HTMLInputElement;
  const startPos = el.selectionStart || 0;
  const endPos = el.selectionEnd || 0;

  let numbers = el.value.replace(/\D/g, '');

  if (numbers.length > 10) {
    numbers = numbers.substring(0, 10);
  }

  applyMask(el, numbers);

  const newCursorPos = calculateCursorPosition(el.value, startPos, endPos);
  if (el.setSelectionRange) {
    el.setSelectionRange(newCursorPos, newCursorPos);
  }
}

function handleBackspace(event: KeyboardEvent) {
  const el = event.target as HTMLInputElement;

  if (event.key === 'Backspace' || event.key === 'Delete') {
    const startPos = el.selectionStart || 0;
    const endPos = el.selectionEnd || 0;

    if (startPos === endPos && startPos > 3) {
      const numbers = el.value.replace(/\D/g, '').slice(0, -1);

      applyMask(el, numbers);

      const newCursorPos = Math.max(4, startPos - 1);
      if (el.setSelectionRange) {
        el.setSelectionRange(newCursorPos, newCursorPos);
      }
    }
  }
}

function applyMask(el: HTMLInputElement, numbers: string) {
  let result = '+7 (';

  if (numbers.length > 0) {
    result += numbers.substring(0, 3);
  } else {
    result += '___';
  }

  result += ') ';

  if (numbers.length > 3) {
    result += numbers.substring(3, 6);
  } else if (numbers.length > 0) {
    result += numbers.substring(3);
    result += '_'.repeat(3 - Math.min(3, numbers.length - 3));
  } else {
    result += '___';
  }

  result += ' ';

  if (numbers.length > 6) {
    result += numbers.substring(6, 8);
  } else if (numbers.length > 3) {
    result += numbers.substring(6);
    result += '_'.repeat(2 - Math.min(2, numbers.length - 6));
  } else {
    result += '__';
  }

  result += ' ';

  if (numbers.length > 8) {
    result += numbers.substring(8, 10);
  } else if (numbers.length > 6) {
    result += numbers.substring(8);
    result += '_'.repeat(2 - Math.min(2, numbers.length - 8));
  } else {
    result += '__';
  }

  el.value = result;
}

function calculateCursorPosition(newValue: string, oldStart: number, _oldEnd: number): number {
  let cursorPos = oldStart;

  while (cursorPos < newValue.length && /[^\d]/.test(newValue[cursorPos] || '') && cursorPos < newValue.length - 1) {
    cursorPos++;
  }

  return cursorPos;
}

export default phoneMask;
