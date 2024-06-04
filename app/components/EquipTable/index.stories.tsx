import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EquipTable from '.';
import { fn } from '@storybook/test';

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
                setData(json);
            });
        }, []);

        return (
            <div style={{ width: '100%' }}>
                <Story
                    args={{
                        data,
                        pagination: {
                            pageIndex: 0,
                            pageSize: 5,
                        },
                        rowCount: 5,
                        onChangePage: fn(),
                    }}
                />
            </div>
        );
    },
};
