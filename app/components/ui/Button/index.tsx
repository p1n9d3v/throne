import React from 'react';
import cx from 'classnames';
import styles from './index.module.css';

interface Props extends React.ComponentProps<'button'> {
    size: 'small' | 'medium' | 'large';
    variant?: 'primary';
}

function Button({ size, variant, ...otherProps }: Props) {
    return (
        <button
            className={cx(styles.Button, {
                [styles.Button__large]: size === 'large',
                [styles.Button__medium]: size === 'medium',
                [styles.Button__small]: size === 'small',
            })}
            {...otherProps}
        >
            Click Me
        </button>
    );
}

export default Button;
