import { signupWithEmailAndPass } from '@/api/firebase';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './index.module.css';
import Input from '../ui/Input';
import Button from '../ui/Button';

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
    const { register, handleSubmit, resetField, formState } =
        useForm<FormValues>({
            resolver: yupResolver(schema),
        });
    const onSignUpSubmit = async (data: FormValues) => {
        const { email, password } = data;
        const user = await signupWithEmailAndPass(email, password);
        console.log(user);
    };
    return (
        <form onSubmit={handleSubmit(onSignUpSubmit)} className={styles.SignUp}>
            <h1 className={styles.SignUp__title}>Sign Up</h1>
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
                Signup
            </Button>
        </form>
    );
}

export default SignUp;
