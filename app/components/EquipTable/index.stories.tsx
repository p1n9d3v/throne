import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EquipTable from '.';

const meta = {
    title: 'Components/EquipTable',
    component: EquipTable,
    tags: ['autodocs'],
} satisfies Meta<typeof EquipTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: [],
    },
    decorators: (Story) => {
        const [data, setData] = React.useState([]);

        React.useEffect(() => {
            fetch('/mock/weapon.json').then(async (data) => {
                const json = await data.json();
                console.log(json);
                setData(json);
            });
        }, []);

        return (
            <div style={{ width: '100%' }}>
                <Story
                    args={{
                        data,
                    }}
                />
            </div>
        );
    },
};
