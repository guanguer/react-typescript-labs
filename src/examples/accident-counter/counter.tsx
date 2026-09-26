import type { FormEventHandler, ComponentPropsWithoutRef } from 'react';
import { Card } from '$/common/components/card';
import { useReducer } from 'react';
import { Button } from './button';
import { counterReducer } from './counter-reducer';

type CounterControlsProps = {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};

const CounterControls = ({ onIncrement, onDecrement, onReset }: CounterControlsProps) => {
  return (
    <div className="flex gap-2">
      <Button onClick={onDecrement}>➖ Decrement</Button>
      <Button onClick={onReset}>🔁 Reset</Button>
      <Button onClick={onIncrement}>➕ Increment</Button>
    </div>
  );
};

const CounterForm = ({ onSubmit }: ComponentPropsWithoutRef<'form'>) => {
  return (
    <form className="flex items-center gap-2" onSubmit={onSubmit}>
      <input
        className="ring-primary-600 focus:border-primary-800 rounded border border-slate-500 px-4 py-2 outline-none focus:ring-2"
        type="number"
        name="count"
        defaultValue={0}
        min={0}
        aria-label="Days since last accident"
      />
      <Button type="submit">Set Count</Button>
    </form>
  );
};

export const Counter = () => {
  const [counter, dispatch] = useReducer(counterReducer, { count: 0 });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newCount = Number(formData.get('count'));
    dispatch({ type: 'setCount', payload: newCount });
  };

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <Card className="border-primary-500 flex w-2/3 flex-col items-center gap-8">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{counter.count}</p>
      <CounterControls
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
      />
      <CounterForm onSubmit={handleSubmit} />
    </Card>
  );
};
