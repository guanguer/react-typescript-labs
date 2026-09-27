import { Card } from '$/common/components/card';
import { Checkbox } from '$/common/components/checkbox';
import type { ChangeEvent } from 'react';
import { usePlans } from './plans-context';
import type { Plan } from './types';

export const GrandPlan = ({ id, title, completed }: Plan) => {
  const { updatePlan } = usePlans();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    updatePlan(id, { completed: event.target.checked });
  };

  return (
    <Card as="li" className="flex items-center justify-between">
      <h3>{title}</h3>
      <Checkbox label="Completed" checked={completed} onChange={handleChange} />
    </Card>
  );
};
