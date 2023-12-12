import { Link } from "react-router-dom"
// tạo một component là Item truyền vào 1 object có 2 tham số là dât và add to card

const Item = ({ data, addToCart }) => {
// tạo một object chứa dữ liệu từ tham số data
    const { id, image, title, price } = data
    
    return (
        <div className="card11">
            <div className="flexaa">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="title">
                    <Link to={`/product/${id}`} className="link titleLink">
                        {title}
                    </Link>
                </div>
                <div className="flex">
                    <span className="price" style={{ marginRight: 15 }}>
                        ${price}
                    </span>
                    <div className="cart" onClick={addToCart}>
                        <img className="cartImg" src="/cart.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Item }

