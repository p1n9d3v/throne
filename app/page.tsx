import Button from './components/ui/Button';
import styles from './index.module.css';

export default function Home() {
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
                <ThroneAndGearLogo />
            </div>
        </div>
    );
}

function ThroneAndGearLogo() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.ThroneAndGearLogo}
        >
            <defs>
                <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop
                        offset="0%"
                        style={{ stopColor: '#f5deb3', stopOpacity: 1 }}
                    />
                    <stop
                        offset="100%"
                        style={{ stopColor: '#b8860b', stopOpacity: 1 }}
                    />
                </linearGradient>
            </defs>
            <text
                x="400"
                y="120"
                className={styles.ThroneAndGearLogo__MainText}
            >
                THRONE
            </text>
            <text x="400" y="200" className={styles.ThroneAndGearLogo__And}>
                AND
            </text>
            <text
                x="400"
                y="280"
                className={styles.ThroneAndGearLogo__MainText}
            >
                GEAR
            </text>
        </svg>
    );
}
