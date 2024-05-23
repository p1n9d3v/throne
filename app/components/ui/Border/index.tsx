import styles from './index.module.css';

interface Props {
    text?: string;
}

function Border({ text }: Props) {
    if (text) {
        return <div className={styles.TextBorder}>{text}</div>;
    }
    return <div className={styles.Border}></div>;
}

export default Border;
