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
  // switch (properties.type) {
  //   case IconType.PlugFill: {
  //     return "bi-plug-fill";
  //   }
  //   default: {
  //     return "";
  //   }
  // }

  return "bi-plug-fill";
};

const determineSize = (): string => {
  return "fs-1";
};
</script>
