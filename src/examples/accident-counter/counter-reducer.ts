type CounterState = {
  count: number;
};

export type CounterAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'setCount'; payload: number };

export const counterReducer = (state: CounterState, action: CounterAction) => {
  const { count } = state;

  switch (action.type) {
    case 'increment':
      return { count: count + 1 };
    case 'decrement':
      return { count: Math.max(0, count - 1) };
    case 'reset':
      return { count: 0 };
    case 'setCount': {
      const next = Math.floor(action.payload);
      return { count: Number.isFinite(next) ? Math.max(0, next) : state.count };
    }
    default: {
      const _exhaustive: never = action;
      return state;
    }
  }
};
