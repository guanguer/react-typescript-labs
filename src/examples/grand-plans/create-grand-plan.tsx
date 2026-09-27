import { Button } from '$/common/components/button';
import { Input } from '$/common/components/input';
import { usePlans } from './plans-context';

// Can we make this adhere to an HTMLFormElement interface?
export const CreateGrandPlanForm = () => {
  const { createPlan } = usePlans();
  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const plan = formData.get('grand-plan') as string;
        createPlan(plan);
        e.currentTarget.reset();
      }}
    >
      <Input
        label="New Grand Plan Title"
        placeholder="Your latest grand plan…"
        hideLabel
        name="grand-plan"
        required
      />
      <Button type="submit">Create</Button>
    </form>
  );
};
