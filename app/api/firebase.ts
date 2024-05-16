import { initializeApp } from 'firebase/app';
import {
    Auth,
    connectAuthEmulator,
    createUserWithEmailAndPassword,
    getAuth,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099');

export const signupWithEmailAndPass = async (
    email: string,
    password: string,
) => {
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
    );

    console.log(userCredential);
    const user = userCredential.user;
    console.log(user);
};
