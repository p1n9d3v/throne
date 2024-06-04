import React from 'react';
import styles from './index.module.css';
import cx from 'classnames';

interface Props extends React.ComponentProps<'button'> {}

function AnimateHamburger({ onClick }: Props) {
    const [isActive, setIsActive] = React.useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsActive(!isActive);
        onClick && onClick(e);
    };

    return (
        <button
            type="button"
            className={styles.AnimateHamburger}
            onClick={handleClick}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
        >
            <div
                className={cx(styles.AnimateHamburger__hambug, {
                    [styles.AnimateHamburger__hambug___active]: isActive,
                })}
            ></div>
        </button>
    );
}

export default AnimateHamburger;
