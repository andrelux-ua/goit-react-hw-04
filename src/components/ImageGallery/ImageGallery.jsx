import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ items, onImageClick }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => onImageClick(item)}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
