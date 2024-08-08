import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
  html,
  body {
    margin: 0;
    height: 100%;
    font-family: Acme, sans-serif;
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%;
    background: rgb(38, 36, 33) url("/background.png") center top / cover;
  }

  input, button, textarea, select {
    font: inherit;
  }

  button {
    background-color: rgb(97, 78, 56);
    border-radius: 4px;
    border: 1px solid transparent;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-weight: 700;
    margin: 4px;
    min-height: 36px;
    min-width: 36px;
    padding: 8px;

    &:disabled {
      background-color: rgba(97, 78, 56, 0.3);
      color: rgba(255, 255, 255, 0.3);
      pointer-events: none;
    }
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
