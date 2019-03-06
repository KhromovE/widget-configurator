import React, { Fragment } from 'react'

import { GlobalStyle } from './global-styles'
import { Main } from './ui/templates'
import { Configuration } from './features/widgets'

export const App = () => {
  return (
    <Fragment>
      <Main>
        <Configuration />
      </Main>
      <GlobalStyle />
    </Fragment>
  )
}
