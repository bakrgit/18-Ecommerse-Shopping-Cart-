import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeleteCartHook from './../../hook/cart/delete-cart-hook';
import { ToastContainer, toast } from 'react-toastify';

const CartCheckout = ({ totalCartPrice }) => {

    const [handelDeleteCart] = DeleteCartHook()
    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                        className="copon-input d-inline text-center "
                        placeholder="كود الخصم"
                    />
                    <button className="copon-btn d-inline ">تطبيق</button>
                </div>
                <div className="product-price d-inline w-100 my-3  border">{totalCartPrice || 0} جنية</div>
                <Link
                    to="/order/paymethoud"
                    style={{ textDecoration: "none" }}
                    className="product-cart-add  d-inline ">

                    <button className="product-cart-add w-100 px-2"> اتمام الشراء</button>
                </Link>
                <button onClick={handelDeleteCart} className="product-cart-add w-100 px-2 my-1"> مسح العربة</button>
            </Col>
            <ToastContainer />
        </Row>
    )
}

export default CartCheckout
