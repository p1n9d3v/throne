import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within, expect } from '@storybook/test';
import Input from '.';
import { MdPerson } from 'react-icons/md';
import { useForm, UseFormRegisterReturn } from 'react-hook-form';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'medium',
    },
};

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

export const InputWithIcon: Story = {
    args: {
        size: 'large',
        icon: <MdPerson size={32} />,
    },
};

export const InputWithClearButton: Story = {
    render: () => {
        const size = ['small', 'medium', 'large'];
        const { register, resetField } = useForm();
        return (
            <div
                style={{
                    display: 'flex',
                    gap: '1.4rem',
                }}
            >
                {size.map((s: string, idx: number) => (
                    <Input
                        key={`input-${idx}`}
                        type="text"
                        {...register(`input-${idx}`)}
                        size={s as any}
                        onClear={() => resetField(`input-${idx}`)}
                    />
                ))}
            </div>
        );
    },
};

export const PlayClearInput: Story = {
    args: {
        size: 'medium',
    },
    render: ({ size, onClear }) => {
        const { register, resetField } = useForm();
        return (
            <Input
                type="text"
                size={size}
                {...register('input')}
                onClear={() => resetField('input')}
            />
        );
    },

    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const input = canvas.getByRole('textbox');

        await userEvent.type(input, 'Hello, World!');

        expect(input).toHaveValue('Hello, World!');

        await userEvent.click(canvas.getByRole('button'));

        await expect(input).toHaveValue('');
    },
};
