import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import App from './App'
import Dashboard from './components/Dashboard'
import Display from './components/Display'

afterEach(rtl.cleanup)

describe('My Test Suite', () => {
  it('Renders the App component', () => {
    const wrapper = rtl.render(<App />)
    // assertions will be here
    expect(wrapper.findByText(/at bat/i))
  })

  it('Checks how many buttons there are', () => {
    const wrapper = rtl.render(<Dashboard />)
    const checkButtons = wrapper.getAllByRole('button')

    // assertion
    expect(checkButtons.length).toBe(4)
  })

  it('should snapshot renders', () => {
    const component = renderer.create(<Display ball={0} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
