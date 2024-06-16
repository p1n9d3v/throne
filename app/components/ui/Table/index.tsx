import React from 'react';
import {
    OnChangeFn,
    PaginationState,
    Row,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import styles from './index.module.css';
import cx from 'classnames';
import {
    HiOutlineChevronDoubleRight,
    HiOutlineChevronDoubleLeft,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
} from 'react-icons/hi';
import { RingLoader } from 'react-spinners';

interface Props<T> {
    columns: Column[];
    defaultData: T[];
    headerStyle?: React.CSSProperties;
    pagination?: PaginationState;
    onChangePage?: OnChangeFn<PaginationState>;
    rowCount?: number;
    isLoading?: boolean;
    rowClick?: (row: Row<any>) => void;
}

function Table<T>({
    defaultData,
    columns,
    headerStyle,
    pagination,
    rowCount,
    onChangePage,
    rowClick,
    isLoading,
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

    React.useEffect(() => {}, [isLoading]);
    return (
        <div>
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

                    {isLoading && (
                        <tbody>
                            <tr>
                                <td colSpan={5}>
                                    <div
                                        style={{
                                            height: '50rem',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <RingLoader
                                            color="#9751b6"
                                            size={100}
                                        />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    )}

                    <tbody className={styles.Table__body}>
                        {table.getRowModel().rows.map((row) => (
                            <tr
                                key={row.id}
                                onClick={
                                    rowClick ? () => rowClick(row) : undefined
                                }
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        style={{
                                            textAlign:
                                                cell.column.columnDef.meta!
                                                    .align,
                                            verticalAlign:
                                                cell.column.columnDef.meta!
                                                    .valign,
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
            </div>

            {pagination && rowCount && (
                <div className={styles.Pagination}>
                    <button
                        type="button"
                        className={styles.Pagination__icon}
                        onClick={() => table.firstPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <HiOutlineChevronDoubleLeft />
                    </button>
                    <button
                        type="button"
                        className={styles.Pagination__icon}
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <HiOutlineChevronLeft />
                    </button>
                    <div className={styles.Pagination__pageInfo}>
                        {`${pagination.pageIndex + 1} / ${Math.ceil(rowCount / pagination.pageSize)}`}
                    </div>
                    <button
                        type="button"
                        className={styles.Pagination__icon}
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <HiOutlineChevronRight />
                    </button>
                    <button
                        type="button"
                        className={styles.Pagination__icon}
                        onClick={() => table.lastPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <HiOutlineChevronDoubleRight />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Table;
