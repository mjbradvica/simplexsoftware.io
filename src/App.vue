<template>
  <div>
    <header></header>
    <main>
      <RouterView />
    </main>
    <footer></footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
