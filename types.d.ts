// types.d.ts
import '@tanstack/table-core';

declare global {
    type Column = {
        key: string;
        header: string;
        cell?: (props: any) => any;
        size?: number;
        align?: ColumnAlign;
        valign?: ColumnVAlign;
    };
    type ColumnAlign = 'left' | 'center' | 'right';
    type ColumnVAlign = 'top' | 'middle' | 'bottom';
}
declare module '@tanstack/table-core' {
    interface ColumnMeta<TData extends RowData, TValue> {
        align?: ColumnAlign;
        valign?: ColumnVAlign;
    }
}
