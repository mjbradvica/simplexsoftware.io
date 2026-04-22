<template>
  <h1 v-if="type === TitleType.One">{{ content }}</h1>
  <h2 v-if="type === TitleType.Two">{{ content }}</h2>
  <h3 v-if="type === TitleType.Three">{{ content }}</h3>
</template>

<script setup lang="ts">
import { TitleType } from "./TitleType";

interface TitleElementProperties {
  type: TitleType;
  content: string;
}

defineProps<TitleElementProperties>();
</script>
