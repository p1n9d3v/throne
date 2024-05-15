'use client';

import React from 'react';
import styles from './index.module.css';
import Modal from '@/components/Modal';
import Input from '@/components/ui/Input';

interface Props {}

function Header() {
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <header className={styles.Header}>
            <div className={styles.Header_title}>Trone</div>
            <button onClick={() => setOpenModal(true)}>Login</button>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
                <Input />
            </Modal>
        </header>
    );
}

export default Header;
