import React from 'react';
import styles from './index.module.css';
import { IoClose } from 'react-icons/io5';
import cx from 'classnames';

interface Props extends React.PropsWithChildren {
    isOpen: boolean;
    onClose: () => void;
    style?: React.CSSProperties;
}

function Modal({ isOpen, onClose, style, children }: Props) {
    const [isAnimateEnd, setIsAnimateEnd] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    const handleAnimationEnd = React.useCallback(() => {
        setIsAnimateEnd(true);
        setTimeout(() => {
            onClose();
            setIsAnimateEnd(false);
        }, 200);
    }, [onClose]);

    React.useEffect(() => {
        const onClickOutside = (e: Event) => {
            if (
                isOpen &&
                ref.current &&
                !ref.current.contains(e.target as HTMLElement)
            )
                handleAnimationEnd();
        };

        document.addEventListener('mousedown', onClickOutside);

        return () => {
            document.removeEventListener('mousedown', onClickOutside);
        };
    }, [isOpen, handleAnimationEnd]);

    if (!isOpen) return null;

    return (
        <div
            role="dialog"
            className={cx(styles.Modal, {
                [styles.Modal___fadeIn]: isOpen,
                [styles.Modal___fadeOut]: isAnimateEnd,
            })}
        >
            <div ref={ref} className={styles.Modal__content} style={style}>
                <button
                    type="button"
                    onClick={handleAnimationEnd}
                    className={styles.Modal__close}
                    aria-label="close modal"
                >
                    <IoClose size={32} />
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
