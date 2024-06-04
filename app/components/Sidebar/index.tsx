import React from 'react';
import Modal from '../Modal';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}
function Sidebar({ isOpen, onClose }: Props) {
    return (
        <Modal
            direction="left"
            isOpen={isOpen}
            onClose={onClose}
            style={{
                width: '200px',
                height: '100dvh',
                padding: '1rem',
            }}
        >
            <div>123</div>
        </Modal>
    );
}

export default Sidebar;
