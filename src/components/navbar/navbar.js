import { Link } from "react-router-dom"
import { useState } from "react"
import Account from "../../pages/account/account";

const NavBar = ({ onSearch, cartItemCount }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = () => {
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim())
        }
        setSearchQuery('')
    }

    return (
        <div className="wrapper">
            <header className="container">
                <div className="header py-2">
                    <div className="grid">
                        {/*---------- logo ----- */}
                        <Link to="/" className="link">
                            <h1 className="brand">HEROTIMES</h1>
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

export { NavBar }