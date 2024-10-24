<template>
  <JmContainer>
    <DataStatusWrapper
      :error="error"
      :status="status"
      :refresh="refresh"
      :has-data="!!country"
    >
      <div class="page-header">
        <JmLinkButton to="/" icon="ic-left" label="Back" />
      </div>

      <main class="country">
        <div class="country__flag">
          <NuxtImg :src="country.flags.svg" :alt="country.name.common" />
        </div>

        <div class="country__info">
          <h1 class="country__title">{{ country.name.common }}</h1>

          <div class="country__details">
            <div class="country__details-col">
              <div class="country__detail-item">
                <b>Native Name:</b>
                <span>{{ nativeName }}</span>
              </div>

              <div class="country__detail-item">
                <b>Population:</b>
                <span>{{ formatPopulation(country.population) }}</span>
              </div>

              <div class="country__detail-item">
                <b>Region:</b>
                <span>{{ country.region }}</span>
              </div>

              <div class="country__detail-item">
                <b>Sub Region:</b>
                <span>{{ country.subregion }}</span>
              </div>

              <div class="country__detail-item">
                <b>Capital:</b>
                <span>{{ capital }}</span>
              </div>
            </div>

            <div class="country__details-col">
              <div class="country__detail-item">
                <b>Top Level Domain:</b>
                <span>{{ tld }}</span>
              </div>

              <div class="country__detail-item">
                <b>Currencies:</b>
                <span>{{ currencies }}</span>
              </div>

              <div class="country__detail-item">
                <b>Languages:</b>
                <span>{{ languages }}</span>
              </div>
            </div>
          </div>

          <div class="country__borders">
            <b>Border Countries:</b>
            <JmLinkButton
              v-for="borderCode in country.borders"
              :key="borderCode"
              size="sm"
              :label="borderCode"
              class="country__border-item"
              :to="`/country/code/${borderCode}`"
            />
          </div>
        </div>
      </main>

    </DataStatusWrapper>
  </JmContainer>
</template>

<script setup lang="ts">
import type { Country } from "@/types/country";
import { getCountryByName } from "@/services/api";
import JmContainer from "@/components/ui/JmContainer";
import JmLinkButton from "@/components/ui/JmLinkButton";
import DataStatusWrapper from "@/components/DataStatusWrapper";

const route = useRoute();

const name = route.params?.name

const { data, status, error, refresh } = await useAsyncData(
  `country-${name}`,
  () => getCountryByName(name as string)
)

const country = computed<Country>(() => data?.value?.[0] as Country);

useHead({
  title: country.value?.name?.common + ' | Journey Mentor',
});


const nativeName = computed(() => {
  const names = Object.values(country.value?.name.nativeName || {})
  return names.map(name => name.common).join(', ')
})

const currencies = computed(() => {
  const currencies = Object.values(country.value?.currencies || {})
  return currencies.map(currency => currency.name).join(', ')
})

const languages = computed(() => {
  const languages = Object.values(country.value?.languages || {})
  return languages.join(', ')
})

const tld = computed(() => country.value?.tld.join(', '))

const capital = computed(() => country.value?.capital.join(', '))

const formatPopulation = (pop: number) => new Intl.NumberFormat().format(pop)
</script>

<style lang="scss" scoped>
.page-header {
  margin-top: 32px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }
}

.country {
  display: flex;
  flex-wrap: wrap;
  gap: 9%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-flow: column;
  }

  &__flag {
    flex: 0 0 44%;

    img {
      width: 100%;
      height: auto;
      display: block;
    }

    @media (max-width: 768px) {
      max-width: 400px;
    }
  }

  &__info {
    flex: 1;
    padding-top: 40px;
  }

  &__title {
    font-size: 32px;
    margin: 0 0 28px 0;
    font-weight: bold;
  }

  &__details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__detail-item {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;

    & + & {
      margin-top: 10px;
    }
  }

  &__borders {
    margin-top: 75px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  &__borders-list {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
}
</style>
