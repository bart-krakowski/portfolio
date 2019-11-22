import React from 'react'
import styled from 'styled-components'

const Background = styled.path`
  fill: transparent;
  stroke: ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
  transition: 0.3s fill;
`

const Plus = styled.path`
  fill: ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};;
  stroke-width: 0;
  stroke: ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
  transition: 0.3s stroke, 0.3s fill;
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
    transform: rotate(270deg);

    ${Background} {
      fill: ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
    }

    ${Plus} {
      stroke: transparent;
      fill: transparent;
    }
  }
`

export default ({color}) => (
  <Button color={color}>
    <svg viewBox="0 0 121 121" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <Background color={color} d="M60.5 1C93.361 1 120 27.639 120 60.5c0 32.861-26.639 59.5-59.5 59.5C27.639 120 1 93.361 1 60.5 1 27.639 27.639 1 60.5 1zm1.68 40h-3.244v17.829H41v3.125l17.936.008v18.999h3.246V61.962l18.815-.008v-3.125H62.192L62.18 41z"/>
        <Plus color={color} d="M81 58.846v3.129l-18.816.008V81h-3.247V61.983L41 61.975v-3.129h17.937V41h3.244l.013 17.846z" stroke="#979797" strokeLinecap="square"/>
      </g>
    </svg>
  </Button>
)
