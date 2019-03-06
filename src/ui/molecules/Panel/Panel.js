import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

export const Panel = ({ children }) => <Wrapper>{children}</Wrapper>

Panel.propTypes = {
  children: PropTypes.node.isRequired,
}
