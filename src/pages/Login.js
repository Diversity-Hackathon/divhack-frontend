// REACT IMPORT
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '../data/current-user-id';
import styled from '@emotion/styled';
import LoadingIndicator from '../components/LoadingIndicator';

const Container = styled.div({
  display: 'flex',
  height: 32,
  width: '100%',
});

const Input = styled.input(({ theme: { colors }}) => ({
  background: colors.white,
  border: `1px solid ${colors.maroon}`,
  borderBottomLeftRadius: 16,
  borderRight: 'none',
  borderTopLeftRadius: 16,
  height: 32,
  lineHeight: '20px',
  fontSize: 20,
  outline: 'none',
  paddingLeft: 16,
  width: 'calc(100%)',
}));

const Button = styled.button(({ theme: { colors } }) => ({
  background: colors.green,
  borderBottomRightRadius: 16,
  borderTopRightRadius: 16,
  color: colors.white,
  fontSize: 14,
  height: 32,
  textTransform: 'uppercase',
  minWidth: 64,
}));

const StyledLoadingIndicator = styled(LoadingIndicator)({
  marginTop: 16,
});

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const isLoading = useSelector(Selectors.getLoadingStatus);

  const handleChange = (e) => {
    setEmail(e.currentTarget.value);
  }

  const handleClick = () => {
    dispatch(Actions.login(email));
  }

  return (
    <>
      <Container> 
        <Input
          name="email"
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={handleChange}
        />
        <Button onClick={handleClick}>Login</Button>
      </Container>
      {isLoading && <StyledLoadingIndicator />}
    </>
  );
};

export default Login;