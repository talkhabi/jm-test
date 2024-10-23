<template>
  <div>
    <h1>Countries</h1>
    <CountryCard v-for="country in countries" :key="country.name" :country="country"/>
  </div>
</template>

<script setup lang="ts">
import {getCountries} from "@/services/api";
import CountryCard from "@/components/CountryCard";

const {data: countries, status, error, refresh, clear} = await useAsyncData(
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
