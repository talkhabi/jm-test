<template>
  <JmContainer class="home">
    <div class="home__filters">
      <SearchBar class="home__filters-search" v-model="searchQuery" />
      <RegionFilter class="home__filters-region" v-model="selectedRegion" />
    </div>

    <DataStatusWrapper
      :error="error"
      :status="status"
      :refresh="refresh"
      :has-data="filteredCountries?.length > 0"
    >
      <div class="home__grid">
        <CountryCard
          v-for="country in filteredCountries"
          :key="country.name"
          :country="country"
          class="home__grid-item"
        />
      </div>
    </DataStatusWrapper>
  </JmContainer>
</template>

<script setup lang="ts">
import Fuse from 'fuse.js'
import { getCountries } from "@/services/api";
import { useQuerySync } from "@/composables/useQuerySync";

import SearchBar from "@/components/SearchBar";
import CountryCard from "@/components/CountryCard";
import RegionFilter from "@/components/RegionFilter";
import JmContainer from "@/components/ui/JmContainer";
import DataStatusWrapper from "@/components/DataStatusWrapper";

const { data: countries, status, error, refresh } = await useAsyncData(
  'countries',
  () => getCountries()
)

definePageMeta({
  name: 'home',
  layout: 'default',
});

useHead({
  title: 'Journey Mentor',
});

const searchQuery = useQuerySync('name', '')
const selectedRegion = useQuerySync('region', '')

const fuse = computed(() => {
  return new Fuse(countries.value || [], {
    keys: ['name.common'],
    threshold: 0.5
  })
})

const filteredCountries = computed(() => {
  let result = countries.value || []

  if (searchQuery.value) {
    result = fuse.value.search(searchQuery.value).map(({ item }) => item)
  }

  if (selectedRegion.value) {
    result = result.filter(country => country.region === selectedRegion.value)
  }

  return result
})

</script>

<style lang="scss" scoped>
.home {
  &__filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 48px;
  }

  &__filters-search {
    min-width: 37%;
  }

  &__grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__grid-item {
    margin-bottom: 74px;
  }
}
</style>
