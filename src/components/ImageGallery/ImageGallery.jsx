import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;
