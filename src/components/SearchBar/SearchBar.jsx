import css from './SearchBar.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const validationSchema = Yup.object({
  searchTopic: Yup.string()
    .trim()
    .min(1, 'Please enter a search term')
    .required('Search field cannot be empty'),
});

function SearchBar({ onSubmit }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ searchTopic: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          if (!values.searchTopic.trim()) {
            toast.error('Please enter a search term'); // 🔥 Показуємо повідомлення про помилку
            return;
          }
          onSubmit(values.searchTopic);
          actions.resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className={css.form}>
            <div>
              <Field
                type="text"
                name="searchTopic"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                className={css.input}
              />

              <button type="submit" className={css.button}>
                Search
              </button>
            </div>

            <div>
              <ErrorMessage
                name="searchTopic"
                component="div"
                className={css.errorText}
              />
            </div>
          </Form>
        )}
      </Formik>
    </header>
  );
}

export default SearchBar;
