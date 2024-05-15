import React from 'react';
import Button from '@/components/ui/Button';
import styles from './index.module.css';
import { signupWithEmailAndPass } from '@/api/firebase';
import Modal from '@/components/Modal';

interface Props {}

function Header() {
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <header className={styles.Header}>
            <div className={styles.Header_title}>Trone</div>
            <button onClick={() => setOpenModal(true)}>Login</button>
            <Modal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            ></Modal>
        </header>
    );
}

export default Header;
