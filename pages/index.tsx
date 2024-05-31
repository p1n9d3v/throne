import React from 'react';
import Button from '@/components/ui/Button';
import styles from './index.module.css';
import Table from '@/components/ui/Table';
import EquipTable from '@/components/EquipTable';
import { useQuery } from '@tanstack/react-query';
import { getAllWeapons } from '@/api/firestore';

export default function Home() {
    const { data, isLoading } = useQuery({
        queryKey: ['weapons'],
        queryFn: getAllWeapons,
    });

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
                    data={data ? Object.values(data) : []}
                    pagination={{ pageIndex: 0, pageSize: 3 }}
                    rowCount={10}
                />
            </div>
        </div>
    );
}
