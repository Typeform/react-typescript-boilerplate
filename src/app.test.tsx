import { render, screen, cleanup } from '@testing-library/react'
import { expect, test, afterEach } from 'vitest'
import userEvent from '@testing-library/user-event'

import App from './app'

// Vitest API Reference: https://vitest.dev/api/
// Testing Library User Events: https://testing-library.com/docs/user-event/intro/
// Testing Library Queries: https://testing-library.com/docs/queries/about

afterEach(cleanup)

test('renders app component', () => {
  render(<App />)

  expect(screen.getByRole('heading')).toBeInTheDocument()
  expect(screen.getByRole('heading').textContent).toEqual('Hello there 👋')
})

test('increments and decrements counter', async () => {
  const user = userEvent.setup()
  render(<App />)

  expect(screen.getByRole('status')).toBeInTheDocument()
  expect(screen.getByRole('status').textContent).toEqual('0')

  expect(screen.getByRole('button', { name: '+' })).toBeEnabled()
  await user.click(screen.getByRole('button', { name: '+' }))
  expect(screen.getByRole('status').getAttribute('disabled'))

  expect(screen.getByRole('button', { name: '-' })).toBeEnabled()
  await user.click(screen.getByRole('button', { name: '-' }))
  expect(screen.getByRole('status').textContent).toEqual('0')
})
