import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Table from '.';

const meta = {
    title: 'Components/Table',
    component: Table,
    tags: ['autodocs'],
    parameters: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultData: [],
        columns: [],
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
            <div>
                <Story
                    args={{
                        columns: [
                            {
                                key: 'name',
                                header: 'Name',
                            },
                            {
                                key: 'quality',
                                header: 'Quality',
                            },
                            {
                                key: 'damage',
                                header: 'Damage',
                                cell: (data) =>
                                    `${data.getValue().min} ~ ${data.getValue().max}`,
                            },
                        ],
                        defaultData: data,
                        pagination: {
                            pageIndex: 0,
                            pageSize: 5,
                        },
                        rowCount: 5,
                    }}
                />
            </div>
        );
    },
};
