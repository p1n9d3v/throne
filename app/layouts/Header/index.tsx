'use client';

import React from 'react';
import styles from './index.module.css';
import Modal from '@/components/Modal';
import Input from '@/components/ui/Input';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {}

interface FormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup
        .string()
        .required()
        .oneOf([yup.ref('password'), ''], 'Passwords must match'),
});

function Header() {
    const [openModal, setOpenModal] = React.useState(false);

    const { register, handleSubmit, resetField, formState } =
        useForm<FormValues>({
            resolver: yupResolver(schema),
        });

    const onSignUpSubmit = (data: FormValues) => {
        console.log(data);
    };
    console.log(formState.errors);

    return (
        <header className={styles.Header}>
            <div className={styles.Header_title}>Trone</div>
            <button onClick={() => setOpenModal(true)}>Login</button>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
                <form
                    onSubmit={handleSubmit(onSignUpSubmit)}
                    className={styles.SignUp}
                >
                    <Input
                        type="email"
                        {...register('email')}
                        size="medium"
                        onClear={() => resetField('email')}
                    />
                    <Input
                        type="password"
                        {...register('password')}
                        size="medium"
                        onClear={() => resetField('password')}
                    />
                    <Input
                        type="password"
                        {...register('confirmPassword')}
                        size="medium"
                        onClear={() => resetField('password')}
                    />
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Signup
                    </Button>
                </form>
            </Modal>
        </header>
    );
}

export default Header;
