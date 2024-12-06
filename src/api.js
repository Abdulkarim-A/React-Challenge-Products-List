const api = {
    async getProducts() {
      const response = await fetch('https://fakestoreapi.com/products');
      return await response.json();
    },
    async deleteProduct(id) {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE',
      });
      return await response.json();
    },
    async createProduct(product) {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      return await response.json();
    },
    async updateProduct(id, product) {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      return await response.json();
    },
  };
  
  export default api;