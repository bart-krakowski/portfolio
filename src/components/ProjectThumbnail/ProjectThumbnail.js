import React,  { useRef, useEffect } from 'react'
import { Headline } from '../Headline/Headline'
import Number from '../Number/Number'
import SeeMore from '../SeeMore/SeeMore'
import { Wrapper, Stack, ButtonWrapper } from './ProjectThumbnail.styled'
import Tilt, { setDefault } from './Tilt'

export default () => {
  const ThumbnailRef = useRef(null)

  useEffect(() => {
    setDefault(ThumbnailRef)
  }, [ThumbnailRef])

  let elements = (
    <Wrapper>
      <Stack bellow>
        <Headline
          variant='FillH1'
          as='h2'
        >
          First project
        </Headline>
      </Stack>
      <Stack>
        <Headline
          variant='StrokeH1'
          as='h2'
        >
          First project
        </Headline>
      </Stack>
      <img
        onMouseMove={(e) => Tilt(ThumbnailRef, e)}
        onMouseLeave={(e) => setDefault(ThumbnailRef)}
        src='https://via.placeholder.com/865x526'
        ref={ThumbnailRef} />
      <ButtonWrapper href="#">
        <SeeMore color="primary"/>
      </ButtonWrapper>
      <Number>4</Number>
    </Wrapper>
  )

  return elements
}
