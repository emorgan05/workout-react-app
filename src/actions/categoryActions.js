import CategoriesApi from '../api/categoriesApi';

export function fetchCategories() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATEGORIES' });
    return CategoriesApi.getCategories()
      .then(response => {
        return dispatch({ type: 'FETCH_CATEGORIES', payload: response });
      });
  };
}
