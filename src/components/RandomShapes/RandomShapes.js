import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { colors as colorsPallete } from '../../settings/colors'
import styled from 'styled-components'
import { ShapesArray } from './Shapes'

const options = {
  columns: 5,
  rootMargin: 250,
  bottomMargin: 50
}

const createShapeWrapper = (quantity, documentHeight, windowHeight) => {
  let generatedStyles = ``
  let multiplier = 0
  const viewPortWidth = window.innerWidth
  const columnWidth = viewPortWidth / (options.columns + 1)
  const shapesPerColumn = quantity / options.columns
  const floorShapedPerColumn = Math.floor(shapesPerColumn)
  const ceilShapedPerColumn = Math.ceil(shapesPerColumn)

  const rowHeight = (documentHeight - options.rootMargin - windowHeight - options.bottomMargin) / (ceilShapedPerColumn - 1)

  for (let i = 1; i <= options.columns; i++) {
    if (i % 2 === 0) {

      for(let j = 1; j <= floorShapedPerColumn; j++) {
        generatedStyles += `
          :nth-child(${j + multiplier}) {
            top: ${(rowHeight / 2)  + (rowHeight * (j - 1))}px;
            left: ${(columnWidth * i) - 22}px
          }
        `
      }
      multiplier += floorShapedPerColumn

    } else {


      for(let j = 1; j <= ceilShapedPerColumn; j++) {
        generatedStyles += `
          :nth-child(${j + multiplier}) {
            top: ${rowHeight * (j - 1)}px;
            left: ${(columnWidth * i) - 22}px
          }
        `
      }
      multiplier += ceilShapedPerColumn
    }
  }

  return generatedStyles
}

const createShapes = (quantity, color, documentHeight, windowHeight) => {
  let shapes = []
  let prevShapeIndex = getRandomNumber(0, 2)
  let prevColorIndex = getRandomNumber(0, 7)

  const StyledWrapper = styled.div`
    width: 30px;
    position: absolute;

    ${createShapeWrapper(quantity, documentHeight, windowHeight)}
  `

  const ShapesContainer = styled.div`
    top: calc(100vh + ${options.rootMargin}px);
    width: 100%;
    height: calc(${documentHeight - options.rootMargin - windowHeight}px);
    position: absolute;
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
      <StyledWrapper key={`shape-wrapper-${i}`}>
        <Shape key={`shape-${i}`} color={color} />
      </StyledWrapper>)
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
      <StyledWrapper key={`shape-wrapper-${i}`}>
        <Shape key={`shape-${i}`} color={randomColor} />
      </StyledWrapper>)
    }

    return <ShapesContainer>{shapes}</ShapesContainer>
  }
}

const getRandomNumber = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed()
}

export const RandomShapes = ({
  quantity,
  color
}) => {
  const [documentHeight, setDocumentHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setDocumentHeight(document.documentElement.scrollHeight)
    setWindowHeight(window.innerHeight)
  })

  return createShapes(quantity, color, documentHeight, windowHeight)
}

RandomShapes.propTypes = {
  quantity: PropTypes.number.isRequired,
  color: PropTypes.string,
  random: PropTypes.bool
}
