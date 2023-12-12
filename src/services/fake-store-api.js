import { Allproductss } from "../img/img";
const FakeStoreApi = {
    fetchAllProducts: async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const result = res.json();
        return result;
    },
    fetchProductById: (productId) => {

          const res = Allproductss.filter((product) => product.id === parseInt(productId));

        return res;
    },
    
    //fetch api và trả về dữ liệu có chữ thường và so sánh xem nó có trùng với query không
    fetchProductsBySearchQuery: async (query) => {
        const res = await fetch("https://fakestoreapi.com/products")
        const result = await res.json()
        return result.filter((product) => product.title.toLowerCase().includes(query))
    },
}

export { FakeStoreApi }