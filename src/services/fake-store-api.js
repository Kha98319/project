
// lấy tất cả sản phẩm
import { Allproductss } from "../img/img";
// json server
const FakeStoreApi = {
    // tạo một hàm fetchAllProducts bất đồng bộ
    // dùng để fetch tất cả sản phẩm
    fetchAllProducts: async () => {
        // tạo một biến res để fetch json server 
        const res = await fetch('https://fakestoreapi.com/products');
        const result = res.json();
        return result;
    },
    //gọi hàm này để thực hiện truyền tham số id của products click vào hiện thông tin 
    fetchProductById: (productId) => {
        // tạo một biến res lưu object có id =  với id product id
          const res = Allproductss.filter((product) => product.id === parseInt(productId));
          // trả về res
        return res;
    },
    
    //fetch api và trả về dữ liệu có chữ thường và so sánh xem nó có trùng với query không
    fetchProductsBySearchQuery: async (query) => {
        const res = await fetch("https://fakestoreapi.com/products")
        const result = await res.json()
        return result.filter((product) => product.title.toLowerCase().includes(query))
    },
}

export { FakeStoreApi };

