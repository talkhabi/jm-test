import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CountryCard from '../../components/CountryCard/index.vue'

describe('CountryCard', () => {
  const mockCountry = {
    name: { common: 'Test Country' },
    population: 1000000,
    region: 'Test Region',
    capital: ['Test Capital'],
    flags: { svg: 'test-flag.svg' }
  }

  it('renders country information correctly', () => {
    const wrapper = mount(CountryCard, {
      props: { country: mockCountry }
    })

    expect(wrapper.text()).toContain('Test Country')
    expect(wrapper.text()).toContain('1,000,000')
    expect(wrapper.text()).toContain('Test Region')
    expect(wrapper.text()).toContain('Test Capital')
  })

  it('formats population number correctly', () => {
    const wrapper = mount(CountryCard, {
      props: { country: mockCountry }
    })

    expect(wrapper.text()).toContain('1,000,000')
  })
})
