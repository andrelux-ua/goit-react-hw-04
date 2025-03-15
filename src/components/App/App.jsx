import { useState, useEffect } from 'react';
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { fetchArticles } from '../../articleService';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = searchTopic => {
    setSearchTerm(`${searchTopic}/${Date.now()}`);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMoreClick = () => {
    setPage(page + 1);
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
        setArticles(prevArticles => {
          return [...prevArticles, ...data];
        });
      } catch {
        setError(true);
        toast.error('Please reload there was an error!!!!');
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [page, searchTerm]);
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <b>Whoops there was an error plz reload...</b>}

      {articles.length > 0 && <ImageGallery items={articles} />}

      {isLoading && <b>Loading data, please wait...</b>}
      <main>
        <section>
          <h1>Vite + React</h1>
          {articles.length > 0 && !isLoading && (
            <button onClick={handleLoadMoreClick}>
              Load more articles {page}
            </button>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
