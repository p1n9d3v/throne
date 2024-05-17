import React from 'react';
import Signup from '@/components/SignUp';
import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';

interface ModalState {
    isOpen: boolean;
    view: string;
}
const modalAtom = atom<ModalState>({
    key: 'modal',
    default: {
        isOpen: false,
        view: '',
    },
});

const convertViewToComponent = (view: string) => {
    switch (view) {
        case 'signup':
            return <Signup />;
        default:
            return null;
    }
};

const modalSelector = selector({
    key: 'modalSelector',
    get: ({ get }) => ({
        ...get(modalAtom),
        view: convertViewToComponent(get(modalAtom).view),
    }),
});

export const useModal = () => {
    const { isOpen, view } = useRecoilValue(modalSelector);
    const setModalState = useSetRecoilState(modalAtom);

    const openModal = (view: string) => {
        setModalState((prev) => ({
            ...prev,
            isOpen: true,
            view,
        }));
    };

    const closeModal = () => {
        setModalState((prev) => ({
            ...prev,
            isOpen: false,
            view: '',
        }));
    };
    return { isOpen, view, openModal, closeModal };
};
