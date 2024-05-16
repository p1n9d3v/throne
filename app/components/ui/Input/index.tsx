import React from 'react';
import styles from './index.module.css';
import cx from 'classnames';
import { IoClose } from 'react-icons/io5';
import { UseFormRegisterReturn } from 'react-hook-form';

interface BaseInput
    extends Omit<React.ComponentProps<'input'>, 'icon' | 'size'> {}

interface Props extends BaseInput {
    size: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    onClear?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, Props & UseFormRegisterReturn>(
    ({ size, icon, onClear, ...otherProps }, ref) => {
        const [hasValue, setHasValue] = React.useState(false);

        React.useEffect(() => {
            const inputElement =
                ref as React.MutableRefObject<HTMLInputElement>;
            if (inputElement && inputElement.current) {
                setHasValue(inputElement.current.value !== '');
            }
        }, [ref]);

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setHasValue(e.target.value !== '');
            if (otherProps.onChange) {
                otherProps.onChange(e);
            }
        };

        const handleClear = () => {
            setHasValue(false);
            if (onClear) {
                onClear();
            }
        };
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
                <input {...otherProps} ref={ref} onChange={handleInputChange} />
                {hasValue && !!onClear && (
                    <button
                        type="button"
                        onClick={handleClear}
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
    },
);

Input.displayName = 'Input';

export default Input;
