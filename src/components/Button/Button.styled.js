import styled from 'styled-components'

export default styled.button`
  padding: 20px 35px;
  background-color: transparent;
  border: 2px solid ${({theme}) => theme.colors.secondary};
  font-size: 18px;
  color: ${({theme}) => theme.colors.secondary};
  letter-spacing: 1.35px;
  text-transform: uppercase;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.typefaces.normal};
  margin: auto;
  cursor: pointer;
  outline: 0;

  ${({theme}) => theme.media.tablet} {
    padding: 30px 75px;
  }
`
