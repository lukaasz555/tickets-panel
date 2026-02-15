<template>
  <div class="select-container">
    <label v-if="label" :for="selectId" class="select-container__label">{{
      label
    }}</label>
    <select v-model="selectedValue" :id="selectId" class="select-container__select">
      <option
        v-for="option in options"
        :value="option.value"
        :key="String(option.value)"
        class="select-container__option"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts" generic="T extends string | number | null">
import { computed, type PropType } from 'vue';

const emit = defineEmits<{
    (e: 'update:modelValue', value: T | null): void
}>();


const props = defineProps({
    modelValue: {
        type: [String, Number, null],
        default: null
    },
    options: {
        type: Array as PropType<{value: T, label: string}[]>,
        required: true
    },
    selectId: {
        type: String,
        default: 'default-select'
    },
    label: {
        type: String,
        default: ''
    }
})

const selectedValue = computed({
    get: () => props.modelValue,
    set: (value: T) => {
        console.log('value to set', value);
        emit('update:modelValue', value)
    }
})
</script>

<style scoped lang="scss">
.select-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: vars.$font-size-s;

  &__label {
    user-select: none;
  }

  &__select,
  ::picker(select) {
    appearance: base-select;
    padding: vars.$padding-s vars.$padding-l;
    border-radius: vars.$radius-s;
    cursor: pointer;
  }

  &__option {
    cursor: pointer;
    border-radius: vars.$radius-s;
  }
}
</style>
