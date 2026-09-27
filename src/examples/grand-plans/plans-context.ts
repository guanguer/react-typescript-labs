import { createBetterContext } from '$/common/create-better-context';
import type { Plan } from './types';

export type PlansContextType = {
  plans: Plan[];
  createPlan: (title: string) => Promise<void>;
  updatePlan: (id: number, updatedPlan: Partial<Omit<Plan, 'id'>>) => Promise<void>;
  removePlan: (id: number) => Promise<void>;
};

export const [usePlans, PlansContextProvider] = createBetterContext<PlansContextType>('Plans');
