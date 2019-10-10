import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import App from './App'
import Dashboard from './components/Dashboard'
import Display from './components/Display'

afterEach(rtl.cleanup)

describe('My Test Suite', () => {
  it('Searches for at bat text', () => {
    const wrapper = rtl.render(<App />)

    const atBatText = wrapper.getByText(/at bat/i)
    // assertions will be here
    expect(atBatText).toBeInTheDocument()
  })

  it('Checks how many buttons there are', () => {
    const wrapper = rtl.render(<Dashboard />)
    const checkButtons = wrapper.getAllByRole('button')

    // assertion
    expect(checkButtons.length).toBe(4)
  })

  it('should snapshot ball renders', () => {
    const component = renderer.create(<Display ball={0} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should snapshot strike renders', () => {
    const component = renderer.create(<Display strike={0} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
