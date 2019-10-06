import styled from 'styled-components'

const Wrapper = styled.div`
  height: 150px;
  width: 2px;
  position: fixed;
  bottom: 30px;
  right: 35px;
  background-color: ${({theme}) => theme.colors.white};
`

const ScrollBar = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors.background};
`

export { Wrapper, ScrollBar }
