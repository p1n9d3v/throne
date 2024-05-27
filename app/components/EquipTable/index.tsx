import React from 'react';
import Table from '../ui/Table';
import { maxHeaderSize } from 'http';

interface Props {
    data: any;
}

function EquipTable({ data }: Props) {
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
                console.log(quality);
                return (
                    <div
                        style={{
                            width: '100%',
                            aspectRatio: '1/1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background:
                                'radial-gradient(circle,var(--purple-700) 0,#000 110%)',
                        }}
                    >
                        <img
                            src={props.getValue()}
                            alt="image"
                            style={{
                                width: '90%',
                            }}
                        />
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

    return <Table columns={columns} defaultData={data} />;
}

export default EquipTable;