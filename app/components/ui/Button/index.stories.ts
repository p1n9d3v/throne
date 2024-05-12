import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '.';

const meta = {
    title: 'Components/Button',
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeSize: Story = {
    args: {
        variant: 'primary',
        size: 'large',
    },
};

export const Primary: Story = {
    // args: {
    //     user: {
    //         name: 'Jane Doe',
    //     },
    // },
};
