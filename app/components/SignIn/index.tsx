import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './index.module.css';
import Input from '../ui/Input';
import Button from '../ui/Button';
import useAuth from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';

interface FormValues {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
});

function SignIn() {
    const { closeModal } = useModal();
    const { register, handleSubmit, resetField, reset, formState } =
        useForm<FormValues>({
            resolver: yupResolver(schema),
        });

    const {
        signinWithEmailAndPasswordMutation: { mutate: signin, status },
    } = useAuth();

    const onSignInSubmit = async (data: FormValues) => {
        const { email, password } = data;
        signin({ email, password });
    };

    React.useEffect(() => {
        if (status === 'success') {
            closeModal();
        }
    }, [status]);

    return (
        <form onSubmit={handleSubmit(onSignInSubmit)} className={styles.SignIn}>
            <h1 className={styles.SignIn__title}>Sign In</h1>
            {status === 'error' && (
                <div style={{ color: 'red', textAlign: 'right' }}>
                    로그인에 실패하였습니다. 다시 시도해주세요.
                </div>
            )}
            <Input
                type="email"
                placeholder="Email"
                {...register('email')}
                size="medium"
                onClear={() => resetField('email')}
                error={formState.errors.email?.message}
            />
            <Input
                type="password"
                placeholder="Password"
                {...register('password')}
                size="medium"
                onClear={() => resetField('password')}
                error={formState.errors.password?.message}
            />
            <Button
                size="large"
                variant="contained"
                color="primary"
                type="submit"
                style={{
                    marginLeft: 'auto',
                }}
            >
                SignIn
            </Button>
        </form>
    );
}

export default SignIn;
