import React from 'react';
import { jsx } from '@emotion/core';
/** @jsx jsx */ jsx;
import styled from '@emotion/styled';
import logo from './img/logo.svg';

const StyledLogo = styled.div`
  && {
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    background-position: center;
    background-size: contain;
    background-image: url(${logo});
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;`;

const Logo: React.FC = () => {
  return <StyledLogo />;
};

export default Logo;
