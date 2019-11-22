import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

const Stack = styled.span`
  position: absolute;
  top: -4em;
  z-index: ${({bellow}) => bellow ? '-1' : '2'};
  pointer-events: ${({bellow}) => bellow ? 'auto' : 'none'};
`

const ButtonWrapper = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(calc(50% - 2px),calc(50% - 4px));
  cursor: pointer;
`

export { Wrapper, Stack, ButtonWrapper }
