<template>
  <div class="card border-secondary border-1 shadow h-100">
    <i class="bi bi-plug-fill fs-1"></i>
    <div class="card-body">
      <h4 class="card-title">{{ title }}</h4>
      <h5 class="card-subtitle">{{ subTitle }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FeatureCardProperties {
  title: string;
  subTitle: string;
}

defineProps<FeatureCardProperties>();
</script>
