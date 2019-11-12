import React, { useRef } from 'react'
import useScrollingHandler from './useScrollingHandler'
import useScrollBar from './useScrollBar'
import styled from 'styled-components'
import { Wrapper, ScrollBar } from './ScrollIndicator.styled'

export default () => {
  const scrollBar = useRef(null)
  const scrollBarWrapper = useRef(null)
  useScrollingHandler(scrollBar, scrollBarWrapper)

  const StyledScrollBar = styled(ScrollBar)`
    height: ${useScrollBar()}
  `

  let elements = (
    <Wrapper ref={scrollBarWrapper}>
      <StyledScrollBar ref={scrollBar} />
    </Wrapper>
  )

  return elements
}
