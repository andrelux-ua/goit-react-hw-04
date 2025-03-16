import Masonry from 'react-masonry-css';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

function ImageGallery({ items, onImageClick }) {
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className={css.masonryGrid}
      columnClassName={css.masonryColumn}
    >
      {items.map(item => (
        <div key={item.id} onClick={() => onImageClick(item)}>
          <ImageCard item={item} />
        </div>
      ))}
    </Masonry>
  );
}

export default ImageGallery;

// import ImageCard from '../ImageCard/ImageCard';
// import css from './ImageGallery.module.css';

// function ImageGallery({ items, onImageClick }) {
//   return (
//     <ul className={css.gallery}>
//       {items.map(item => (
//         <li
//           className={css.galleryItem}
//           key={item.id}
//           onClick={() => onImageClick(item)}
//         >
//           <ImageCard item={item} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ImageGallery;
