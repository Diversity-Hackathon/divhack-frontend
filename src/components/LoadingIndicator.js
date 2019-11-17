import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const dotFlashing = keyframes({
  '0%': {
    opacity: 1,
  },
  '50%,100%': {
    opacity: 0.5,
  },
});

const StyledCircle = styled.div(({ delay, theme: { colors }}) => ({
  animationDuration: '.5s',
  animationName: dotFlashing,
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  animationDirection: 'alternate',
  animationDelay: delay,
  backfaceVisibility: 'hidden', // fix flickering animation
  background: colors.maroon,
  borderRadius: 4,
  display: 'inline-block',
  height: 8,
  perspective: 1000, // fix flickering animation
  width: 8,
}));

const Container = styled.div({
  alignItems: 'center',
  display: 'inline-flex',
  height: 8,
  '& div:not(:last-child)': {
    marginRight: 3,
  },
});

const LoadingIndicator = ({ ...props }) => (
  <Container {...props}>
    <StyledCircle delay="0s" />
    <StyledCircle delay=".25s" />
    <StyledCircle delay=".5s" />
  </Container>
);

export default LoadingIndicator;
