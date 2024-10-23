<template>
  <div>
    <h1>Countries</h1>
    <DataStatusWrapper
      :error="error"
      :status="status"
      :refresh="refresh"
      :has-data="countries?.length > 0"
    >
      <CountryCard v-for="country in countries" :key="country.name" :country="country"/>
    </DataStatusWrapper>
  </div>
</template>

<script setup lang="ts">
import {getCountries} from "@/services/api";
import CountryCard from "@/components/CountryCard";
import DataStatusWrapper from "@/components/DataStatusWrapper";

const {data: countries, status, error, refresh} = await useAsyncData(
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
</script>
