import { useState } from 'react';
import './register.css';

// trang đăng kí 
import { useNavigate } from "react-router-dom";
function Register() {
    const [name,setName] = useState('')
    const [pwd,setPwd] = useState('')
    const navigate = useNavigate()

// xử lý khi nhấn nút đăng kí
const handleSubmit = (event) =>{
    event.preventDefault()
    // lấy tài khoản cũ từ localtrange 
    const accounts = JSON.parse(localStorage.getItem('Account'))
    // xử lý nếu có tài khoản thì xử lý bên tài khoản cũ không thì ngược lại
    if(accounts != null) {
        handleOldAccount(accounts)
    }
    else if(accounts == null) {
        handleNewAccount()
    }
}
// xử lý tài khoản cũ
const handleOldAccount=(accounts)=>{
    let check = false
    // lặp qua những tài khoản cũ từ tham số account đã lấy từ localtrange
    let oldAccount = accounts.map((account)=> {
        // kiểm tra trùng tk hay không
        if(account.name === name) {
            check = true
            return alert('the account is already exists!')
        }
        return account
    })
    // không thực hiện khi trùng tài khoản
    if(check) return;
    // add tài khoản cũ và mới lên localstrange
    localStorage.setItem('Account', JSON.stringify(
        [...oldAccount, {name, pwd}] 
    ))
    setName('')
    setPwd('')
    check = false
    navigate("/loggin")
    window.location.reload()
}
// xử lý tài khoản mới
const handleNewAccount=()=>{
    // xử lý tài khoản mới khi chưa có trên localtrange
    localStorage.setItem('Account', JSON.stringify(
        [{name, pwd}] 
    ))
    setName('')
    setPwd('')
    navigate("/loggin")
    window.location.reload()
}
 const AccountName =(e) => {
    setName(e.target.value)

}
 const AccountPwd =(e) =>{
    setPwd(e.target.value)
 }
    return ( 
    <div className ='main'>
    <div className="register-container">
        <div className="register-header">
            <h2>Đăng ký</h2>
        </div>
        <div className="register-form">
            // khi nhấn đăng kí gọi hàm handleSubmit
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Tên đăng nhập:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input value={name} type="email" id="email" name="email" required onChange={AccountName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mật khẩu:</label>
                    <input value={pwd} type="password" id="password" name="password" required onChange={AccountPwd}/>
                </div>
                <div className="form-group">
                    <button type="submit" >Đăng ký</button>
                </div>
            </form>
        </div>
    </div>
    </div>
     );
}

export default Register;