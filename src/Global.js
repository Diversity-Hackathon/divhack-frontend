import React from 'react';
import { Global } from '@emotion/core';
import 'normalize.css';

export default () => (
  <Global
    styles={{
      '*, *::before, *::after': {
        fontFamily: 'system-ui, sans-serif',
        boxSizing: 'border-box',
      },
      a: {
        color: 'inherit',
        cursor: 'pointer',
        textDecoration: 'none',
      },
      button: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        color: 'inherit',
        cursor: 'pointer',
        outline: 'none',
        padding: 0,
      },
      cite: {
        fontStyle: 'normal',
      },
      fieldset: {
        borderWidth: 0,
        margin: 0,
        padding: 0,
      },
      figure: {
        margin: 0,
      },
      'h1, h2, h3, h4, h5, h6': {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        margin: 0,
      },
      html: {
        fontSize: '20px',
      },
      'input::-moz-focus-inner': {
        border: 0,
        margin: 0,
        padding: 0,
      },
      p: {
        margin: 0,
      },
      'ul, ol, dd': {
        listStyle: 'none',
        margin: 0,
        padding: 0,
      },
    }}
  />
);
