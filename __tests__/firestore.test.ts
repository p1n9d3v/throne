import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {
    RulesTestEnvironment,
    assertFails,
    assertSucceeds,
    initializeTestEnvironment,
} from '@firebase/rules-unit-testing';
import { addDoc, collection, queryPagination } from '@/api/firestore';
import { connectFirestoreEmulator, getDocs } from 'firebase/firestore';
import { firestore } from '@/api/config';

connectFirestoreEmulator(firestore, 'localhost', 8080);
describe('Page', () => {
    let firebaseTestEnv: RulesTestEnvironment | null;
    beforeAll(async () => {
        firebaseTestEnv = await initializeTestEnvironment({
            projectId: 'test-firestore',
        });
    });

    afterAll(async () => {
        await firebaseTestEnv!.cleanup();
    });

    describe('queryPagination', () => {
        const mockData = [...Array(15)].map((_, i) => ({
            id: i,
            name: `name-${i}`,
        }));
        beforeAll(async () => {
            const apis = mockData.map((data) => addDoc(['test'], data));

            await Promise.all(apis);
        });

        test('exist pre data', async () => {
            const colRef = collection(['test']);
            const resp = await getDocs(colRef);

            expect(resp.size).toBe(15);
        });

        test('first page', async () => {
            const params: any = {
                type: 'first',
                pageSize: 5,
                orderType: 'asc',
                orderByField: 'id',
                paths: ['test'],
            };

            const resp = await queryPagination({
                ...params,
            });

            expect(resp.data.length).toBe(5);
        });

        test('last page', async () => {
            const params: any = {
                type: 'last',
                pageSize: 5,
                orderType: 'asc',
                orderByField: 'id',
                paths: ['test'],
            };

            const resp = await queryPagination({
                ...params,
            });

            expect(resp.data.length).toBe(5);
            expect(resp.data[0].id).toBe(10);
        });

        test('next page', async () => {
            const params: any = {
                type: 'first',
                pageSize: 5,
                orderType: 'asc',
                orderByField: 'id',
                paths: ['test'],
            };

            const first = await queryPagination(params);

            const { lastVisible } = first;
            params.type = 'next';

            const next = await queryPagination({
                ...params,
                lastVisible,
            });

            expect(next.data.length).toBe(5);
            expect(next.data[0].id).toBe(5);
        });

        test('prev page', async () => {
            const params: any = {
                type: 'first',
                pageSize: 5,
                orderType: 'asc',
                orderByField: 'id',
                paths: ['test'],
            };

            const first = await queryPagination(params);

            const { lastVisible: firstLastVisible } = first;
            params.type = 'next';

            const next = await queryPagination({
                ...params,
                lastVisible: firstLastVisible,
            });

            const { firstVisible: nextFirstVisible } = next;
            params.type = 'prev';

            const prev = await queryPagination({
                ...params,
                firstVisible: nextFirstVisible,
            });

            expect(prev.data.length).toBe(5);
            expect(prev.data[0].id).toBe(0);
        });
    });
});
