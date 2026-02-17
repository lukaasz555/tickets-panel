<template>
  <div class="not-found-view">
    <div class="not-found-view__container">
      <h1 class="not-found-view__title">Strona nie istnieje</h1>
      <p class="not-found-view__text">Strona, której szukasz, nie została znaleziona.</p>
      <Button variant="outlined" class="not-found-view__btn" @click="handleRedirect"
        >Powrót do listy</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouteName } from '../enums';
import { router } from '../plugins/router';
import Button from '../components/UI/Button.vue';

const handleRedirect = () => router.push({ name: RouteName.TICKETS });
</script>

<style scoped lang="scss">
.not-found-view {
  &__container {
    background-color: vars.$background-light;
    padding: vars.$padding-xl;
    border-radius: vars.$radius-l;
    box-shadow: vars.$shadow-lg;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: vars.$font-size-xxl;
    margin-bottom: vars.$margin-m;
  }

  &__text {
    font-size: vars.$font-size-m;
    color: vars.$text-muted;
  }

  &__btn {
    margin-top: vars.$margin-xl;
  }
}
</style>
