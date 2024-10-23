<template>
  <JmContainer>
    <DataStatusWrapper
      :error="error"
      :status="status"
      :refresh="refresh"
      :has-data="!!country"
    >
      <h1>{{ country.name.common }}</h1>
      <p>Capital: {{ country.capital?.[0] }}</p>
      <p>Population: {{ country.population }}</p>
      <p>Region: {{ country.region }}</p>
    </DataStatusWrapper>
  </JmContainer>
</template>

<script setup lang="ts">
import type {Country} from "@/types/country";
import {getCountryByName} from "@/services/api";
import JmContainer from "@/components/ui/JmContainer";
import DataStatusWrapper from "@/components/DataStatusWrapper";

const route = useRoute();

const name = route.params?.name

const { data, status, error, refresh, clear } = await useAsyncData(
    `country-${name}`,
    () => getCountryByName(name as string)
)

const country = computed<Country>(() => data?.value?.[0] as Country);

useHead({
  title: country.value?.name?.common + ' | Journey Mentor',
});
</script>
