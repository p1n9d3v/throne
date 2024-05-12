import styles from './index.module.css';

interface Props {}

function Header() {
    return (
        <header className={styles.Header}>
            <div className={styles.Header_title}>Trone</div>
        </header>
    );
}

export default Header;
