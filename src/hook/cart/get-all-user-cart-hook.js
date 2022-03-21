import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createBrand } from '../../redux/actions/brandAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hook/useNotifaction'
import { getAllUserCartItems } from '../../redux/actions/cartAction';

const GetAllUserCartHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [itemsNum, setItemsNum] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [totalCartPrice, setTotalCartPrice] = useState(0)
    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getAllUserCartItems())
            setLoading(false)
        }
        get()
    }, [])
    const res = useSelector(state => state.cartReducer.getAllUserCart)
    useEffect(() => {
        if (loading === false) {
            if (res && res.status === "success") {
                setItemsNum(res.numOfCartItems)
                setCartItems(res.data.products)
                setTotalCartPrice(res.data.totalCartPrice)
            } else {
                setItemsNum(0)
                setCartItems([])
                setTotalCartPrice(0)
            }

        }
    }, [loading])

    return [itemsNum, cartItems,totalCartPrice]
}

export default GetAllUserCartHook