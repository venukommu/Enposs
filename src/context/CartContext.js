/* /context/CartContext.js */

import React, {useReducer} from "react";
import {CartReducer} from "./CartReducer"
// create auth context with default value

// set backup default for isAuthenticated if none is provided in Provider
export const CartContext = React.createContext();

const CartContextProvider = (props) => {
    const [cart, dispatch] = useReducer(CartReducer, {shoppingCart: [], totalPrice: 0, qty: 0});
    return (
        <CartContext.Provider value={{...cart, dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider; 