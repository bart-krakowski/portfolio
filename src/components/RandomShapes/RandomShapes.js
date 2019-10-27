import React from 'react'
import PropTypes from 'prop-types'
import { colors as colorsPallete } from '../../settings/colors'
import useContainerHeight from './useContainerHeight'
import styled from 'styled-components'
import { ShapesArray } from './Shapes'

const options = {
  columns: 5,
  rootMargin: 250
}

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

const createShapes = (quantity, color) => {
  let shapes = []
  let prevShapeIndex = getRandomNumber(0, 2)
  let prevColorIndex = getRandomNumber(0, 7)

  const Wrapper = styled.div`
    width: 30px;

    ${createShapeWrapper()}
  `

  if ( color ) {
    for (let i = 0; i < quantity; i++) {
      let generatedIndex = getRandomNumber(0, 2)

      while (generatedIndex === prevShapeIndex) {
        generatedIndex = getRandomNumber(0, 2)
      }
      prevShapeIndex = generatedIndex

      const Shape = ShapesArray[generatedIndex]
      shapes.push(
      <Wrapper key={`shape-wrapper-${i}`}>
        <Shape key={`shape-${i}`} color={color} />
      </Wrapper>)
    }
    return shapes
  } else {
    for (let i = 0; i < quantity; i++) {
      let generatedShapeIndex = getRandomNumber(0, 2)
      let generatedColorIndex = getRandomNumber(0, 7)

      while (generatedShapeIndex === prevShapeIndex) {
        generatedShapeIndex = getRandomNumber(0, 2)
      }

      prevShapeIndex = generatedShapeIndex

      while (generatedColorIndex === prevColorIndex) {
        generatedColorIndex = getRandomNumber(0, 2)
      }

      prevColorIndex = generatedColorIndex
      const randomColor = colorsPallete.shapes[generatedColorIndex]
      const Shape = ShapesArray[generatedShapeIndex]

      shapes.push(
      <Wrapper key={`shape-wrapper-${i}`}>
        <Shape key={`shape-${i}`} color={randomColor} />
      </Wrapper>)
    }

    return shapes
  }
}

const getRandomNumber = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed()
}


const ShapesContainer = styled.div`
  top: calc(100vh + ${options.rootMargin}px);
  width: 100%;
  position: absolute;
  z-index: -1;
  display: grid;
  grid-template-columns: repeat(${options.columns}, auto);
`

export default function RandomShapes({
  quantity,
  color
}) {
  const shapesPerColumn = quantity / options.columns
  const floorShapedPerColumn = Math.floor(shapesPerColumn)

  const StyledShapesContainer= styled(ShapesContainer)`
    height: ${useContainerHeight() - options.rootMargin}px;
    grid-template-rows: repeat(${floorShapedPerColumn}, auto);
  `

  let elements = (
    <StyledShapesContainer>
      {createShapes(quantity, color)}
    </StyledShapesContainer>
  )

  return elements
}

RandomShapes.propTypes = {
  quantity: PropTypes.number.isRequired,
  color: PropTypes.string,
  random: PropTypes.bool
}
