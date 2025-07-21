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
          <div class="navbar-start">
            <div class="navbar-item">
              <div class="control">
                <input
                  :id="searchId"
                  class="input"
                  type="text"
                  placeholder="Site Search"
                  name="site-search"
                  title="Hit Enter to search"
                  :value="searchValue"
                  @input="handleSearchInput"
                />
              </div>
              <button
                v-if="searchValue !== ''"
                class="button is-info"
                @click="handleSearch"
              >
                Search
              </button>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="select">
                <select :value="theme" @change="changeTheme">
                  <option value="light" selected>Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <hr class="mt-0" />
  </header>
</template>

<script setup lang="ts">
import { homeNamedRoute } from "@/features/home/home.routes";
import { ref, useId } from "vue";
import { RouterLink } from "vue-router";
import brand from "@/assets/brand.png";
import { TitleType, TitleElement } from "@/common";

const searchId = useId();

const theme = ref<string>("light");
const changeTheme = (): void => {
  document.getElementById("root")?.classList.toggle("theme-light");
  document.getElementById("root")?.classList.toggle("theme-dark");
};

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
