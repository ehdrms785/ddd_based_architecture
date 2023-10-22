import React, { useContext } from 'react';
import { CounterContext, CounterProvider } from '../../modules/counter/contexts/counterContext';
import { NextPage } from 'next';
import styled from 'styled-components';

const CounterComponent: React.FC = () => {
  const contextValue = useContext(CounterContext);

  if (!contextValue) throw new Error('Error in accessing the context');

  const { state, dispatch } = contextValue;

  return (
    <Wrapper>
      <p>Count :{state.count}</p>

      <Button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</Button>
      <Button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</Button>
    </Wrapper>
  );
};

const Counter: NextPage = () => {
  return (
    <CounterProvider>
      <CounterComponent />
    </CounterProvider>
  );
};

export default Counter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  margin-top: 10px;
`;
