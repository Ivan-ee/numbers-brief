import {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {motion, AnimatePresence} from 'framer-motion';

export const SuccessModal = ({show, onClose, initial}) => {
    const handleOverlayClick = (e) => {
        e.stopPropagation();
        onClose();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [show]);

    return ReactDOM.createPortal(
        <AnimatePresence>
            {show && (
                <motion.div
                    className="modal-wrapper"
                    onClick={handleOverlayClick}
                    initial={{opacity: initial}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.4}}
                >
                    <div
                        className="modal"
                        onClick={handleModalClick}
                    >
                        <div className="title regular_24">
                            Бриф отправлен
                        </div>
                        <div className="button regular_24" onClick={onClose}>
                            Закрыть
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};
