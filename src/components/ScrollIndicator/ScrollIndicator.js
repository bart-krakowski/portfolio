import React, { useRef } from "react"
import useScrollingHandler from './scrollingHandler'
import useScrollBar from "./useScrollBar"
import styled from 'styled-components'

export default function ScrollIndicator() {
  const scrollBar = useRef(null)
  const scrollBarWrapper = useRef(null)
  useScrollingHandler(scrollBar, scrollBarWrapper)

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
    height: ${useScrollBar()}
  `

  let elements = (
    <Wrapper ref={scrollBarWrapper}>
      <ScrollBar ref={scrollBar}/>
    </Wrapper>
  )

  return elements
}
