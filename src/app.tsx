import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;

  h1,
  h2 {
    color: white;
  }
`

const Actions = styled.div`
  display: flex;
`

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <Container>
      <h2 role="heading">Hello there 👋</h2>
      <h2 role="status">{count}</h2>
      <Actions>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          +
        </button>
        <button type="button" onClick={() => setCount((prev) => prev - 1)}>
          -
        </button>
      </Actions>
    </Container>
  )
}

export default App
