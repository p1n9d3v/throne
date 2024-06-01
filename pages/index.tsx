import React from 'react';
import styles from './index.module.css';
import EquipTable from '@/components/EquipTable';
import { useQuery } from '@tanstack/react-query';
import { getAllWeapons, getWeaponPagination } from '@/api/firestore';

export default function Home() {
    const [lastVisible, setLastVisible] = React.useState<any>(undefined);
    const [firstVisible, setFirstVisible] = React.useState<any>(undefined);
    const [type, setType] = React.useState<'first' | 'prev' | 'next' | 'last'>(
        'first',
    );
    const [nextPagination, setNextPagination] = React.useState({
        pageIndex: 0,
        pageSize: 5,
    });
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 5,
    });

    const { data: weapons } = useQuery({
        queryKey: ['weapons', pagination],
        queryFn: async () => {
            const resp = await getWeaponPagination({
                type,
                pageSize: pagination.pageSize,
                lastVisible,
                firstVisible,
            });
            setLastVisible(resp.lastVisible);
            setFirstVisible(resp.firstVisible);
            return resp;
        },
    });

    React.useEffect(() => {
        const diff = nextPagination.pageIndex - pagination.pageIndex;
        if (diff === 1) setType('next');
        else if (diff === -1) setType('prev');
        else if (diff < -1) setType('first');
        else if (diff > 1) setType('last');
        setPagination(nextPagination);
    }, [nextPagination]);

    return (
        <div>
            <div className={styles.Home__Thumbnail}>
                <video
                    src="https://vod.plaync.com/TL/update/20240424/240424_tl_bg_loop_v2.mp4"
                    poster="https://fizz-download.playnccdn.com/download/v2/buckets/conti-upload/files/18f057c0be3-da1d1194-3d7d-4dd9-979c-573f17dbce24"
                    loop
                    preload="auto"
                    autoPlay
                    muted
                    playsInline
                />
            </div>
            <div style={{ padding: '1rem', boxSizing: 'border-box' }}>
                <EquipTable
                    data={weapons ? weapons.data : []}
                    rowCount={weapons?.totalCount}
                    pagination={pagination}
                    onChangePage={(pageState) => {
                        setNextPagination(pageState);
                    }}
                />
            </div>
        </div>
    );
}
