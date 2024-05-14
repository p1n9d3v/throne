import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '.';

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
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
        variant: 'contained',
        size: 'large',
        color: 'primary',
    },
};

export const MediumSize: Story = {
    args: {
        variant: 'contained',
        size: 'medium',
        color: 'primary',
    },
};

export const SmallSize: Story = {
    args: {
        variant: 'contained',
        size: 'small',
        color: 'primary',
    },
};

export const Contained: Story = {
    args: {
        variant: 'contained',
        size: 'large',
        color: 'primary',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        size: 'large',
        color: 'primary',
    },
};
export const Text: Story = {
    args: {
        variant: 'text',
        size: 'large',
        color: 'primary',
    },
};
