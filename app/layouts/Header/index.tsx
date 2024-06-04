'use client';

import React from 'react';
import styles from './index.module.css';
import useAuth from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
import AnimateHamburgerButton from '@/components/Modal/AnimateHamburgerButton';

interface Props {}

function Header() {
    const { isOpen, openModal } = useModal();
    const { user, signout } = useAuth();

    return (
        <header className={styles.Header}>
            <div className={styles.Header__col}>
                <AnimateHamburgerButton />
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
                        <button onClick={() => openModal('sign', 'center')}>
                            login
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
