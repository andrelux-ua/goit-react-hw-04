import { PuffLoader } from 'react-spinners';

function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
      <PuffLoader color="#36d7b7" size={60} />
    </div>
  );
}

export default Loader;
