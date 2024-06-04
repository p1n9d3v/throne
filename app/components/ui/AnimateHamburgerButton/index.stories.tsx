import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AnimateHamburgerButton from '.';
import { fn } from '@storybook/test';

const meta = {
    title: 'Components/AnimateHamburgerButton',
    component: AnimateHamburgerButton,
    tags: ['autodocs'],
    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof AnimateHamburgerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
