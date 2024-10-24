<template>
  <NuxtLink :to="`/country/${country?.name.common}`" class="country">
    <div class="country__img">
      <img :src="country?.flags.svg" :alt="country?.name.common" />
    </div>
    <div class="country__body">
      <h3 class="country__name">{{ country?.name.common }}</h3>

      <p class="country__info-item">
        <b>Population:</b>
        <span>{{ formatPopulation(country.population) }}</span>
      </p>

      <p class="country__info-item">
        <b>Region:</b>
        <span>{{ country.region }}</span>
      </p>

      <p class="country__info-item">
        <b>Capital:</b>
        <span>{{ country.capital.join(', ') }}</span>
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { Country } from "@/types/country";

defineProps({
  country: Object as PropType<Country>,
})

const formatPopulation = (pop: number) => new Intl.NumberFormat().format(pop)
</script>

<style lang="scss" scoped>
.country {
  background-color: var(--primary-bg);
  border-radius: 4px;
  box-shadow: 0 0 4px -1px var(--shadow-color);
  display: block;
  width: 264px;
  min-width: 264px;

  &__img {
    position: relative;
    padding-bottom: 61%;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 4px 4px 0 0;
      vertical-align: middle;
      object-fit: cover;
    }
  }

  &__body {
    padding: 24px 24px 44px;
  }

  &__name {
    margin: 0 0 16px;
    font-weight: 800;
    font-size: 17px;
  }

  &__info-item {
    margin-top: 6px;
    margin-bottom: 0;
    font-size: 14px;

    b {
      font-weight: 600;
      margin-right: 4px;
    }
  }
}

</style>
