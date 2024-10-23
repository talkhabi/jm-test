<template>
  <div>
    <h1>Countries</h1>
    <CountryCard v-for="country in countries" :key="country.name" :country="country" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CountryCard from '@/components/CountryCard';

const countries = ref([]);

onMounted(async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags');
  countries.value = response.data;
});

definePageMeta({
  name: 'home',
  layout: 'default',
});
</script>
