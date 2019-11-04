import React from 'react'
import { NumberWrapper, NumberTop, NumberBottom } from './Number.styled'

export default (children) => {
  return (
    <NumberWrapper>
      <NumberTop aria-hidden="true">{children.children}</NumberTop>
      <NumberBottom aria-hidden="true">{children.children}</NumberBottom>
    </NumberWrapper>
  )
}
