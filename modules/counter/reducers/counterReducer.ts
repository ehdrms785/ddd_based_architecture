export type CounterState = {
  count: number;
};

export type CounterAction = {
  type: 'INCREMENT' | 'DECREMENT';
};

export const CounterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
