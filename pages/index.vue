<template>
  <JmContainer class="home">
    <div class="home__filters">
      <SearchBar class="home__filters-search" v-model="searchValue" />
      <RegionFilter class="home__filters-region" v-model="regionFilter" />
    </div>

    <DataStatusWrapper
      :error="error"
      :status="status"
      :refresh="refresh"
      :has-data="countries?.length > 0"
    >
      SEARCH: {{ searchValue }}
      <CountryCard v-for="country in countries" :key="country.name" :country="country"/>
    </DataStatusWrapper>
  </JmContainer>
</template>

<script setup lang="ts">
import { getCountries } from "@/services/api";
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

const regionFilter = ref('')
const searchValue = ref('')

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

}
</style>
