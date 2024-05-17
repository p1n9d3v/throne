import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config';

export const signupWithEmailAndPass = async (
    email: string,
    password: string,
) => {
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
    );

    const user = userCredential.user;

    return user;
};
