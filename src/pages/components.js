import React from 'react'
import Layout from '../layout/Layout';

import { Button } from '../components/Button/Button.styled';
import { Headline } from '../components/Headline/Headline';
import { Number } from '../components/Number/Number';
import { GridLines } from '../components/GridLines/GridLines'
import { CircleHeadline } from '../components/CircleHeadline/CircleHeadline'
import { MenuButton } from '../components/MenuButton/MenuButton'

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
    <CircleHeadline />
    <MenuButton />
  </Layout>
)

export default Components
