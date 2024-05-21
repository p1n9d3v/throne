import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './config';

export const signupWithEmailAndPassword = async (
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

export const signinWithEmailAndPassword = async (
    email: string,
    password: string,
) => {
    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
    );

    const user = userCredential.user;

    return user;
};

export const getAuthStateChanged = onAuthStateChanged.bind(null, auth);
