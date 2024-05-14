import Button from '@/components/ui/Button';
import styles from './index.module.css';

interface Props {}

function Header() {
    return (
        <header className={styles.Header}>
            <div className={styles.Header_title}>Trone</div>
            <div>
                <Button size="large" variant="primary">
                    Login
                </Button>
            </div>
        </header>
    );
}

export default Header;
