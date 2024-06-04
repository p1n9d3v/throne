import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, expect, within, waitFor } from '@storybook/test';
import React from 'react';
import Sidebar from '.';

const meta = {
    title: 'Components/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        isOpen: false,
        onClose: fn(),
    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ isOpen }) => {
        const [open, setOpen] = React.useState(isOpen);
        const handleToggleOpen = () => setOpen(!open);
        return (
            <>
                <button onClick={handleToggleOpen}>Open Modal</button>
                <Sidebar isOpen={open} onClose={() => setOpen(false)}></Sidebar>
            </>
        );
    },
};
