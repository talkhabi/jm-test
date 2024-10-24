import axios from 'axios'
import type { Country } from "@/types/country";

const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
})

export const getCountries = async (): Promise<Country[]>  => {
  const { data } = await api.get('/all', {
    params: {
      fields: 'name,population,region,capital,flags'
    }
  })
  return data
}

export const getCountryByName = async (name: string): Promise<Country[]>  => {
  const { data } = await api.get(`/name/${name}`)
  return data
}

export const getCountryByCode = async (code: string): Promise<Country[]>  => {
  const { data } = await api.get(`/alpha/${code}`)
  return data
}
