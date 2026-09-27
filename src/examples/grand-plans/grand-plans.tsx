import { Container } from '$/common/components/container';
import { CreateGrandPlanForm } from './create-grand-plan';
import { GrandPlan } from './plan';
import { usePlans } from './plans-context';

export const GrandPlans = () => {
  const { plans } = usePlans();

  return (
    <Container className="space-y-4">
      <CreateGrandPlanForm />
      <ul className="flex flex-col gap-4">
        {plans.map((plan) => (
          <GrandPlan key={plan.id} {...plan} />
        ))}
      </ul>
    </Container>
  );
};
