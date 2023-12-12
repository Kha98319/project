// PaymentForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart';
import './PaymentForm.css';
const PaymentForm = () => {
  // khai báo usestate và gọi usecontext từ usecart
  const { cart,RemoveAllCart } = useCart()
  const [fullName, setFullName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [password, setPassword] = useState('');
  // khai báo biến điều hướng của router
  const navigate = useNavigate()

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
}

// xử lý chuyển đổi sang dạng số
const round = (value, decimals) => {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals)
}
// xử lý thanh toán
  const handleSubmit = (e) => {
    // lấy tài khoản trên localstrang rồi so sánh với mk input xem đúng không rồi alert ra thành công
    e.preventDefault()
    const currentAccount = JSON.parse(localStorage.getItem('AccountCurrent'))
    
    if(currentAccount.pwd === password) {
      alert('thanh toán thành công')
      RemoveAllCart()
      navigate('/')
    }
    else {
      alert('sai mật khẩu!')
    }
  };

  return (
    <div className='mainforma'>
        <div className="payment-container">
      <h2>Thông tin thanh toán</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='div1'>
          <label className='label'>Email:</label>
          <div className='Email'>nhan15@gmail.com</div>
        </div>
        <div className='div1'>
          <label className='label'>Số tiền:</label>
        <div className='Email'> ${round(cartTotal(), 2)}</div>
        </div>
        <div className='div'>
          <label className='label'>Ngày tháng năm:</label>
          <input className='input1' type='date' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
        </div>
        <div className='div'>
          <label className='label'>Mã giảm giá:</label>
          <input className='input' type="text" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} />
        </div>
        <div className='div'>
          <label className='label'>Mật khẩu:</label>
          <input className='input1' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='div'>
          <button className='button' type="submit" >Thanh toán</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default PaymentForm;
