import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AnimateHamburger from '.';
import { fn } from '@storybook/test';

const meta = {
    title: 'Components/AnimateHamburger',
    component: AnimateHamburger,
    tags: ['autodocs'],
} satisfies Meta<typeof AnimateHamburger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: [],
    },
};
