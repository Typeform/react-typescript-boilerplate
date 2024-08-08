import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { expect, test, afterEach } from 'vitest'

import App from './app'

// Vitest API Reference: https://vitest.dev/api/
// Testing Library Events: https://testing-library.com/docs/dom-testing-library/api-events
// Testing Library Queries: https://testing-library.com/docs/queries/about

afterEach(cleanup)

test('renders app component', () => {
  render(<App />)

  expect(screen.getByTestId('title').textContent).toEqual('Hello there 👋')
})

test('increments and decrements counter', () => {
  render(<App />)

  expect(screen.getByTestId('count').textContent).toEqual('0')

  fireEvent.click(screen.getByTestId('inc'))
  expect(screen.getByTestId('count').textContent).toEqual('1')

  fireEvent.click(screen.getByTestId('dec'))
  expect(screen.getByTestId('count').textContent).toEqual('0')
})
