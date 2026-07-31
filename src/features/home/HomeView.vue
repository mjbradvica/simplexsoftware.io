<template>
  <div class="p-5 my-5 text-center container">
    <div class="row">
      <div class="col-lg-6">
        <p class="fw-bold fs-1 text-primary-emphasis">Software Made Simple.</p>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Build software with a buffet of libraries that are a blessing, not a
            burden. Small, simple, and powerful.
          </p>
        </div>
        <div class="d-flex justify-content-center gap-3">
          <button class="btn btn-outline-primary">Get Started</button>
          <button class="btn btn-outline-primary">GitHub</button>
        </div>
      </div>
      <div class="col-lg-6">
        <img :src="brand" alt="logo" />
      </div>
    </div>
    <div class="p-5">
      <div class="row text-center">
        <h2 class="text-primary">Why Simplex?</h2>
        <p class="lead">Join others creating better software.</p>
      </div>
      <div class="row">
        <div class="col">
          <FeatureCard
            title="Plugin-Based Libraries"
            sub-title="Use one libraries, or all of them."
          />
        </div>
        <div class="col">
          <FeatureCard
            title="Dependency Injection Enabled"
            sub-title="Proper modular design at the core of everything."
          />
        </div>
        <div class="col">
          <FeatureCard
            title="Designed For Testing"
            sub-title="Unit testing as a first-class citizen."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import brand from "@/assets/brand.png";
import FeatureCard from "@/common/components/feature-card/FeatureCard.vue";
</script>
