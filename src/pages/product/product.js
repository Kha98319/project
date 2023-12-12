import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useCart } from "../../context/cart"
import { FakeStoreApi } from '../../services/fake-store-api'
import './product.css'
// trang thông tin product
const Product = () => {
    const [loading, setLoading] = useState(true);
    const [productss, setProduct] = useState();
    const { productId } = useParams();
    const { addToCart,id } = useCart()

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const product = FakeStoreApi.fetchProductById(productId);
            console.log(product)
            setProduct(product);
            setLoading(false);
        }
        fetchProduct().catch(console.error)
    }, [productId])

    if (!loading && !productss) {
        return (
            <div className="container">
                <div className="product py-2">
                    <div className="details p-3">
                        Product not found. Please visit{" "}
                        <Link to="/" replace>
                            home
                        </Link>{" "}
                        to see all available products
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="container">
            {loading ? (
                <div className={"loader"}></div>
            ) : productss.map((product)=>{
                return (
                    <div className="product py-2">
                        <div className="details grid p-3">
                            <div className="product-image">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="info">
                                <div className="description">
                                    <h3>{product.title}</h3>
                                    <p className=" my-2">{product.description}</p>
                                </div>
                                <div className="flex">
                                    <span className="price">${product.price}</span>
                                    <span className="cart" onClick={() => addToCart(product)}>
                                        <img src="/cart.svg" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export { Product }
