import React from 'react';
import {
    Header,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import styles from './index.module.css';

type Column = {
    key: string;
    header: string;
    cell?: (props: any) => any;
    size?: number;
};

interface Props<T> {
    columns: Column[];
    defaultData: T[];
}

function Table<T>({ defaultData, columns }: Props<T>) {
    const data = React.useMemo(() => defaultData, [defaultData]);
    const columnHelper = createColumnHelper<T>();
    const table = useReactTable({
        data,
        columns: React.useMemo(
            () =>
                columns.map((col) =>
                    columnHelper.accessor(col.key as any, {
                        header: col.header,
                        cell: col.cell
                            ? (props) => col.cell?.(props.getValue())
                            : (props) => props.getValue(),
                    }),
                ),
            [columns],
        ),
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table>
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id} colSpan={header.colSpan}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext(),
                                      )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id}>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext(),
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
