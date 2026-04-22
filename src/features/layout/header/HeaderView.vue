<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container border-bottom">
        <RouterLink
          :to="homeNamedRoute"
          class="navbar-brand d-flex align-items-center gap-2"
        >
          <img :src="brand" alt="brand" class="img-fluid" />
          <TitleElement :type="TitleType.One" content="Simplex Software" />
        </RouterLink>
        <form class="d-flex align-items-center gap-2">
          <input
            :id="searchId"
            class="form-control"
            type="text"
            placeholder="Site Search"
            name="site-search"
            title="Hit Enter to search"
            :value="searchValue"
            @input="handleSearchInput"
          />
          <button
            v-if="searchValue !== ''"
            class="btn btn-primary"
            @click="handleSearch"
          >
            Search
          </button>
          <select
            class="form-select"
            :value="theme"
            @change="changeTheme($event)"
          >
            <option value="light" selected>Light</option>
            <option value="dark">Dark</option>
          </select>
        </form>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { homeNamedRoute } from "@/features/home/home.routes";
import { ref, useId, watch } from "vue";
import { RouterLink } from "vue-router";
import brand from "@/assets/brand32.png";
import { TitleType, TitleElement } from "@/common";

const searchId = useId();

const theme = ref<string>("light");
const changeTheme = (event: Event): void => {
  theme.value = (event.target as HTMLInputElement).value;
};

watch(theme, () => {
  document.getElementById("root")?.setAttribute("data-bs-theme", theme.value);
});

const searchValue = ref<string>("");
const handleSearchInput = (event: Event): void => {
  searchValue.value = (event.target as HTMLInputElement).value;
};

const handleSearch = (): void => {
  window
    .open(
      `https://www.google.com/search?q=site:michaelbradvica.com+${searchValue.value}`,
      "_blank",
    )
    ?.focus();
  searchValue.value = "";
};
</script>
