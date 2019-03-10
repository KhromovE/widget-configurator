import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { gray } from '../../../../lib/colors'
import { Button } from '../../../../ui/atoms'
import { EmailField } from '../../molecules'

const fontStyles = css`
  font-size: ${({ size }) => `${size}px`};
  font-family: ${({ fontFamily }) => fontFamily}
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  color: ${({ color }) => color};
`

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
  text-align: center;
`

const Message = styled.span`
  display: block;
  margin-top: 50px;
`

const Header = styled.h2`
  margin-top: 0px;
  word-break: break-word;
  ${fontStyles}
`

const StyledButton = styled(Button)`
  margin-top: 100px;
  ${fontStyles}
  background-color: ${({ backgroundColor }) => backgroundColor}
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${fontStyles}
`

const SampleView = ({
  header,
  headerFont,
  headerBold,
  headerItalic,
  headerSize,
  headerColor,
  backgroundColor,
  mainFont,
  mainBold,
  mainItalic,
  mainSize,
  mainColor,
  buttonFont,
  buttonBold,
  buttonItalic,
  buttonSize,
  buttonColor,
  buttonBackgroundColor,
}) => (
  <Wrapper backgroundColor={backgroundColor} mainSize={mainSize} mainColor={mainColor}>
    <Header size={headerSize} bold={headerBold} italic={headerItalic} color={headerColor} fontFamily={headerFont}>
      {header}
    </Header>
    <MainWrapper bold={mainBold} italic={mainItalic} fontFamily={mainFont}>
      <EmailField
        mainSize={mainSize}
        mainColor={mainColor}
        mainBold={mainBold}
        mainItalic={mainItalic}
        mainFont={mainFont}
      />
      <Message>Процесс займет у вас не больше 10 минут</Message>
    </MainWrapper>
    <StyledButton
      type="button"
      fontSize={buttonSize}
      bold={buttonBold}
      italic={buttonItalic}
      fontFamily={buttonFont}
      color={buttonColor}
      backgroundColor={buttonBackgroundColor}
    >
      Далее
    </StyledButton>
  </Wrapper>
)

SampleView.propTypes = {
  header: PropTypes.string.isRequired,
  headerFont: PropTypes.string.isRequired,
  headerBold: PropTypes.bool.isRequired,
  headerItalic: PropTypes.bool.isRequired,
  headerSize: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  mainFont: PropTypes.string.isRequired,
  mainBold: PropTypes.bool.isRequired,
  mainItalic: PropTypes.bool.isRequired,
  mainSize: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
  buttonFont: PropTypes.string.isRequired,
  buttonSize: PropTypes.string.isRequired,
  buttonBold: PropTypes.bool.isRequired,
  buttonItalic: PropTypes.bool.isRequired,
  buttonColor: PropTypes.string.isRequired,
  buttonBackgroundColor: PropTypes.string.isRequired,
}

export const Sample = memo(SampleView)
