import * as React from 'react'
import styled, { css } from 'styled-components'

const base = css`
  position: absolute;
  font-family: ${({theme}) => theme.fonts.typefaces.normal};
  -webkit-text-stroke: 1px #ffffff;
  font-size: 72px;
`

const NumberWrapper = styled.div`
  position: relative;
`

const NumberTop = styled.span`
  ${base}
  color: transparent;
`

const NumberBottom = styled.span`
  ${base}
  color: ${({theme}) => theme.colors.white};
  opacity: 0.5;
  z-index: -1;
`

export default (children) => {
  return (
    <NumberWrapper>
      <NumberTop aria-hidden="true">{children.children}</NumberTop>
      <NumberBottom aria-hidden="true">{children.children}</NumberBottom>
    </NumberWrapper>
  )
}
