import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: Arial, sans-serif;
    margin: 0;
    font-size: 16px;
  }
  
  body, #root {
    height: 100vh;
  }

  /* reset default styles */
  input, button, select {
    outline: none;
    border: 0;
  }
`
