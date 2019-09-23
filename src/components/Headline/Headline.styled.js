import styled, { css } from 'styled-components'

const base = css`
  margin: 0;
  font-family: ${({theme}) => theme.fonts.typefaces.normal};
`

const variants = {
  StrokeH1: styled.h1`
    ${base};
    font-size: 72px;
    line-height: 0.9;
    -webkit-text-stroke: 1px ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
    color: transparent;
  `,
  StrokeH2: styled.h2`
    ${base};
    font-size: 52px;
    line-height: 1.83;
    -webkit-text-stroke: 1px ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
    color: transparent;
  `,
  FillH1: styled.h1`
    ${base};
    font-size: 72px;
    position: relative;
    line-height: 0.9;
    color: ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
  `,
  FillH2: styled.h2`
    ${base};
    font-size: 52px;
    line-height: 1.83;
    position: relative;
    color: ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
  `
}

const H1Strokes = {
  Top: styled.span`
    -webkit-text-stroke: 1px ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
    color: transparent;
    position: absolute;
    bottom: -20px;
    height: 32%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 0.5;
  `,

  Bottom: styled.span`
    -webkit-text-stroke: 1px ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
    color: transparent;
    position: absolute;
    bottom: -40px;
    height: 32%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 0.25;
  `
}

const H2Strokes = {
  Top: styled.span`
    -webkit-text-stroke: 1px ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
    color: transparent;
    position: absolute;
    bottom: -20px;
    height: 45%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 0.5;
`,

Bottom: styled.span`
  -webkit-text-stroke: 1px ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
  color: transparent;
  position: absolute;
  bottom: -40px;
  height: 45%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0.25;
`
}

export { variants, H1Strokes, H2Strokes }