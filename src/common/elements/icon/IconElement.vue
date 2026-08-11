<template>
  <i class="bi" :class="`${determineIcon()} ${determineSize()}`"></i>
</template>

<script setup lang="ts">
import type { IconSize } from "./icon-size";
import { IconType } from "./icon-type";

interface IconElementProperties {
  type: IconType;
  size: IconSize;
}

const properties = defineProps<IconElementProperties>();

const determineIcon = (): string => {
  switch (properties.type) {
    case IconType.PlugFill: {
      return "bi-plug-fill";
    }
    case IconType.Plugin: {
      return "bi-plugin";
    }
    case IconType.ArrowDownCircle: {
      return "bi-arrow-down-circle";
    }
    case IconType.CheckSquare: {
      return "bi-check-square";
    }
    default: {
      return "";
    }
  }
};

const determineSize = (): string => {
  return "fs-1";
};
</script>
