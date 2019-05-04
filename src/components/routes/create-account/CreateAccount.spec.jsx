import React from 'react'
import { render, cleanup } from 'react-testing-library'
import CreateAccount from './CreateAccount'


// Unmounts any React trees that were mounted with render
afterEach(cleanup)

test('renders without crashing', () => {
  // render the component
  render(<CreateAccount />)
})
