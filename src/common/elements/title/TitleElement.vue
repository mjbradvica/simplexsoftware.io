<template>
  <h1 v-if="type === TitleType.One" :id="id">
    {{ content }}
  </h1>
  <h2 v-if="type === TitleType.Two" :id="id">
    {{ content }}
  </h2>
  <h3 v-if="type === TitleType.Three" :id="id">
    {{ content }}
  </h3>
</template>

<script setup lang="ts">
import { TitleType } from "./title-type";

const id = crypto.randomUUID();

interface TitleElementProperties {
  type: TitleType;
  content: string;
}

defineProps<TitleElementProperties>();
</script>
