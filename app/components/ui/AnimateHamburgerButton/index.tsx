import React from 'react';
import styles from './index.module.css';
import cx from 'classnames';

interface Props extends React.ComponentProps<'button'> {}

function AnimateHamburgerButton({ onClick }: Props) {
    const [isActive, setIsActive] = React.useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsActive(!isActive);
        onClick && onClick(e);
    };

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
                    [styles.AnimateHamburgerButton__hambug___active]: isActive,
                })}
            ></div>
        </button>
    );
}

export default AnimateHamburgerButton;
