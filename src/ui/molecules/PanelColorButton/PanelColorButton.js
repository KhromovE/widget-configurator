import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const Button = styled.button`
  height: 18px;
  width: 18px;
  background-color: ${({ color }) => color};
  cursor: pointer;
`

export const PanelColorButton = ({ color, onClick }) => (
  <Wrapper>
    <Button type="button" color={color} onClick={onClick} />
  </Wrapper>
)

PanelColorButton.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
