'use client';

import React from 'react';
import styles from './index.module.css';
import { useModal } from '@/context/atom';

interface Props {}

function Header() {
    const { openModal } = useModal();

    return (
        <header className={styles.Header}>
            <div className={styles.Header_title}>Trone</div>
            <button onClick={() => openModal('signup')}>Login</button>
        </header>
    );
}

export default Header;
