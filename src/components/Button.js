import React from "react"
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 30px 75px;
  background-color: transparent;
  border: 2px solid ${({theme}) => theme.colors.secondary};
  font-size: 18px;
  color: ${({theme}) => theme.colors.secondary};
  letter-spacing: 1.35px;
  text-transform: uppercase;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.typefaces.normal};
`

const Button = ({text}) => (
  <StyledButton>
    {text}
  </StyledButton>
)

export default Button
