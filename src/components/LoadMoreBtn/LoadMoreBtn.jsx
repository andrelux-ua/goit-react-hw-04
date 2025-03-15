function LoadMoreBtn({ onClick }) {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <button
        onClick={onClick}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
