import { signupWithEmailAndPass } from '@/api/auth';
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
            projectId: 'test-demo',
            firestore: {
                host: 'localhost',
                port: 8080,
            },
            storage: {
                host: 'localhost',
                port: 9199,
            },
        });
    });

    afterAll(async () => {
        await firebaseTestEnv!.cleanup();
    });

    test('signup with email and password', async () => {
        const email = 'test@gmail.com';
        const password = 'testpassword';

        const user = await assertSucceeds(
            signupWithEmailAndPass(email, password),
        );
        expect(user.email).toBe(email);
    });
});
