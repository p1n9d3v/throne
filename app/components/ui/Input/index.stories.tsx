import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Input from '.';

const meta = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InputSmall: Story = {
    args: {
        size: 'small',
    },
};

export const InputMedium: Story = {
    args: {
        size: 'medium',
    },
};

export const InputLarge: Story = {
    args: {
        size: 'large',
    },
};
