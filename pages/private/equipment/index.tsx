import Input from '@/components/ui/Input';
import Select from 'react-select';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

const qualityOptions = [
    { value: '영웅 2단', label: '영웅 2단', color: 'var(--purple-700)' },
    { value: '영웅', label: '영웅', color: 'var(--purple-500)' },
    { value: '희귀', label: '희귀', color: 'var(--blue-500)' },
    { value: '고급', label: '고급', color: 'var(--green-500)' },
];

function Equipment() {
    const { register, handleSubmit, resetField, control } = useForm<any>({});
    return (
        <div>
            <div
                style={{
                    backgroundImage:
                        'url(https://assets.playnccdn.com/uikit/cnb/3.1.0/img/header/header-tl-2023.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '20rem',
                }}
            ></div>

            <form style={{ padding: 'var(--horizontal-padding)' }}>
                <Input
                    type="text"
                    placeholder="무기 이름"
                    {...register('name')}
                    size="medium"
                    onClear={() => resetField('name')}
                />
                <Controller
                    control={control}
                    name="quality"
                    defaultValue={qualityOptions[0]}
                    render={({ field: { onChange, value, ref } }) => (
                        <Select
                            ref={ref}
                            // styles={{
                            // 	contro:
                            // }}
                            defaultValue={value}
                            inputId="quality"
                            name="quality"
                            options={qualityOptions}
                            value={qualityOptions.find(
                                (option) => option.value === value,
                            )}
                            onChange={(option) => onChange(option.value)}
                        />
                    )}
                />
            </form>
            {/* Name */}
            {/* Type */}
        </div>
    );
}

export default Equipment;
