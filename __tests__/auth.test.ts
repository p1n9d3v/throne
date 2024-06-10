import {
    signinWithEmailAndPassword,
    signupWithEmailAndPassword,
} from '@/api/auth';
import '@testing-library/jest-dom';
import {
    RulesTestEnvironment,
    assertFails,
    assertSucceeds,
    initializeTestEnvironment,
} from '@firebase/rules-unit-testing';

describe('Auth', () => {
    let firebaseTestEnv: RulesTestEnvironment | null;
    beforeAll(async () => {
        firebaseTestEnv = await initializeTestEnvironment({
            projectId: 'demo-auth',
        });
    });

    afterAll(async () => {
        await firebaseTestEnv!.cleanup();
    });

    test('signup with email and password', async () => {
        const email = 'test@gmail.com';
        const password = 'testpassword';

        const user = await assertSucceeds(
            signupWithEmailAndPassword(email, password),
        );
        expect(user.email).toBe(email);
    });

    test('signin with email and password', async () => {
        const email = 'test@gmail.com';
        const password = 'testpassword';

        const user = await assertSucceeds(
            signinWithEmailAndPassword(email, password),
        );

        expect(user.email).toBe(email);
    });
});
