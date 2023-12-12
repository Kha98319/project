// lấy thẻ chuyển hướng link và điều hướng usenavigate trong react-routerdom
import { Link, useNavigate } from "react-router-dom"
// lấy cart
import { useCart } from "../../context/cart"
// nhập file css cart vào

import "./cart.css"
// tạo biến SHIPPING_CHARGES có giá trị 25
const SHIPPING_CHARGES = 25
// trang cart
// tạo một component card
const Cart = () => {
    // tạo biến lưu use điều hướng
    const navigate = useNavigate()
    // lấy cart xóa cart removeFromCart , tăng increaseQuantity, giảm decreaseQuantity từ useCart import { useCart } from "../../context/cart"
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart()
// tính tổng cart
    const cartTotal = () => {
        // trả về giá được tính toán
        return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    }
    console.log(cart)
    // chuyển giá thành số
    const round = (value, decimals) => {
        return Number(Math.round(value + "e" + decimals) + "e-" + decimals)
    }
   // khi click thanh toán thì chuyển trang
    const handlepayment =()=>{
        // chuyển sang trang thanh toán
        navigate('/payment')
    }

    return (
        <div className="cartWrapper">
            <div className="container">
                {cart.length >= 1 ? (
                    <div className="grid my-5">
                        <div className="cartItem p-3">
                            <h2>Order Summary</h2>
                            {cart.map((item) => (
                                <div className="item" key={item.product.id}>
                                    <div className="grid py-3">
                                        <div className="itemImage">
                                            <img src={item.product.image} alt="" />
                                        </div>
                                        <div className="itemDesc">
                                            <div className="title">
                                                <Link to={"/product/" + item.product.id} className="titleLink1">
                                                    {item.product.title}
                                                </Link>
                                            </div>
                                            <span className="price">${round(item.product.price * item.quantity, 2)}</span>
                                            {/* <div className="remove">Remove</div> */}
                                        </div>
                                        <div className="itemControl flex">
                                            <div>
                                                <button
                                                    onClick={() => increaseQuantity(item.product.id)}
                                                    className="addQty"
                                                >
                                                    +
                                                </button>
                                                <span className="mx-1">{item.quantity}</span>
                                                <button
                                                    onClick={() => decreaseQuantity(item.product.id) }
                                                    disabled={item.quantity === 1}
                                                    className="removeQty"
                                                >
                                                    -
                                                </button>
                                                <div
                                                    className="remove my-1"
                                                    onClick={() => removeFromCart(item.product.id)}
                                                >
                                                    Remove
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="payment p-3">
                            <h2>Payment Summary</h2>
                            <div className="summary py-3 my-2">
                                <div className="flex py-1">
                                    <span>Subtotal:</span>
                                    <span className="price">${round(cartTotal(), 2)}</span>
                                </div>
                                <div className="flex py-1">
                                    <span>Shipping Fee:</span>
                                    //giá sản phẩm
                                    <span className="price">${SHIPPING_CHARGES}</span>
                                </div>
                                <div className=" flex py-1">
                                    <span>Total:</span>
                                    <span className="price">${round(cartTotal() + SHIPPING_CHARGES, 2)}</span>
                                </div>
                                <button className="thanhtoan" onClick={handlepayment}>Thanh toán</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="error">
                        <p>&#9432; Cart is empty</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export { Cart }

