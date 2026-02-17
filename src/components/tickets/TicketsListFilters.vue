<template>
  <div class="filters-container">
    <h1 class="filters-container__title">Lista zgłoszeń</h1>
    <TicketStatusSelect />
  </div>
</template>

<script setup lang="ts">
import TicketStatusSelect from './TicketStatusSelect.vue';
</script>

<style lang="scss" scoped>
.filters-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: vars.$margin-l;
  padding: vars.$padding-l;
  background-color: vars.$background-light;
  border-radius: vars.$radius-l;
  box-shadow: vars.$shadow-md;

  &__title {
    font-size: vars.$font-size-xl;
    font-weight: 700;
    color: vars.$text-primary;
    margin: 0;

    @media (min-width: vars.$breakpoint-mobile) {
      font-size: vars.$font-size-xxl;
    }
  }

  @media (max-width: calc(vars.$breakpoint-mobile - 1px)) {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
