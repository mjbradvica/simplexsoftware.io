<template>
  <h1 v-if="type === TitleType.One" class="title">{{ content }}</h1>
  <h2 v-if="type === TitleType.Two" class="title is-4">{{ content }}</h2>
  <h3 v-if="type === TitleType.Three" class="title is-5">{{ content }}</h3>
</template>

<script setup lang="ts">
import { TitleType } from "./TitleType";

interface TitleElementProperties {
  type: TitleType;
  content: string;
}

defineProps<TitleElementProperties>();
</script>
