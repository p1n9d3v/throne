import React from 'react';
import styles from './index.module.css';
import cx from 'classnames';
import { IoClose } from 'react-icons/io5';

interface BaseInput
    extends Omit<React.ComponentProps<'input'>, 'icon' | 'size'> {}
interface Props extends BaseInput {
    size: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    onClear?: () => void;
}

function Input({ size = 'medium', icon, onClear, ...otherProps }: Props) {
    return (
        <div
            className={cx(styles.Input, {
                [styles.Input___small]: size === 'small',
                [styles.Input___medium]: size === 'medium',
                [styles.Input___large]: size === 'large',
                [styles.Input___withOnClear]: !!onClear,
            })}
        >
            {icon && <>{icon}</>}
            <input {...otherProps} />
            {otherProps.value && onClear && (
                <button
                    onClick={onClear}
                    className={styles.Input___clearButton}
                >
                    <IoClose
                        size={24}
                        style={{
                            cursor: 'pointer',
                        }}
                    />
                </button>
            )}
        </div>
    );
}

export default Input;
