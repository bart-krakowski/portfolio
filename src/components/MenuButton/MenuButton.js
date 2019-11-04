import React from 'react'
import styled, { css } from 'styled-components'

const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({theme}) => theme.colors.white}45;
  transition: 0.3s background-color, 0.3s width, 0.3s height, 0.3s border-radius 0.4s, 0.3s top, 0.3s right, 0.6s transform;
  backdrop-filter: blur(10px);
`

const barBase = css`
  height: 2px;
  background: ${({theme}) => theme.colors.black};
  position: absolute;
  transition: 0.3s transform;
  left: calc(50% - 10px);
`

const BarTop= styled.span`
  ${barBase}
  width: 19px;
  top: calc(50% - 8px);
`

const BarMiddle= styled.span`
  ${barBase}
  width: 12px;
  top: 50%;
  transform: translateY(-50%);
`

const BarBottom = styled.span`
  ${barBase}
  width: 15px;
  top: calc(50% + 7px);
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 0;
  border: 0;
  width: 60px;
  height: 60px;
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  background-color: transparent;
  overflow: hidden;

  ${({theme}) => theme.media.tablet} {
    width: 75px;
    height: 75px;
  }

  :hover {
    ${InnerWrapper} {
      border-radius: 50%;
      width: 60px;
      height: 60px;
      right: 8px;
      top: 8px;
      transform: rotate(360deg);
      backdrop-filter: none;
      background-color: ${({theme}) => theme.colors.white}DD;
      transition: 0.3s width, 0.3s height, 0.3s border-radius, 0.3s top, 0.3s right, 1s transform;
    }

    ${BarMiddle} {
      opacity: 0;
    }

    ${BarTop} {
      transform: translateY(-50%) rotate(-90deg);
      width: 20px;
      top: 50%;
    }

    ${BarBottom} {
      width: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

  }
`

export default () => (
  <Button>
    <InnerWrapper>
      <BarTop />
      <BarMiddle />
      <BarBottom />
    </InnerWrapper>
  </Button>
)
