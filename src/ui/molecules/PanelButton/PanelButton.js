import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'

import { gray } from '../../../lib/colors'

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 24px;
  width: 24px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  border-radius: 2px;
  background-color: ${({ checked }) => checked && lighten(0.09, gray.lighter)};

  &:hover {
    background-color: ${({ checked }) => !checked && lighten(0.15, gray.lighter)};
  }
`

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

const Icon = styled.img`
  height: 20px;
  width: 20px;
`

export const PanelButton = forwardRef(({ id, iconSrc, checked, onChange, className }, ref) => (
  <Label ref={ref} htmlFor={id} checked={checked} className={className}>
    <Input type="checkbox" id={id} checked={checked} onChange={onChange} />
    <Icon src={iconSrc} />
  </Label>
))

PanelButton.propTypes = {
  id: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
}

PanelButton.defaultProps = {
  className: null,
}
