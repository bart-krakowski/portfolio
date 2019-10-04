import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 0;
  border-radius: 50%;
  border: 3px solid ${props => props.color ? ({theme}) => theme.colors[props.color] : ({theme}) => theme.colors.white};
  width: 120px;
  height: 120px;
  background-color: transparent;
`

export default (props) => (
  <Button color={props.color}>
    <svg viewBox="0 0 121 121" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M60.5 1.5c-32.585 0-59 26.415-59 59s26.415 59 59 59 59-26.415 59-59-26.415-59-59-59zm3.606 55.391l20.059-.009-.003 6.194-20.052.008.01 20.06-6.194-.003-.01-20.053-20.058.01.003-6.194 20.052-.01-.009-20.057 6.194.003.008 20.051z" fill="#B620E0" stroke="#B620E0"/>
        <path d="M41 60h40M61 40v40" stroke="#979797" strokeLinecap="square"/>
      </g>
    </svg>
  </Button>
)
