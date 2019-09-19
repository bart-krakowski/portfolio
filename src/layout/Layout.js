import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: ${({theme}) => theme.colors.background}
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const Layout = ({children}) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle/>
      {children}
    </>
  </ThemeProvider>
)

export default Layout
