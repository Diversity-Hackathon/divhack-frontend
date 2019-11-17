import React from "react";
import styled from '@emotion/styled';

const results = [
  {
    id: 1,
    mode: 'Car (gasoline)',
    emissions: '155.10 lbs of CO2e'
  },
  {
    id: 2,
    mode: 'Car (diesel)',
    emissions: '177.68 lbs of CO2e'
  },
  {
    id: 3,
    mode: 'Bus',
    emissions: '37.00 lbs of CO2e'
  },
];

const ResultItem = styled.div(({ theme: { colors } }) => ({
  width: '100%',
  alignItems: 'center',
  background: colors.green,
  height: 32,
  fontSize: 16,
  borderRadius: 16,
  color: colors.white,
  padding: '8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  ':not(:last-of-type)': {
    marginBottom: 8,
  },
}));

const Header = styled.h1(() => ({
  color: "#6F0808",
  fontFamily: 'sans-serif',
  marginBottom: 32,
}));

const Results = () => (
  <>
    <Header>Your footprint:</Header>
    {
      results.map(({ id, mode, emissions }) => (
        <ResultItem key={id}>
          <div>{mode}</div>
          <div>{emissions}</div>
        </ResultItem>
      ))
    }
  </>
);

export default Results;
