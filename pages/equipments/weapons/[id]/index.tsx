import { ReactElement } from 'react';
import { useParams } from 'next/navigation';
import styles from './index.module.css';
import { getWeaponById } from '@/api/equipment';
import { useQuery } from '@tanstack/react-query';

function WeaponPage() {
    const params = useParams();
    const { data } = useQuery({
        queryKey: ['weapons', params?.id],
        queryFn: () => getWeaponById(params?.id as string),
    });
    return (
        <div className={styles.Weapon}>
            <div className={styles.Weapon__card}>
                <h1 className={styles.Weapon__title}>{data?.name}</h1>
            </div>
        </div>
    );
}

WeaponPage.getNestedLayout = function getNestedLayout(page: ReactElement) {
    return (
        <>
            <div
                style={{
                    backgroundImage:
                        'url(https://assets.playnccdn.com/uikit/cnb/3.1.0/img/header/header-tl-2023.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '20rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <h1
                    style={{
                        fontSize: '3rem',
                        textAlign: 'center',
                        position: 'relative',
                        top: '2rem',
                    }}
                >
                    양손검
                </h1>
            </div>

            {page}
        </>
    );
};

export default WeaponPage;
