<template>
  <table class="simple-table">
    <thead>
      <tr>
        <th v-for="{ value, label, align } in headers" :key="value">
          <p
            :style="{
              textAlign: align,
            }"
          >
            {{ label }}
          </p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.id"
        class="simple-table__row"
        @click="onRowClick(item)"
      >
        <td v-for="{ value } in headers" :key="String(item[value])">
          <slot :name="value" :item="item" :value="item[value]">
            {{ item[value] }}
          </slot>
        </td>
      </tr>
      <tr v-if="!items.length">
        <td :colspan="headers.length" class="simple-table__empty">{{ noItemsText }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script
  setup
  lang="ts"
  generic="T extends Record<string, unknown> & {id: number | string }"
>
import { type TableHeader } from '../interfaces/TableHeader';

const emit = defineEmits<{
    (e: 'row-click', item: T): void;
}>();

const props = defineProps({
  headers: {
    type: Array as () => TableHeader<T>[],
    required: true,
  },
  items: {
    type: Array as () => T[],
    required: true,
  },
  noItemsText: {
    type: String,
    default: 'Lista jest pusta',
  },
});

type TableSlots = {
  [K in keyof T]?: (props: { item: T; value: T[K] }) => unknown;
} & {
  actions?: (props: { item: T; value: null }) => unknown;
};
defineSlots<TableSlots>();

const onRowClick = (item: T) => {
  emit('row-click', item);
};
</script>

<style lang="scss" scoped>
.simple-table {
  background-color: vars.$background-light;
  border-radius: vars.$radius-l;
  overflow: hidden;
  box-shadow: vars.$shadow-md;
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  thead {
    background-color: vars.$primary-light;

    tr {
      th {
        padding: vars.$padding-l;
        text-align: left;
        font-size: vars.$font-size-s;
        font-weight: 600;
        color: vars.$primary-color;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
    }
  }

  tbody {
    tr {
      transition: background-color vars.$transition-fast;
      cursor: pointer;

      &:hover {
        background-color: vars.$background-hover;
      }

      &:not(:last-child) {
        border-bottom: 1px solid vars.$border-color;
      }

      td {
        padding: vars.$padding-l;
        font-size: vars.$font-size-m;
        color: vars.$text-primary;
        &.simple-table__empty {
          text-align: center;
          color: vars.$text-muted;
          font-style: italic;
        }
      }
    }
  }
}
</style>
