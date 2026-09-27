import React, { createContext } from 'react';

export const createBetterContext = <T>(name = 'Context') => {
  const Context = createContext<T | null>(null);

  const useCtx = () => {
    const ctx = React.useContext(Context);

    if (ctx === null) {
      throw new Error(`use${name} must be used within its Provider`);
    }
    return ctx;
  };
  return [useCtx, Context.Provider] as const;
};
