import { default as TextFieldMaterialUI, TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';
import { jsx } from '@emotion/core';
/** @jsx jsx */ jsx;

const TextField: React.FC<TextFieldProps> = ({ InputProps, classes, ...other }) => (
  <TextFieldMaterialUI
    {...other}
    InputProps={{
      ...InputProps,
      classes,
    }}
  />
);

export default TextField;
