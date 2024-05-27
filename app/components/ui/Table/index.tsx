import React from 'react';
import {
    Header,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import styles from './index.module.css';
import cx from 'classnames';

type Column = {
    key: string;
    header: string;
    cell?: (props: any) => any;
    size?: number;
};

interface Props<T> {
    columns: Column[];
    defaultData: T[];
    headerStyle?: React.CSSProperties;
    align?: 'left' | 'center' | 'right';
}

function Table<T>({ defaultData, columns, headerStyle, align }: Props<T>) {
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
                        size: col.size,
                    }),
                ),
            [columns],
        ),
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className={styles.Table}>
            <table cellSpacing={0} cellPadding={0} border={0}>
                <thead className={cx(styles.Table__header, headerStyle)}>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    colSpan={header.colSpan}
                                    style={{
                                        width: `${header.getSize()}px`,
                                    }}
                                >
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
                <tbody className={styles.Table__body}>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} align={align}>
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
        </div>
    );
}

export default Table;
