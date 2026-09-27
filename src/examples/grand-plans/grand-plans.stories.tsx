import type { Meta, StoryObj } from '@storybook/react-vite';
import { GrandPlans } from './grand-plans';
import { PlansProvider } from './plans-provider';

const meta = {
  title: '🎸 Examples/Grand Plans',
  component: GrandPlans,
  decorators: [
    (Story) => (
      <PlansProvider>
        <Story />
      </PlansProvider>
    ),
  ],
} satisfies Meta<typeof GrandPlans>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
