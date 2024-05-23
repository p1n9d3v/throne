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

function SignUp() {
    const { closeModal } = useModal();
    const { register, handleSubmit, resetField, reset, formState } =
        useForm<FormValues>({
            resolver: yupResolver(schema),
        });
    const {
        signupWithEmailAndPasswordMutation: { mutate: signup, status },
    } = useAuth();

    const onSignUpSubmit = async (data: FormValues) => {
        const { email, password } = data;
        await signup({
            email,
            password,
        });
    };

    React.useEffect(() => {
        if (status === 'success') {
            closeModal();
        }
    }, [status]);

    return (
        <form onSubmit={handleSubmit(onSignUpSubmit)} className={styles.SignUp}>
            {status === 'error' && (
                <div style={{ color: 'red', textAlign: 'right' }}>
                    회원가입을 다시 시도해주세요
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
            <Input
                type="password"
                placeholder="Confirm Password"
                {...register('confirmPassword')}
                size="medium"
                onClear={() => resetField('password')}
                error={formState.errors.confirmPassword?.message}
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
                회원가입
            </Button>
        </form>
    );
}

export default SignUp;
