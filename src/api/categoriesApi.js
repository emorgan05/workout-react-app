class CategoriesApi {
  static getCategories() {
    const request = new Request('http://localhost:3000/categories', {
      method: 'GET'
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error)
  }
}

export default CategoriesApi;
