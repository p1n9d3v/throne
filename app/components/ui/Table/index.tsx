import React from 'react';
import {
    OnChangeFn,
    PaginationState,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import styles from './index.module.css';
import cx from 'classnames';

interface Props<T> {
    columns: Column[];
    defaultData: T[];
    headerStyle?: React.CSSProperties;
    pagination?: PaginationState;
    onChangePage?: OnChangeFn<PaginationState>;
    rowCount?: number;
}

function Table<T>({
    defaultData,
    columns,
    headerStyle,
    pagination,
    rowCount,
    onChangePage,
}: Props<T>) {
    const data = React.useMemo(() => defaultData, [defaultData]);
    const columnHelper = createColumnHelper<T>();
    const table = useReactTable({
        data,
        columns: React.useMemo(
            () =>
                columns.map((col: any) =>
                    columnHelper.accessor(col.key as any, {
                        header: col.header,
                        cell: col.cell
                            ? (props) => col.cell?.(props)
                            : (props) => props.getValue(),
                        size: col.size,
                        meta: {
                            align: col.align ? col.align : 'center',
                            valign: col.valign ? col.valign : 'middle',
                        },
                    }),
                ),
            [columns],
        ),
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        rowCount,
        onPaginationChange: onChangePage,
        state: {
            pagination,
        },
    });

    console.log(table.getState());

    return (
        <div className={styles.Table}>
            <table cellSpacing={0} cellPadding={0} border={0}>
                <thead className={cx(styles.Table__header, headerStyle)}>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <th
                                        key={header.id}
                                        colSpan={header.colSpan}
                                        style={{
                                            width:
                                                header.getSize() !== 150 // default size
                                                    ? `${header.getSize()}px`
                                                    : 'auto',
                                        }}
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext(),
                                              )}
                                    </th>
                                );
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody className={styles.Table__body}>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    style={{
                                        textAlign:
                                            cell.column.columnDef.meta!.align,
                                        verticalAlign:
                                            cell.column.columnDef.meta!.valign,
                                    }}
                                >
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
            {pagination && (
                <div style={{ display: 'flex', gap: '1.2rem' }}>
                    <button
                        type="button"
                        style={{ fontSize: '3.2rem' }}
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {' '}
                        {'<'}{' '}
                    </button>
                    <button
                        type="button"
                        style={{ fontSize: '3.2rem' }}
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {' '}
                        {'>'}{' '}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Table;
