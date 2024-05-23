'use client';

import React from 'react';
import styles from './index.module.css';
import useAuth from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';

interface Props {}

function Header() {
    const { openModal } = useModal();
    const { user, signout } = useAuth();

    return (
        <header className={styles.Header}>
            <div className={styles.Header__Title}>Trone And Gear</div>
            <div className={styles.Header__Sign}>
                {!!user ? (
                    <button
                        onClick={() => {
                            signout();
                            location.reload();
                        }}
                    >
                        logout
                    </button>
                ) : (
                    <button onClick={() => openModal('sign')}>login</button>
                )}
            </div>
        </header>
    );
}

export default Header;
