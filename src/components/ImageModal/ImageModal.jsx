import Modal from 'react-modal';
import { useEffect } from 'react';
import css from './ImageModule.module.css';

Modal.setAppElement('#root');

function ImageModal({ isOpen, onClose, image }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modalOverlay}
    >
      <div onClick={onClose} className={css.modalContent}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.moduleImage}
        />
      </div>
    </Modal>
  );
}

export default ImageModal;
