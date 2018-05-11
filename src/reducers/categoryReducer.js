export function categoryReducer(state, action) {
  switch(action.type) {
    case 'LOADING_CATEGORIES':
      return Object.assign({}, state, {loading: true});

    case 'FETCH_CATEGORIES':
      return Object.assign({}, state, {loading: false, categories: [].concat(state.categories, action.payload) });

    default:
      return state;
  }
}
