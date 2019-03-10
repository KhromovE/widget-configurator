import styled from 'styled-components'

import { gray, blue, white } from '../../../lib/colors'

export const Tab = styled.button`
  position: relative;
  bottom: -1px;
  border: 1px solid ${({ isActive }) => (isActive ? gray.light : 'transparent')};
  border-bottom: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  color: ${({ isActive }) => (!isActive ? gray.lighter : blue.light)};
  background-color: ${({ isActive }) => (isActive ? white.medium : 'transparent')};
  margin: 0;

  &:hover {
    color: ${({ isActive }) => (!isActive ? blue.lighter : null)};
  }
`
