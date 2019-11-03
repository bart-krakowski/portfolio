import React, { useRef, createRef } from 'react'
import PropTypes from 'prop-types'
import { colors as colorsPallete } from '../../settings/colors'
import useContainerHeight from './useContainerHeight'
import useParallax from './useParallax'
import styled from 'styled-components'
import { ShapesArray } from './Shapes'

const options = {
  columns: 5,
  rootMargin: 250
}

const parallaxedElements = []

const createShapeWrapper = () => {
  let generatedStyles = ``

  for (let i = 1; i <= options.columns; i++ ) {
    if (i % 2 === 0) {
      generatedStyles += `
      :nth-child(5n + ${i}) {
        grid-column: ${i};
        align-self: center;
      }
    `
    } else {
      generatedStyles += `
        :nth-child(5n + ${i}) {
          grid-column: ${i};
        }
      `
    }
  }

  return generatedStyles
}

const createShapes = (quantity, color, WrapperRef) => {
  let shapes = []
  let prevShapeIndex = getRandomNumber(0, 2, true)
  let prevColorIndex = getRandomNumber(0, 7, true)

  if ( color ) {
    for (let i = 0; i < quantity; i++) {
      let generatedIndex = getRandomNumber(0, 2, true)

      while (generatedIndex === prevShapeIndex) {
        generatedIndex = getRandomNumber(0, 2, true)
      }
      prevShapeIndex = generatedIndex

      const Shape = ShapesArray[generatedIndex]
      shapes.push(
        <Shape key={`shape-${i}`} color={color} />
      )

      if (WrapperRef.current) {
        parallaxedElements.push(WrapperRef.current)
      }
    }
    return shapes
  } else {
    for (let i = 0; i < quantity; i++) {
      let generatedShapeIndex = getRandomNumber(0, 2, true)
      let generatedColorIndex = getRandomNumber(0, 7, true)

      while (generatedShapeIndex === prevShapeIndex) {
        generatedShapeIndex = getRandomNumber(0, 2, true)
      }

      prevShapeIndex = generatedShapeIndex

      while (generatedColorIndex === prevColorIndex) {
        generatedColorIndex = getRandomNumber(0, 2, true)
      }

      prevColorIndex = generatedColorIndex
      const randomColor = colorsPallete.shapes[generatedColorIndex]
      const Shape = ShapesArray[generatedShapeIndex]

      shapes.push(
        <Shape key={`shape-${i}`} color={randomColor} />
      )

      if (WrapperRef.current) {
        parallaxedElements.push(WrapperRef.current)
      }
    }

    return shapes
  }
}

const getRandomNumber = (min, max, fixed) => {
  const result = fixed ? (Math.random() * (max - min) + min).toFixed() : (Math.random() * (max - min) + min)

  return result
}


const ShapesContainer = styled.div`
  top: calc(100vh + ${options.rootMargin}px);
  width: 100%;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(${options.columns}, auto);
  z-index: -1;
  justify-items: center;
`

export default function RandomShapes({
  quantity,
  color
}) {
  const shapesPerColumn = quantity / options.columns
  const floorShapedPerColumn = Math.floor(shapesPerColumn)
  const WrapperRef = useRef(null)

  const StyledShapesContainer= styled(ShapesContainer)`
    height: ${useContainerHeight() - options.rootMargin}px;
    grid-template-rows: repeat(${floorShapedPerColumn}, auto);
  `

  const Wrapper = styled.div`
    width: 30px;
    height: 35px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    ${createShapeWrapper()}
  `

  const elementsRef = useRef(createShapes(quantity, color, WrapperRef).map(() => createRef()));

  let dynamicElements = (
    createShapes(quantity, color, WrapperRef).map((item, index) =>
      <Wrapper ref={elementsRef.current[index]} index={index} scrollSpeed={getRandomNumber(0.1, 1, false)} key={`shape-wrapper-${index}`}>
        {item}
      </Wrapper>
    )
  )

  let elements = (
    <StyledShapesContainer>
      {
        dynamicElements
      }
    }
    </StyledShapesContainer>
  )

  useParallax(elementsRef.current, dynamicElements)
  return elements
}

RandomShapes.propTypes = {
  quantity: PropTypes.number.isRequired,
  color: PropTypes.string,
  random: PropTypes.bool
}
