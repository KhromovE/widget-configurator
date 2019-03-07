import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { gray } from '../../../lib/colors'

const Wrapper = styled.div`
  display: flex;
`

const ChildWrapper = styled.div`
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid ${gray.light};

  &:last-child {
    border-right: none;
  }
`

export const Panel = ({ children }) => (
  <Wrapper>
    {React.Children.map(children, child => (
      <ChildWrapper>{child}</ChildWrapper>
    ))}
  </Wrapper>
)

Panel.propTypes = {
  children: PropTypes.node.isRequired,
}
