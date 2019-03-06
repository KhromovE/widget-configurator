import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { gray } from '../../../../lib/colors'
import { Button } from '../../../../ui/atoms'
import { EmailField } from '../../molecules'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${gray.light};
  padding-top: 100px;
  padding-bottom: 95px;
  color: ${({ mainColor }) => mainColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${({ mainSize }) => `${mainSize}px`};
`

const Message = styled.span`
  margin-top: 50px;
`

const Header = styled.h2`
  margin-top: 0px;
  font-size: ${({ headerSize }) => `${headerSize}px`};
  word-break: break-word;
  color: ${({ headerColor }) => headerColor};
  font-weight: ${({ headerBold }) => (headerBold ? 'bold' : 'normal')};
  font-style: ${({ headerItalic }) => (headerItalic ? 'italic' : 'normal')};
`

const ButtonWrapper = styled.div`
  margin-top: 100px;
`

export const Sample = ({
  header,
  headerBold,
  headerItalic,
  headerSize,
  headerColor,
  backgroundColor,
  mainSize,
  mainColor,
  buttonSize,
}) => (
  <Wrapper backgroundColor={backgroundColor} mainSize={mainSize} mainColor={mainColor}>
    <Header headerSize={headerSize} headerBold={headerBold} headerItalic={headerItalic} headerColor={headerColor}>
      {header}
    </Header>
    <EmailField mainSize={mainSize} mainColor={mainColor} />
    <Message>Процесс займет у вас не больше 10 минут</Message>
    <ButtonWrapper>
      <Button type="button" fontSize={buttonSize}>
        Далее
      </Button>
    </ButtonWrapper>
  </Wrapper>
)

Sample.propTypes = {
  header: PropTypes.string.isRequired,
  headerBold: PropTypes.bool.isRequired,
  headerItalic: PropTypes.bool.isRequired,
  headerSize: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  mainSize: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
  buttonSize: PropTypes.string.isRequired,
}
