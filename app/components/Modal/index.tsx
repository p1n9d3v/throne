import React from 'react';
import styles from './index.module.css';
import { IoClose } from 'react-icons/io5';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    style?: React.CSSProperties;
}

function Modal({ isOpen, onClose, style }: Props) {
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const onClickOutside = (e: Event) => {
            if (
                isOpen &&
                ref.current &&
                !ref.current.contains(e.target as HTMLElement)
            )
                onClose();
        };

        document.addEventListener('mousedown', onClickOutside);

        return () => {
            document.removeEventListener('mousedown', onClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div role="dialog" className={styles.Modal}>
            <div ref={ref} className={styles.Modal__content} style={style}>
                <button
                    onClick={onClose}
                    className={styles.Modal__close}
                    aria-label="close modal"
                >
                    <IoClose size={24} />
                </button>
                123123
            </div>
        </div>
    );
}

export default Modal;
