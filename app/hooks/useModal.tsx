import { modalAtom, modalSelector } from '@/context/atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

function useModal() {
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
}

export default useModal;
