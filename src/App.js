import { Route, Routes, createSearchParams, useNavigate } from "react-router-dom"
import { NavBar } from "./components/navbar"
import { Cart } from "./pages/cart"
import { NotFound } from "./pages/not-found"
import { Product } from "./pages/product"
import { Products } from "./pages/products"

import ScrollToTop from "./components/gotop/gotop"
import { useCart } from './context/cart'
import './index.css'
import Productsreview from "./pages/ProductReview/ProductReview"
import Thanks from "./pages/ProductReview/thanks"
import Loggin from "./pages/account/loggin/loggin"
import Register from "./pages/account/register/register"
import { Allproducts } from "./pages/allProducts/allproducts"
import Chatbot from "./pages/chatbot/chatbot"
import Footer from "./pages/footer/footer"
import PaymentForm from "./pages/payment/payment"
function App() {

  const navigate = useNavigate();
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <div className="Appp">
      // trang header
      <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        // trang home
        <Route path="/" element={<Products />} />
        // thông tin sản phẩm
        <Route path="/product/:productId" element={<Product />} />
        // trang cart
        <Route path="/cart" element={<Cart />} />
        // gọi đến trang này khi k có trang sẳn có
        <Route path="*" element={<NotFound />} />
        // trang loggin
        <Route path="/loggin" element={<Loggin/>} />
        // trang đăng kí
        <Route path="/register" element={<Register/>} />
        // tất cả các trang 
        <Route path="/allproducts" element={<Allproducts/>} />
        // trang đánh gia sản phẩm
        <Route path="/productsreview" element={<Productsreview/>} />
        // trang cảm ơn
        <Route path="/thanks" element={<Thanks/>} />
        // trang thanh toán
        <Route path="/payment" element={<PaymentForm/>} />
      </Routes>
      {/* chatbot */}
      <Chatbot/>
      {/* icon dich len tren trang */}
      <ScrollToTop/>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
