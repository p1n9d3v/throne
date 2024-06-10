import React from 'react';
import styles from './index.module.css';
import cx from 'classnames';
import useModal from '@/hooks/useModal';

function AnimateHamburgerButton() {
    const { isOpen, view, openModal, closeModal } = useModal();

    const handleClick = () => {
        isOpen ? closeModal() : openModal('sidebar', 'left');
    };

    console.log('view', view);
    return (
        <button
            type="button"
            className={styles.AnimateHamburgerButton}
            onClick={handleClick}
            // onMouseEnter={() => setIsActive(true)}
            // onMouseLeave={() => setIsActive(false)} set is mobile
        >
            <div
                className={cx(styles.AnimateHamburgerButton__hambug, {
                    [styles.AnimateHamburgerButton__hambug___active]:
                        isOpen && view?.type.name === 'Sidebar',
                })}
            ></div>
        </button>
    );
}

export default AnimateHamburgerButton;
