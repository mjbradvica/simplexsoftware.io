<template>
  <div>
    <HeaderView />
    <main>
      <RouterView />
    </main>
    <FooterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderView from "./features/layout/header/HeaderView.vue";
import FooterView from "./features/layout/footer/FooterView.vue";
</script>
