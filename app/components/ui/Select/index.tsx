import React from 'react';
import { Controller, Control } from 'react-hook-form';
import ReactSelect from 'react-select';

type Option = {
    value: any;
    label: string;
    color: string;
};
interface Props {
    control: Control<any>;
    options: Option[];
    defaultValue: Option;
    name: string;
    inputId: string;
    size: 'small' | 'medium' | 'large';
}

function Select({ control, options, defaultValue, size, ...rest }: Props) {
    return (
        <Controller
            control={control}
            name="quality"
            defaultValue={defaultValue}
            render={({ field: { onChange, value, ref } }) => (
                <ReactSelect
                    {...rest}
                    ref={ref}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: 'var(--gray-800)',
                            borderRadius: '.8rem',
                            padding: '.6rem .4rem',
                            fontSize: '1.6rem',
                            outline: state.isFocused
                                ? '1px solid var(--primary-color)'
                                : '1px solid var(--gray-300)',
                            border: 'none',
                        }),
                        placeholder: (baseStyles) => ({
                            ...baseStyles,
                            color: 'var(--gray-500)',
                        }),
                        input: (baseStyles) => ({
                            ...baseStyles,
                            color: '#fff',
                        }),
                        option: (baseStyles, state) => ({
                            ...baseStyles,
                            color: state.isFocused
                                ? 'var(--primary-color)'
                                : '#fff',
                            backgroundColor: state.isFocused
                                ? 'var(--gray-300)'
                                : 'var(--gray-800)',
                            fontSize: '1.6rem',
                            transition: 'background-color .1s; color .1s',
                        }),
                        singleValue: (baseStyles) => ({
                            ...baseStyles,
                            color: '#fff',
                        }),
                        menu: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: 'var(--gray-800)',
                        }),
                    }}
                    defaultValue={value}
                    options={options}
                    value={options.find((option) => option.value === value)}
                    onChange={(option) => onChange(option.value)}
                />
            )}
        />
    );
}

export default Select;
