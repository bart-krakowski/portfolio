import * as React from 'react'
import styled, { css } from 'styled-components'

const base = css`
  width: 1px;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, #979797, rgba(171, 171, 171, 0.59) calc(100% - 50px), rgba(200, 200, 200, 0));
  position: absolute;
`

const LinesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;

  ::before, ::after {
    ${base}
    content: "";
  }

  ::before {
    left: 75px;
  }

  ::after {
    right: 75px;
  }
`
const GridLine = styled.div`
  ${base}
  left: 50%;
  transform: translatex(-50%);
`

export default () => (
  <LinesWrapper>
    <GridLine></GridLine>
  </LinesWrapper>
)
