import styled from 'styled-components'

import { PanelButton } from '..'

export const FontColorButton = styled(PanelButton)`
  position: relative;

  &:after {
    content: '';
    width: 60%;
    border-bottom: solid 3px ${({ color }) => color};
    position: absolute;
    bottom: 3px;
    z-index: 1;
  }
`
