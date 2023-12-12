import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './loggin.css';
// trang đăng nhập
function Loggin() {
    const [name,setName] = useState('')
    const [pwd,setPwd] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (event) =>{
        event.preventDefault();
        // lấy tài khoản về
        const accounts = JSON.parse(localStorage.getItem('Account'))
        // kiểm tra xem có tài khoản trên localtrange chưa
        if(accounts == null) return alert('account does not exists ')
        const AccountItems = accounts.some((account) => account.name === name && account.pwd === pwd);
        console.log(AccountItems)
        if(AccountItems) {
            alert('Loggin success!')
            localStorage.setItem('checkAccount', true)
            localStorage.setItem('AccountCurrent', JSON.stringify({name,pwd}))
             navigate('/')
             window.location.reload()
        }
        else if(!AccountItems) return alert('Account does not exits')
    }

const changeName = (e)=> setName(e.target.value)
const changePwd = (e)=> setPwd(e.target.value)


    return ( <div className= 'main'>
    <div className="login-container">
    <div className="login-header">
        <h2>Đăng nhập</h2>
    </div>
        <div className="login-form">
            // khi nhấn đăng nhập gọi tới hàm handleSubmit
            <form onSubmit ={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Tên đăng nhập:</label>
                    <input type="text" id="username" name="username" required onChange={changeName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mật khẩu:</label>
                    <input type="password" id="password" name="password" required onChange={changePwd}/>
                </div>
                <div className="form-group">
                    <button type="submit">Đăng nhập</button>
                </div>
            </form>
        </div>
    </div>
    </div> );
}

export default Loggin;