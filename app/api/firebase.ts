import { initializeApp } from 'firebase/app';
import {
    Auth,
    connectAuthEmulator,
    createUserWithEmailAndPassword,
    getAuth,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099');

export const signupWithEmailAndPass = async (
    auth: Auth,
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
