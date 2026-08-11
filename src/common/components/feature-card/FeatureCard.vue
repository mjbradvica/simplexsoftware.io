<template>
  <div class="card border-secondary-subtle border-1 shadow h-100">
    <IconElement :type="iconType" :size="IconSize.One" />
    <div class="card-body">
      <h4 class="card-title text-primary">{{ title }}</h4>
      <h5 class="card-subtitle">{{ subTitle }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconSize } from "@/common/elements/icon/icon-size";
import type { IconType } from "@/common/elements/icon/icon-type";
import IconElement from "@/common/elements/icon/IconElement.vue";

interface FeatureCardProperties {
  iconType: IconType;
  title: string;
  subTitle: string;
}

defineProps<FeatureCardProperties>();
</script>
