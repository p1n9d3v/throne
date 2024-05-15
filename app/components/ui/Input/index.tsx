import React from 'react';
import styles from './index.module.css';
import cx from 'classnames';

interface Props extends React.ComponentProps<'input'> {
    size: 'small' | 'medium' | 'large';
}

function Input({ size = 'medium', ...otherProps }: Props) {
    return (
        <div
            className={cx(styles.Input, {
                [styles.Input___small]: size === 'small',
                [styles.Input___medium]: size === 'medium',
                [styles.Input___large]: size === 'large',
            })}
        >
            <input {...otherProps} />
        </div>
    );
}

export default Input;
