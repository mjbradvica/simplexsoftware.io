<template>
  <footer class="container border-top">
    <div class="p-4">
      <p>
        <strong
          >Copyright {{ date.getFullYear() }}. All rights reserved.</strong
        >
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const date = new Date();
</script>
