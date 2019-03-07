import styled from 'styled-components'
import { darken } from 'polished'
import PropTypes from 'prop-types'

import { white, gray } from '../../../lib/colors'

export const Button = styled.button`
  border: ${({ outline, backgroundColor }) => outline && `1px solid ${backgroundColor}`};
  background-color: ${({ outline, backgroundColor }) => (!outline ? backgroundColor : 'transparent')};
  padding: 0.9em 2.8em;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ outline, backgroundColor }) => (outline ? backgroundColor : white.medium)};
  font-size: ${({ fontSize }) => `${fontSize}px`}

  &:hover {
    background-color: ${({ outline, backgroundColor }) => (outline ? backgroundColor : darken(0.1, backgroundColor))};
    color: ${({ outline }) => outline && white.medium};
  }
`

Button.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  outline: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
}

Button.defaultProps = {
  outline: false,
  backgroundColor: '#648AD1',
  color: gray.medium,
  fontSize: '14',
}
