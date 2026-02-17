<template>
  <div class="custom-select" ref="selectRef">
    <label v-if="label" class="custom-select__label">{{ label }}</label>

    <div class="custom-select__control" @click="toggleDropdown">
      <span class="custom-select__value">{{ selectedLabel }}</span>
      <svg
        class="custom-select__arrow"
        :class="{ 'custom-select__arrow--open': isOpen }"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <Transition name="dropdown">
      <div v-if="isOpen" class="custom-select__dropdown">
        <div
          v-for="option in options"
          :key="String(option.value)"
          class="custom-select__option"
          :class="{ 'custom-select__option--selected': option.value === modelValue }"
          @click="selectOption(option.value)"
        >
          {{ option.label }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts" generic="T extends string | number | null">
import { computed, ref, onMounted, onUnmounted, type PropType, useTemplateRef } from 'vue';

const emit = defineEmits<{
  (e: 'update:modelValue', value: T | null): void;
}>();

const props = defineProps({
  modelValue: {
    type: [String, Number, null] as PropType<T | null>,
    default: null
  },
  options: {
    type: Array as PropType<{ value: T; label: string }[]>,
    required: true
  },
  label: {
    type: String,
    default: ''
  }
});

const isOpen = ref(false);
const selectRef = useTemplateRef<HTMLElement>('selectRef')

const selectedLabel = computed(() => {
  const selected = props.options.find(opt => opt.value === props.modelValue);
  return selected?.label || 'Wybierz opcję';
});

const toggleDropdown = () => isOpen.value = !isOpen.value;


const selectOption = (value: T) => {
  emit('update:modelValue', value);
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped lang="scss">
.custom-select {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: vars.$margin-s;
  min-width: 200px;

  &__label {
    font-size: vars.$font-size-s;
    font-weight: 500;
    color: vars.$text-secondary;
    user-select: none;
  }

  &__control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: vars.$padding-m vars.$padding-l;
    background-color: vars.$background-light;
    border: 1px solid vars.$border-color;
    border-radius: vars.$radius-m;
    cursor: pointer;
    transition: all vars.$transition-fast;
    box-shadow: vars.$shadow-sm;

    &:hover {
      border-color: vars.$border-hover;
      box-shadow: vars.$shadow-md;
    }
  }

  &__value {
    font-size: vars.$font-size-m;
    color: vars.$text-primary;
    user-select: none;
  }

  &__arrow {
    color: vars.$text-secondary;
    transition: transform vars.$transition-fast;

    &--open {
      transform: rotate(180deg);
    }
  }

  &__dropdown {
    position: absolute;
    top: calc(100% + vars.$margin-xs);
    left: 0;
    right: 0;
    background-color: vars.$background-light;
    border: 1px solid vars.$border-color;
    border-radius: vars.$radius-m;
    box-shadow: vars.$shadow-lg;
    overflow: hidden;
    z-index: 1000;
    max-height: 300px;
    overflow-y: auto;
  }

  &__option {
    padding: vars.$padding-m vars.$padding-l;
    cursor: pointer;
    transition: background-color vars.$transition-fast;
    font-size: vars.$font-size-m;
    color: vars.$text-primary;

    &:hover {
      background-color: vars.$background-hover;
    }

    &--selected {
      background-color: vars.$primary-light;
      color: vars.$primary-color;
      font-weight: 500;
    }
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all vars.$transition-fast;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
