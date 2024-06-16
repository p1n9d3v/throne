import { Equipment } from '@/types';
import styles from './index.module.css';
import Image from 'next/image';

const getColor = (quality: string) => {
    switch (quality) {
        case '영웅 2단':
            return 'var(--hero2-color)';
        case '영웅':
            return 'var(--hero-color)';
        case '희귀':
            return 'var(--rare-color)';
    }
};
function EquipmentCard({ data }: { data: Equipment }) {
    const color = getColor(data.quality);

    return (
        <div className={styles.Card}>
            <div>
                <div>
                    <Image
                        src={data.img}
                        alt="image"
                        width={100}
                        height={100}
                    />
                    <div>quality, type,</div>
                </div>
                <div>
                    <h1>{data.name}</h1>
                    <div>Attack, Speed</div>
                    <div>Level Button</div>
                    <div>LV</div>
                    <div>stat</div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default EquipmentCard;
