import { useEffect, useState, type PropsWithChildren } from 'react';
import * as Api from './api';
import { PlansContextProvider, type PlansContextType } from './plans-context';
import type { Plan } from './types';

export const PlansProvider = ({ children }: PropsWithChildren) => {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    Api.allPlans().then(setPlans);
  }, []);

  const createPlan = async (title: string) => {
    const plan = await Api.createPlan(title);
    setPlans((prevPlans) => [...prevPlans, plan]);
  };

  const updatePlan: PlansContextType['updatePlan'] = async (id, updatedPlan) => {
    const plan = await Api.updatePlan(id, updatedPlan);
    setPlans((prev) => prev.map((p) => (p.id === plan.id ? plan : p)));
  };

  const removePlan = async (id: number) => {
    const deleted = await Api.deletePlan(id);
    if (!deleted) return;
    setPlans((prevPlans) => prevPlans.filter((p) => p.id !== id));
  };

  return (
    <PlansContextProvider value={{ plans, createPlan, updatePlan, removePlan }}>
      {children}
    </PlansContextProvider>
  );
};
