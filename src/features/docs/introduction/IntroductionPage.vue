<template>
  <BaseDocumentationPage>
    <TitleElement :type="TitleType.Two" content="Introduction" />
    <p class="lead">
      Get familiar with Simplex Software and its' documentation.
    </p>
    <TitleElement :type="TitleType.Three" content="What is Simplex Software?"
  /></BaseDocumentationPage>
</template>

<script setup lang="ts">
import { TitleType } from "@/common";
import TitleElement from "@/common/elements/title/TitleElement.vue";
import BaseDocumentationPage from "../common/BaseDocumentationPage.vue";
</script>
