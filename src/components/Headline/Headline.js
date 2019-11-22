import React from 'react'
import PropTypes from 'prop-types';
import { variants, H1Strokes, H2Strokes } from './Headline.styled'

export const Headline = React.forwardRef(({
  variant,
  children,
  color,
  isExpanded,
  as
}, ref) => {
  const Tag = variants[`${variant || 'StrokeH1'}`]

  if (variant==='FillH1') {
    return (
      <Tag as={ as } color={color} ref={ref}>
        {children}
        <H1Strokes.Top color={color} isExpanded={isExpanded} aria-hidden="true">{children}</H1Strokes.Top>
        <H1Strokes.Bottom color={color} isExpanded={isExpanded} aria-hidden="true">{children}</H1Strokes.Bottom>
      </Tag>
    )
  } else if (variant==='FillH2') {
    return (
      <Tag as={ as } color={color} ref={ref}>
        {children}
        <H2Strokes.Top color={color} isExpanded={isExpanded} aria-hidden="true">{children}</H2Strokes.Top>
        <H2Strokes.Bottom color={color} isExpanded={isExpanded} aria-hidden="true">{children}</H2Strokes.Bottom>
      </Tag>
    )
  } else {
    return (
      <Tag as={ as } ref={ref}>
        {children}
      </Tag>
    )
  }
})

Headline.propTypes = {
  variant: PropTypes.string
}
