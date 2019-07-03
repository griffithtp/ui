import React from 'react';
import { jsx } from '@emotion/core';
/** @jsx jsx */ jsx;

import { Circular, Wrapper } from './styles';

interface Props {
  size?: number;
  centered?: boolean;
}

const Spinner: React.FC<Props> = ({ size = 50, centered = false }) => (
  // @ts-ignore
  <Wrapper centered={centered}>
    <Circular size={size} />
  </Wrapper>
);

export default Spinner;
