import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Text = styled.text`
  animation: ${rotate} 25s linear infinite;
  transform-origin: center;
  font-size: 70px;
	font-family: ${({theme}) => theme.fonts.typefaces.heading};
	font-weight: 900; 
	text-transform: uppercase;
	letter-spacing: 0;
	fill: white;
  margin-right: 10px;
`

export const CircleHeadline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
    <defs>
      <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
      </path>
    </defs>
    <Text dy="10">
      <textPath xlinkHref="#textcircle">Front-end web developer</textPath>
    </Text>
  </svg>
)
