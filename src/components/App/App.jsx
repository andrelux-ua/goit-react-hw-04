import { useState, useEffect } from 'react';
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { fetchArticles } from '../../articleService';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = searchTopic => {
    setSearchTerm(`${searchTopic}/${Date.now()}`);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (searchTerm === '') {
      return;
    }

    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchArticles(searchTerm.split('/')[0], page);
        setArticles(prevArticles => [...prevArticles, ...data]);
      } catch {
        setError(true);
        toast.error('Please reload, there was an error!');
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [page, searchTerm]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {error && (
        <ErrorMessage message="Whoops, there was an error. Please reload." />
      )}
      {articles.length > 0 && (
        <ImageGallery items={articles} onImageClick={handleImageClick} />
      )}
      {isLoading && <Loader />}
      {articles.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMoreClick} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </>
  );
}

export default App;

// import { useState, useEffect } from 'react';
// import css from './App.module.css';
// import SearchBar from '../SearchBar/SearchBar';
// import ImageGallery from '../ImageGallery/ImageGallery';
// import { fetchArticles } from '../../articleService';
// import toast, { Toaster } from 'react-hot-toast';
// import Loader from '../Loader/Loader';
// import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
// import ErrorMessage from '../ErrorMessage/ErrorMessage';
// import ImageModal from '../ImageModal/ImageModal';

// function App() {
//   const [articles, setArticles] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [page, setPage] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleSearch = searchTopic => {
//     setSearchTerm(`${searchTopic}/${Date.now()}`);
//     setPage(1);
//     setArticles([]);
//   };

//   const handleLoadMoreClick = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   const handleImageClick = image => {
//     setSelectedImage(image);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   useEffect(() => {
//     if (searchTerm === '') {
//       return;
//     }

//     async function getData() {
//       try {
//         setError(false);
//         setIsLoading(true);
//         const data = await fetchArticles(searchTerm.split('/')[0], page);
//         setArticles(prevArticles => [...prevArticles, ...data]);
//       } catch {
//         setError(true);
//         toast.error('Please reload, there was an error!');
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     getData();
//   }, [page, searchTerm]);

//   return (
//     <>
//       <SearchBar onSubmit={handleSearch} />
//       <Toaster />
//       {error && (
//         <ErrorMessage message="Whoops, there was an error. Please reload." />
//       )}
//       {articles.length > 0 && (
//         <ImageGallery items={articles} onImageClick={handleImageClick} />
//       )}
//       {isLoading && <Loader />}
//       {articles.length > 0 && !isLoading && (
//         <LoadMoreBtn onClick={handleLoadMoreClick} />
//       )}
//       {selectedImage && (
//         <ImageModal
//           isOpen={!!selectedImage}
//           onClose={closeModal}
//           image={selectedImage}
//         />
//       )}
//     </>
//   );
// }

// export default App;
