import Modal from 'react-modal';
import { useEffect } from 'react';

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
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
        content: {
          maxWidth: '80vw',
          maxHeight: '80vh',
          margin: 'auto',
          padding: 0,
          background: 'transparent',
          border: 'none',
        },
      }}
    >
      <div
        onClick={onClose}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          style={{ width: '100%', maxWidth: '800px', cursor: 'pointer' }}
        />
      </div>
    </Modal>
  );
}

export default ImageModal;
