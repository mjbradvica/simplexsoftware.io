<template>
  <header>
    <div class="p-4">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <RouterLink :to="homeNamedRoute">
            <div class="navbar-item">
              <img :src="brand" alt="brand" class="image is-square" />
              <TitleElement :type="TitleType.One" content="Simplex Software" />
            </div>
          </RouterLink>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="select">
              <select :value="theme" @change="changeTheme">
                <option value="light" selected>Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { homeNamedRoute } from "@/features/home/home.routes";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import brand from "@/assets/brand.png";
import { TitleType, TitleElement } from "@/common";

const theme = ref<string>("light");
const changeTheme = (): void => {
  document.getElementById("root")?.classList.toggle("theme-light");
  document.getElementById("root")?.classList.toggle("theme-dark");
};
</script>
