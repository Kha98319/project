import { createContext, useContext, useState } from "react"
// tạo một giá trị khởi tạo gồm
// cart bằng mảng rỗng 
// hàm cartItemCount 
// những cái còn lại là hàm trả về null
const initialState = {
    cart: [],
    cartItemCount: () => 0,
    addToCart: () => null,
    removeFromCart: () => null,
    increaseQuantity: () => null,
    decreaseQuantity: () => null,
}
// phần cart
// tọa một context gán giá trị từ biến initialState
const CartContext = createContext(initialState)
// tạo một hàm useCart trả về useContext từ truyền vào biến CartContext
const useCart = () => useContext(CartContext)

// tạo hàm CartProvider có tham số children 
const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState(initialState.cart)
    const cartItemCount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }
// add card
    const addToCart = (product) => {
  
        const productIdx = cart.findIndex((item) => item.product.id === product.id)
        if (productIdx !== -1) {
            increaseQuantity(product.id)
        } else {
            setCart([...cart, { product, quantity: 1 }])
        }
    }
    // xóa hết  card khi đã thanh toán
    const RemoveAllCart = ()=>{
        setCart([])
    }
    // xóa card
    const removeFromCart = (productId) => {
        // set card = lặp quá tất cả các id trong card và trả về giá trị khác productId
        setCart(cart.filter((item) => item.product.id !== productId))
    }
    // tăng card 
    const increaseQuantity = (productId) => {

        const copy = cart.slice()
        const productIdx = copy.findIndex((item) => item.product.id === productId)
        if (productIdx !== -1) {
            copy[productIdx].quantity += 1
            setCart(copy)
        }
    }
    // giảm card
    const decreaseQuantity = (productId) => {
        const copy = cart.slice()
        const productIdx = copy.findIndex((item) => item.product.id === productId)
        //tạo biên productIdx tìm id sản phẩm rồi nếu như id sản phẩm khác -1 và  > 1 thì -1 card dó
        if (productIdx !== -1 && copy[productIdx].quantity > 1) {
            copy[productIdx].quantity -= 1
            setCart(copy)
        }
    }

    return (
        <CartContext.Provider
            value={{ cart, cartItemCount, addToCart, removeFromCart, increaseQuantity, decreaseQuantity,RemoveAllCart}}
        >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, useCart }

