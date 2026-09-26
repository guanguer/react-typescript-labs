import type { FormEventHandler, Dispatch, SetStateAction, ComponentPropsWithoutRef } from 'react';
import { Card } from '$/common/components/card';
import { useState } from 'react';
import { Button } from './button';

type CounterControlsProps = {
  setCount: Dispatch<SetStateAction<number>>;
};

const CounterControls = ({ setCount }: CounterControlsProps) => {
  return (
    <div className="flex gap-2">
      <Button onClick={() => setCount((prev) => Math.max(0, prev - 1))}>➖ Decrement</Button>
      <Button onClick={() => setCount(0)}>🔁 Reset</Button>
      <Button onClick={() => setCount((prev) => prev + 1)}>➕ Increment</Button>
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
  const [count, setCount] = useState(0);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newCount = Number(formData.get('count'));
    setCount(newCount);
  };

  return (
    <Card className="border-primary-500 flex w-2/3 flex-col items-center gap-8">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <CounterControls setCount={setCount} />
      <CounterForm onSubmit={handleSubmit} />
    </Card>
  );
};
