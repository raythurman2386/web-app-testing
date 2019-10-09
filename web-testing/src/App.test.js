import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

afterEach(rtl.cleanup)

it('renders "all about kittens" text', () => {
  const wrapper = rtl.render(<App />)
  console.log(wrapper.debug())

  // query
  // const hasKittensText = wrapper.getByText(/all about kittens/i)
  // assertions will be here
  expect(wrapper.getByText(/all about kittens/i))
})
