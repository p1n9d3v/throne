'use client';

import React from 'react';
import styles from './index.module.css';
import Modal from '@/components/Modal';
import Input from '@/components/ui/Input';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';

interface Props {}

interface FormValues {
    email: string;
    password: string;
}

function Header() {
    const [openModal, setOpenModal] = React.useState(false);

    const { register, handleSubmit, resetField } = useForm<FormValues>({});

    const onSignUpSubmit = (data: FormValues) => {
        console.log(data);
    };
    return (
        <header className={styles.Header}>
            <div className={styles.Header_title}>Trone</div>
            <button onClick={() => setOpenModal(true)}>Login</button>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
                <form onSubmit={handleSubmit(onSignUpSubmit)}>
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
