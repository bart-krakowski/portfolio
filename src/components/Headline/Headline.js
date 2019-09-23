// @flow
import * as React from 'react'
import { variants, StrokeShadowTop, StrokeShadowBottom } from './Headline.styled'

export const Headline = ({
  variant,
  as,
  color,
  children
}) => {
  const Tag = variants[`${variant || 'StrokeH1'}`]

  if (variant==='FillH1' || variant==='FillH2') {
    return (
      <Tag as={as}>
        {children}
        <StrokeShadowTop aria-hidden="true">{children}</StrokeShadowTop>
        <StrokeShadowBottom aria-hidden="true">{children}</StrokeShadowBottom>
      </Tag>
    )
  }
  else {
    return (
      <Tag as={as}>
        {children}
      </Tag>
    )
  }
}
