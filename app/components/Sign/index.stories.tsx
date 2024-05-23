import type { Meta, StoryObj } from '@storybook/react';
import Sign from '.';

const meta = {
    title: 'Components/Sign',
    component: Sign,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Sign>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
