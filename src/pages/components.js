import React from 'react'
import Layout from '../layout/Layout';

import { Button } from '../components/Button/Button.styled';
import { Headline } from '../components/Headline/Headline';
import { Number } from '../components/Number/Number';
import { GridLines } from '../components/GridLines/GridLines'

const Components = () => (
  <Layout>
    <Button>Start a project</Button>
    <Headline
      variant={'FillH1'}
      as="h1"
    >
      About
    </Headline>
    <Number>1</Number>
    <GridLines />
  </Layout>
)

export default Components
