<template>
  <div class="filters-container">
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
  justify-content: flex-end;
}
</style>
