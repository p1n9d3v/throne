'use client';

import React from 'react';
import styles from './index.module.css';
import useAuth from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';

interface Props {}

function Header() {
    const { openModal } = useModal();

    return (
        <header className={styles.Header}>
            <div className={styles.Header_title}>Trone</div>
            <button onClick={() => openModal('sign')} style={{ color: '#fff' }}>
                Login
            </button>
            <button onClick={() => openModal('signup')}>SignUp</button>
        </header>
    );
}

export default Header;
