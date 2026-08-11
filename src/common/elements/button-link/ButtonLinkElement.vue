<template>
  <a
    :href="link"
    target="_blank"
    class="btn btn-outline-primary"
    role="button"
    :class="buttonFontWeight"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    >{{ content }}</a
  >
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<ButtonLinkElementProperties>();

const buttonFontWeight = ref<string>("");

const onMouseEnter = (): void => {
  buttonFontWeight.value = "fw-bold";
};

const onMouseLeave = (): void => {
  buttonFontWeight.value = "";
};

interface ButtonLinkElementProperties {
  content: string;
  link: string;
}
</script>
