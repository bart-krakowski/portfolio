import React, { useRef } from 'react'
import { Link } from "gatsby"
import { Wrapper } from './NextProject.styled'
import { Headline } from '../../components/Headline/Headline'
import observe from './observer'

export default () => {
  const headlineRef = useRef(null)
  const isVisible = observe(headlineRef)

  let elements = (
    <Wrapper>
      <Headline
        variant={'FillH1'}
        as={Link}
        isExpanded={isVisible}
        ref={headlineRef}
        >
        Next project
      </Headline>
    </Wrapper>
  )

  return elements
}
