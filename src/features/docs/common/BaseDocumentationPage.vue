<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="list-group list-group-flush">
          <RouterLink :to="''" class="list-group-item list-group-item-action"
            >Getting Started Guide</RouterLink
          >
        </div>
      </div>
      <div class="col">
        <slot></slot>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
