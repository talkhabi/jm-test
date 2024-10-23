<template>
  <div>
    <h1>{{ country?.name?.common }}</h1>
    <p>Capital: {{ country?.capital?.[0] }}</p>
    <p>Population: {{ country?.population }}</p>
    <p>Region: {{ country?.region }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const route = useRoute();
const country = ref({});

onMounted(async () => {
  const name = route.params.name
  const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  country.value = response.data[0];
});
</script>
