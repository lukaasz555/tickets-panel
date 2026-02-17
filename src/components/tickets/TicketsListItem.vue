<template>
  <div class="ticket-item" @click="handleClick">
    <div class="ticket-item__base-info">
      <div class="">
        <!-- remake to readonly input (not created yet) -->
        <div>{{ ticket.customerName }}</div>
        <div>{{ ticket.subject }}</div>
      </div>

      <div>
        <div>Status</div>
        <div>Prior</div>
      </div>
    </div>

    <div class="ticket-item__description">
      <p>{{ ticket.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { RouteName } from '../../enums';
import { router } from '../../plugins/router';
import { Ticket } from '../../models';

const props = defineProps({
  ticket: {
    type: Object as PropType<Ticket>,
    required: true,
  },
});

const handleClick = (): void => {
  router.push({
    name: RouteName.TICKET,
    params: {
      id: props.ticket.id,
    },
  });
};
</script>

<style lang="scss" scoped>
.ticket-item {
  border-radius: vars.$radius-s;
  box-shadow: 4px 8px 22px rgba(0, 0, 0, 0.1);
  padding: vars.$margin-s vars.$margin-m;
  cursor: pointer;

  &__base-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
