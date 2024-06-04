import React from 'react';
import useModal from '@/hooks/useModal';
import styles from './index.module.css';
import cx from 'classnames';

function Sidebar() {
    const { isOpen } = useModal();
    console.log(isOpen);
    return (
        <div
            className={cx(styles.Sidebar, {
                [styles.Sidebar___open]: isOpen,
                [styles.Sidebar___close]: !isOpen,
            })}
        ></div>
    );
}

export default Sidebar;
