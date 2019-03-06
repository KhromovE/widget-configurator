import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { blue } from '../../../lib/colors'
import { PageContainer } from '..'

const SideBar = styled.aside`
  width: 216px;
  background-color: ${blue.medium};
`

const Wrapper = styled.main`
  display: flex;
  min-height: 100%;
`

export const MainView = ({ children }) => (
  <Wrapper>
    <SideBar />
    <PageContainer>{children}</PageContainer>
  </Wrapper>
)

MainView.propTypes = {
  children: PropTypes.node.isRequired,
}

export const Main = memo(MainView)
