import css from './SearchBar.module.css';
import { Formik, Form, Field } from 'formik';

function SearchBar({ onSubmit }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ searchTopic: '' }}
        onSubmit={(values, actions) => {
          onSubmit(values.searchTopic);
          actions.resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              type="text"
              name="searchTopic"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </header>
  );
}

export default SearchBar;
