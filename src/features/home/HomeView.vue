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
          <ButtonLinkElement
            content="Get Started"
            link="https://www.simplexsoftware.io/docs"
          />
          <ButtonLinkElement
            content="GitHub"
            link="https://www.github.com/mjbradvica"
          />
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
            :icon-type="IconType.Plugin"
            title="Plugin-Based Libraries"
            sub-title="Use one library, or all of them."
          />
        </div>
        <div class="col">
          <FeatureCard
            :icon-type="IconType.ArrowDownCircle"
            title="Dependency Injection Enabled"
            sub-title="Proper modular design at the core of everything."
          />
        </div>
        <div class="col">
          <FeatureCard
            :icon-type="IconType.CheckSquare"
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
import ButtonLinkElement from "@/common/elements/button-link/ButtonLinkElement.vue";
import ButtonElement from "@/common/elements/button/ButtonElement.vue";
import { IconType } from "@/common/elements/icon/icon-type";
</script>
