<template>
  <button
    class="btn btn-outline-primary"
    :class="buttonFontWeight"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    {{ content }}
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<ButtonElementProperties>();

const buttonFontWeight = ref<string>("");

const onMouseEnter = (): void => {
  buttonFontWeight.value = "fw-bold";
};

const onMouseLeave = (): void => {
  buttonFontWeight.value = "";
};

interface ButtonElementProperties {
  content: string;
  onClick: () => void;
}
</script>
