import React from 'react'
import Layout from '../layout/Layout';

import Button from '../components/Button/Button.styled';
import { Headline } from '../components/Headline/Headline';
import Number from '../components/Number/Number';
import GridLines from '../components/GridLines/GridLines'
import CircleHeadline from '../components/CircleHeadline/CircleHeadline'
import MenuButton from '../components/MenuButton/MenuButton'
import Logo from '../components/Logo/Logo'
import SeeMore from '../components/SeeMore/SeeMore'

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
    <Logo />
    <SeeMore color="primary"/>
  </Layout>
)

export default Components
