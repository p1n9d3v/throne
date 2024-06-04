'use client';

import React from 'react';
import styles from './index.module.css';
import useAuth from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
import AnimateHamburgerButton from '@/components/ui/AnimateHamburgerButton';

interface Props {}

function Header() {
    const { openModal } = useModal();
    const { user, signout } = useAuth();

    return (
        <header className={styles.Header}>
            <div className={styles.Header__col}>
                <AnimateHamburgerButton onClick={() => {}} />
                <div className={styles.Header__title}>Trone And Gear</div>
            </div>
            <div className={styles.Header__col}>
                <div className={styles.Header__sign}>
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
            </div>
        </header>
    );
}

export default Header;
