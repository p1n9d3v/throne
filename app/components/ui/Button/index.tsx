import React from 'react';
import cx from 'classnames';
import styles from './index.module.css';

interface Props extends React.ComponentProps<'button'> {
    size: 'small' | 'medium' | 'large';
    color: 'primary';
    variant: 'contained' | 'outlined' | 'text';
}

function Button({ size, color = 'primary', variant, ...otherProps }: Props) {
    return (
        <button
            className={cx(
                styles.Button,
                {
                    [styles.Button__large]: size === 'large',
                    [styles.Button__medium]: size === 'medium',
                    [styles.Button__small]: size === 'small',
                },
                {
                    [styles.Button__contained]: variant === 'contained',
                    [styles.Button__outlined]: variant === 'outlined',
                    [styles.Button__text]: variant === 'text',
                },
                {
                    [styles.Button__contained___primary]:
                        variant === 'contained' && color === 'primary',
                    [styles.Button__outlined___primary]:
                        variant === 'outlined' && color === 'primary',
                    [styles.Button__text___primary]:
                        variant === 'text' && color === 'primary',
                },
            )}
            {...otherProps}
        >
            Click Me
        </button>
    );
}

export default Button;
