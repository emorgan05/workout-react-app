export function categoryReducer(state = {}, action) {
  switch(action.type) {
    case 'LOADING_CATEGORIES':
      return Object.assign({}, {loading: true});

    case 'FETCH_CATEGORIES':
      return Object.assign({}, {loading: false, categories: [].concat(action.payload) });

    default:
      return state;
  }
}
