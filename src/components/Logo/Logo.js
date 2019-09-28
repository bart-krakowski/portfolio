import React from 'react'
import { Link } from "gatsby"
import styled, { keyframes } from 'styled-components'

const entrance = keyframes`
  to {
    margin-top: 0;
  }
`

const printLogo = keyframes`
  from {
    stroke-dashoffset: 4000;
  }

  to {
    stroke-dashoffset: 0;
  }
`

const Container = styled.a`
  background-color: ${({theme}) => theme.colors.primary};
  position: fixed;
  z-index: 15;
  top: 0;
  left: 60px;
  padding: 5px 15px;
  margin-top: -100%;
  animation-name: ${entrance};
  animation-duration: 1s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;

  ::after {
    content: "";
    position: absolute;
    height: 0;
    border: 42.4px solid ${({theme}) => theme.colors.primary};
    border-bottom-color: transparent;
    bottom: -42px;
    transition: height 0.5s;
    right: 0;
    z-index: -1;
  }
`

const LogoImg = styled.svg`
  margin-left: 5px;
  stroke: ${({theme}) => theme.colors.white};
  height: 100px;
  width: 100%;
  max-width: 50px;

  path {
    fill: none;
    stroke-width: 35;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-opacity: 1;
    stroke: ${({theme}) => theme.colors.white};
    stroke-miterlimit: 10;
    stroke-linejoin: miter;
    stroke-dasharray: 4600;
    stroke-dashoffset: 0;
    animation: ${printLogo} 4s linear forwards;
    animation-delay: 1s;
  }
`

export default () => (
  <Container as={Link} to="/">
    <LogoImg viewBox="0 0 1076.899 1866.028">
      <path d="M633.314 791.43l1.482-760.204 113.06 69.336 3.663 637.728 307.805 283.188.073 411.466-425.723 389.352 1.468-920.785M626.306 1846.841l-109.985-84.576-.296-544.51-282.123 573.628-136.117 53.944-76.863-83.578 379.733-848.08L22.527 386.699l74.99-81.39 130.142-8.286L517.99 695.79l-1.67-574.184L629.566 12.61"></path>
      <path d="M97.518 305.307l430.945 610.781-433.197 931.585M627.45 778.56l326.953 308.484.141 305.518L730.93 1573.96l-.094-569.494-90.862-90.324"></path>
      <path d="M730.835 1004.465l108.091 101.674-1.292 259.982-106.705 82.995M838.484 1367.818l114.512 24.603M1059.426 1030.726l-105.023 56.318"></path>
    </LogoImg>
  </Container>
)
