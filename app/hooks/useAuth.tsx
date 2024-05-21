import React from 'react';
import {
    getAuthStateChanged,
    signinWithEmailAndPassword,
    signupWithEmailAndPassword,
} from '@/api/auth';
import { useMutation } from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';
import { User } from 'firebase/auth';

type SignParams = {
    email: string;
    password: string;
};

function useAuth() {
    const [user, setUser] = React.useState<User | null>(null);
    React.useLayoutEffect(() => {
        getAuthStateChanged((user) => {
            if (user) setUser(user);
        });
    }, []);

    const signupWithEmailAndPasswordMutation = useMutation<
        User,
        FirebaseError,
        SignParams
    >({
        mutationFn: ({ email, password }: SignParams) =>
            signupWithEmailAndPassword(email, password),
    });

    const signinWithEmailAndPasswordMutation = useMutation<
        User,
        FirebaseError,
        SignParams
    >({
        mutationFn: ({ email, password }: SignParams) =>
            signinWithEmailAndPassword(email, password),
    });

    return {
        user,
        signupWithEmailAndPasswordMutation,
        signinWithEmailAndPasswordMutation,
    };
}

export default useAuth;
