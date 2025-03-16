import { PuffLoader } from 'react-spinners';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.loaderContaier}>
      <PuffLoader color="#36d7b7" size={60} />
    </div>
  );
}

export default Loader;
