import React, { useState } from "react";
import styled from '@emotion/styled';
import LoadingIndicator from '../components/LoadingIndicator';

const AddressContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 16,
  width: '100%',
});

const Input = styled.input(({ theme: { colors }}) => ({
  background: colors.white,
  border: `1px solid ${colors.maroon}`,
  borderRadius: 16,
  height: 32,
  lineHeight: '20px',
  fontSize: 20,
  outline: 'none',
  paddingLeft: 16,
  width: 'calc(100%)',
  ':not(:last-of-type)': {
    marginBottom: 4,
  },
}));

const StyledLoadingIndicator = styled(LoadingIndicator)({
  marginTop: 16,
});

const Button = styled.button(({ theme: { colors } }) => ({
  background: colors.green,
  borderRadius: 16,
  color: colors.white,
  fontSize: 14,
  height: 32,
  textTransform: 'uppercase',
  padding: '8px 16px',
}));

const Label = styled.h3({
  marginBottom: 8,
});

const RouteInput = ({ history }) => {
  const [from, setFrom] = useState({
    address: '',
    city: '',
    state: '',
  });

  const [to, setTo] = useState({
    address: '',
    city: '',
    state: '',
  });

  const [loading, setLoading] = useState(false);

  const updateFrom = name => e => {
    const value = e.currentTarget.value;
    setFrom(from => ({
      ...from,
      [name]: value,
    }));
  }

  const updateTo = name => e => {
    const value = e.currentTarget.value
    setTo(to => ({
      ...to,
      [name]: value,
    }));
  }

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      history.push('/results');
    }, 600)
  }

  return (
    <>
      <AddressContainer>
        <Label>From:</Label>
        <Input type="text" placeholder="Street Address" value={from.address} onChange={updateFrom('address')} />
        <Input type="text" placeholder="City" value={from.city} onChange={updateFrom('city')} />
        <Input type="text" placeholder="State" value={from.state} onChange={updateFrom('state')} />
      </AddressContainer>
      <AddressContainer>
        <Label>To:</Label>
        <Input type="text" placeholder="Street Address" value={to.address} onChange={updateTo('address')} />
        <Input type="text" placeholder="City" value={to.city} onChange={updateTo('city')} />
        <Input type="text" placeholder="State" value={to.state} onChange={updateTo('state')} />
      </AddressContainer>
      <Button onClick={handleClick}>Calculate CO<sub>2</sub></Button>
      { loading && <StyledLoadingIndicator />}
    </>
  );
};

export default RouteInput;