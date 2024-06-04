'use client';

import useModal from '@/hooks/useModal';
import Modal from '.';

function ModalProvider() {
    const { isOpen, view, closeModal, direction } = useModal();
    return (
        <Modal isOpen={isOpen} onClose={closeModal} direction={direction}>
            {view}
        </Modal>
    );
}

export default ModalProvider;
