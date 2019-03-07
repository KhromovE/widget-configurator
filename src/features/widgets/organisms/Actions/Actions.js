import React from 'react'
import styled from 'styled-components'

import { Button } from '../../../../ui/atoms'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

export const Actions = () => (
  <Wrapper>
    <Button outline type="button">
      Назад
    </Button>
    <Button type="submit">Вперед</Button>
  </Wrapper>
)
