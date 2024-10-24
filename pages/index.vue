<template>
  <JmContainer class="home">
    <div class="home__filters">
      <SearchBar class="home__filters-search" v-model="searchQuery" />

      <div class="home__filters-right">
        <SortCountries class="home__sort" v-model="sortQuery" />
        <RegionFilter class="home__filters-region" v-model="selectedRegion" />
      </div>
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
import SortCountries from "@/components/SortCountries";
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

const sortQuery = useQuerySync('sort', '')
const searchQuery = useQuerySync('name', '')
const selectedRegion = useQuerySync('region', '')

const fuse = computed(() => {
  return new Fuse(countries.value || [], {
    keys: ['name.common'],
    threshold: 0.5
  })
})

const filteredCountries = computed(() => {
  let result = [...(countries.value || [])]

  if (searchQuery.value) {
    result = fuse.value.search(searchQuery.value).map(({ item }) => item)
  }

  if (selectedRegion.value) {
    result = result.filter(country => country.region === selectedRegion.value)
  }

  if (sortQuery.value) {
    const [sort = 'name', dir = 'asc'] = sortQuery.value.split('-')
    const dirRatio = dir === 'asc' ? 1 : -1
    result = result.sort((a, b) => {
      if (sort === 'population') {
        return (a.population - b.population) * dirRatio
      } else {
        return (a.name.common < b.name.common ? -1 : 1) * dirRatio
      }
    })
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
    flex-wrap: wrap;
  }

  &__filters-search {
    min-width: 37%;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 40px;
    }
  }

  &__filters-right {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;

    @media (max-width: 768px) {

    }
  }

  &__sort {
    :deep(.jm-select) {
      min-width: unset;
    }
  }

  &__grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 480px) {
      justify-content: center;
    }
  }

  &__grid-item {
    margin-bottom: 74px;
  }
}
</style>
