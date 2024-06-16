import React from 'react';
import Table from '../ui/Table';
import { useRouter } from 'next/router';
import { OnChangeFn, PaginationState, Row } from '@tanstack/react-table';
import Image from 'next/image';

interface Props {
    data: any;
    pagination?: PaginationState;
    onChangePage?: OnChangeFn<PaginationState>;
    rowCount?: number;
    isLoading?: boolean;
}

const qualityColor: { [key: string]: string } = {
    '영웅 2단': 'var(--hero2-color)',
    영웅: '(--hero-color)',
    희귀: '(--rare-color)',
};

function EquipTable({
    data,
    pagination,
    onChangePage,
    rowCount,
    isLoading,
}: Props) {
    const router = useRouter();
    const columns: Column[] = [
        {
            key: 'quality',
            header: '단계',
            cell: (props) => (
                <div style={{ lineHeight: '2rem' }}>{props.getValue()}</div>
            ),
            size: 100,
        },
        {
            key: 'img',
            header: '',
            cell: (props) => {
                const quality = props.row.getValue('quality');
                return (
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '1/1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `radial-gradient(circle,var(${qualityColor[quality]}) 0,#000 110%)`,
                        }}
                    >
                        <Image src={props.getValue()} alt="image" fill />
                    </div>
                );
            },
            size: 100,
        },
        {
            key: 'name',
            header: '이름',
            cell: (props) => <div style={{}}>{props.getValue()}</div>,
        },
        {
            key: 'type',
            header: '종류',
        },
        {
            key: 'damage',
            header: '최소 ~ 최대 피해',
            cell: (props) => (
                <div>{`${props.getValue().min} ~ ${props.getValue().max}`}</div>
            ),
        },
    ];

    const rowClick = (row: Row<any>) => {
        router.push(`/equipments/weapons/${row.original.id}`);
    };

    return (
        <Table
            columns={columns}
            defaultData={data ?? []}
            pagination={pagination}
            rowCount={rowCount}
            onChangePage={onChangePage}
            isLoading={isLoading}
            rowClick={rowClick}
        />
    );
}

export default EquipTable;
