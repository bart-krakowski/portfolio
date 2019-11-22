import styled, { css } from 'styled-components'

const base = css`
  position: absolute;
  font-family: ${({theme}) => theme.fonts.typefaces.normal};
  -webkit-text-stroke: 1px ${({theme}) => theme.colors.white};
  font-size: 142px;
  line-height: 1;
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

export { NumberWrapper, NumberTop, NumberBottom }
