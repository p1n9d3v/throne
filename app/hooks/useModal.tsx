import { modalAtom, modalSelector } from '@/context/atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

function useModal() {
    const { isOpen, view, direction } = useRecoilValue(modalSelector);
    const setModalState = useSetRecoilState(modalAtom);

    const openModal = (
        view: string,
        direction: 'left' | 'right' | 'center',
    ) => {
        setModalState((prev) => ({
            ...prev,
            isOpen: true,
            view,
            direction,
        }));
    };

    const closeModal = () => {
        setModalState((prev) => ({
            ...prev,
            isOpen: false,
            view: '',
            direction: 'center',
        }));
    };

    return { isOpen, view, direction, openModal, closeModal };
}

export default useModal;
