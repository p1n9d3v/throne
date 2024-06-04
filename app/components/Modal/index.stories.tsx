import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, expect, within, waitFor } from '@storybook/test';
import Modal from '.';
import React from 'react';

const meta = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        direction: 'center',
        showCloseButton: false,
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalContent = () => (
    <div
        style={{
            width: '400px',
            height: '500px',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#ff0000',
        }}
    >
        Modal
    </div>
);
export const Default: Story = {
    args: {
        isOpen: false,
        onClose: fn(),
    },
    render: ({ isOpen }) => {
        const [open, setOpen] = React.useState(isOpen);
        const handleToggleOpen = () => setOpen(!open);
        return (
            <>
                <button onClick={handleToggleOpen}>Open Modal</button>
                <Modal
                    isOpen={open}
                    onClose={handleToggleOpen}
                    direction="center"
                >
                    <ModalContent />
                </Modal>
            </>
        );
    },
};

export const LeftModal: Story = {
    args: {
        isOpen: true,
        direction: 'left',
        children: <ModalContent />,
        onClose: fn(),
    },
};

export const RightModal: Story = {
    args: {
        isOpen: true,
        direction: 'right',
        children: <ModalContent />,
        onClose: fn(),
    },
};

export const PlayCloseModal: Story = {
    args: {
        isOpen: true,
        onClose: fn(),
    },
    render: ({ isOpen }) => {
        const [open, setOpen] = React.useState(isOpen);
        const handleCloseModal = () => setOpen(!open);
        return (
            <>
                <Modal
                    isOpen={open}
                    onClose={handleCloseModal}
                    direction="center"
                    showCloseButton
                >
                    <ModalContent />
                </Modal>
            </>
        );
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const closeButton = canvas.getByRole('button', {
            name: /close modal/i,
        });

        await userEvent.click(closeButton);

        await waitFor(
            async () => {
                const modal = canvas.queryByRole('dialog');
                await expect(modal).toBeNull();
            },
            { timeout: 300 },
        );
    },
};
