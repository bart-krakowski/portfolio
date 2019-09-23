import React from 'react'
import Layout from '../layout/Layout';

import { Button } from '../components/Button/Button.styled';
import { Headline } from '../components/Headline/Headline';

const Components = () => (
  <Layout>
    <Button>Start a project</Button>
    <Headline
      variant={'FillH1'}
      as="h1"
    >
      About
      </Headline>
  </Layout>
)

export default Components
