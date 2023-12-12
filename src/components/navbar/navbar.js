import { useState } from "react";
import { Link } from "react-router-dom";
import Account from "../../pages/account/account";
// phần header
// tạo một component nhận 2 tham số là onSearch và cartItemCount
const NavBar = ({ onSearch, cartItemCount }) => {
// tọa một use state có giá trị chuỗi rỗng 
    const [searchQuery, setSearchQuery] = useState('');
// gọi hàm handleSubmit giải quyết khi nhấn nút search 
    const handleSubmit = () => {
        // nếu tìm kiếm đúng thì gọi tham số ónearch
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim())
        }
        // set searchQuery chuỗi rỗng 
        setSearchQuery('')
    }

    return (
        <div className="wrapper">
            <header className="container1">
                <div className="header py-2">
                    <div className="grid">
                        {/*---------- logo ----- */}
                        <Link to="/" className="link">
                            <h1 className="brand">Waterfall</h1>
                        </Link>

                        {/* phần ------ search -------*/}
                        <div className="formContainer">
                            <form className="search">
                                <div className="form-control">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        placeholder="Search products..."
                                    />
                                </div>
                                <button type="button" className="search-btn" onClick={handleSubmit} >
                                    Search
                                </button>
                            </form>
                        </div>
                        {/* link tới trang tất cả sản phẩm */}
                        <Link to='/allproducts' className="link">Products</Link>
                        <Link to='/productsreview' className="link" style={{whiteSpace: 'nowrap'}}>product reviews</Link>
                        <Link to="/cart" className="link headerCart">
                            <img className="cartImg" src="/cart.svg" alt="cart" />
                            {/* nếu số lượng product lớn hơn 0 thì hiện cái này */}
                            {cartItemCount > 0 && (
                                <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                                )}
                        </Link>
                        {/*----------------------Account--------- */}
                                <Account/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export { NavBar };

