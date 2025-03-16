import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <li
          className={css.galleryItem}
          key={item.id}
          onClick={() => onImageClick(item)}
        >
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
