import React from 'react';
import SignUp from '@/components/SignUp';
import { atom, selector } from 'recoil';
import SignIn from '@/components/SignIn';
import Sign from '@/components/Sign';

interface ModalState {
    isOpen: boolean;
    view: string;
}
export const modalAtom = atom<ModalState>({
    key: 'modal',
    default: {
        isOpen: false,
        view: '',
    },
});

export const modalSelector = selector({
    key: 'modalSelector',
    get: ({ get }) => ({
        ...get(modalAtom),
        view: convertViewToComponent(get(modalAtom).view),
    }),
});

const convertViewToComponent = (view: string) => {
    switch (view) {
        case 'sign':
            return <Sign />;
        default:
            return null;
    }
};
