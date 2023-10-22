import React, { createContext, useReducer, Dispatch } from 'react';
import { CounterAction, CounterReducer, CounterState } from '../reducers/counterReducer';


// Define the shape of the context value
type CounterContextValue = {
  state: CounterState;
  dispatch: Dispatch<CounterAction>;
};

const initialState: CounterState = { count: 0 };

// Use CounterContextValue for the context type
export const CounterContext = createContext<CounterContextValue | undefined>(undefined);

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>;
};
