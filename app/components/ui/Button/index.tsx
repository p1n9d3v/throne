import React from 'react';
import cx from 'classnames';
import styles from './index.module.css';

interface Props
    extends React.ComponentProps<'button'>,
        React.PropsWithChildren {
    color?: 'primary';
    variant: 'contained' | 'outlined' | 'text';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
}

function Button({
    size,
    color = 'primary',
    variant,
    children,
    ...otherProps
}: Props) {
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
            style={{ width: otherProps.fullWidth ? '100%' : 'fit-content' }}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default Button;
