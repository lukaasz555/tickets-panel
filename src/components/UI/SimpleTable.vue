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
      <tr v-if="isLoading" v-for="n in 8" :key="n" class="simple-table__skeleton-row">
        <td :colspan="headers.length">
          <span class="simple-table__skeleton-cell" />
        </td>
      </tr>

      <tr v-else-if="error" class="simple-table__error-row">
        <td :colspan="headers.length">
          <div class="simple-table__error">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 6v4m0 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>{{ error }}</span>
          </div>
        </td>
      </tr>

      <tr v-if="!items.length && !isLoading && !error">
        <td :colspan="headers.length" class="simple-table__empty">{{ noItemsText }}</td>
      </tr>
      <template v-if="!isLoading && !error">
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
      </template>
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
  isLoading: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String as () => string | null,
    default: null,
  }
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

        span.simple-table__skeleton-cell {
          display: block;
          height: 40px;
          width: 100%;
          border-radius: vars.$radius-m;
          background: linear-gradient(
            90deg,
            vars.$border-color 25%,
            vars.$background-hover 50%,
            vars.$border-color 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        div.simple-table__error {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: vars.$margin-s;
          padding: vars.$padding-xl;
          color: vars.$priority-high;
          font-size: vars.$font-size-m;
          font-weight: 500;
        }
      }

      &.simple-table__skeleton-row {
        pointer-events: none;
        td {
          padding: vars.$padding-m vars.$padding-l;
        }
      }

      &.simple-table__error-row {
        pointer-events: none;
      }
    }
  }
}
</style>
