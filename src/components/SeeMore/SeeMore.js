import React from 'react'
import styled from 'styled-components'

const Background = styled.path`
  fill: transparent;
  stroke: ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
  transition: 0.3s fill;
`

const Plus = styled.path`
  fill: transparent;
  stroke-width: 3;
  stroke: ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
  transition: 0.3s stroke;
`

const Button = styled.button`
  padding: 0;
  border: 0;
  width: 120px;
  height: 120px;
  background-color: transparent;
  outline: none;
  transition: 0.3s transform;

  :hover {
    transform: rotate(360deg);

    ${Background} {
      fill: ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
    }

    ${Plus} {
      stroke: transparent;
    }
  }
`

export default ({color}) => (
  <Button color={color}>
    <svg viewBox="0 0 121 121" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <Background color={color} d="M60.5 1.5c-32.585 0-59 26.415-59 59s26.415 59 59 59 59-26.415 59-59-26.415-59-59-59zm3.606 55.391l20.059-.009-.003 6.194-20.052.008.01 20.06-6.194-.003-.01-20.053-20.058.01.003-6.194 20.052-.01-.009-20.057 6.194.003.008 20.051z"/>
        <Plus color={color} d="M41 60h40M61 40v40" stroke="#979797" strokeLinecap="square"/>
      </g>
    </svg>
  </Button>
)
