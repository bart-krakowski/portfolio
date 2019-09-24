// @flow
import * as React from 'react'
import PropTypes from 'prop-types';
import { variants, H1Strokes, H2Strokes } from './Headline.styled'

export const Headline = ({
  variant,
  children
}) => {
  const Tag = variants[`${variant || 'StrokeH1'}`]

  if (variant==='FillH1') {
    return (
      <Tag>
        {children}
        <H1Strokes.Top aria-hidden="true">{children}</H1Strokes.Top>
        <H1Strokes.Bottom aria-hidden="true">{children}</H1Strokes.Bottom>
      </Tag>
    )
  } else if (variant==='FillH2') {
    return (
      <Tag>
        {children}
        <H2Strokes.Top aria-hidden="true">{children}</H2Strokes.Top>
        <H2Strokes.Bottom aria-hidden="true">{children}</H2Strokes.Bottom>
      </Tag>
    )
  } else {
    return (
      <Tag>
        {children}
      </Tag>
    )
  }
}

Headline.propTypes = {
  variant: PropTypes.string
}
