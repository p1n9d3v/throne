import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import OAuthButton from '.';

const meta = {
    title: 'Components/OAuthButton',
    component: OAuthButton,
    tags: ['autodocs'],
    parameters: {},
} satisfies Meta<typeof OAuthButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Google: Story = {
    args: {
        oauth: 'google',
        onClick: fn(),
    },
};
