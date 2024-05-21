'use client';

import useModal from '@/hooks/useModal';
import Modal from '.';

function ModalProvider() {
    const { isOpen, view, closeModal } = useModal();
    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            {view}
        </Modal>
    );
}

export default ModalProvider;
