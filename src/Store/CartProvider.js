import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState= {
    items: [],
    totalAmount: 0
}

const CartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price*action.item.amount;
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = (props) =>{
    const [carState, setCartState]=useReducer(CartReducer, defaultCartState);
    const addItemToCartHandler = item => {
        setCartState({
            type : 'ADD',
            item : item
        })
    };
    const removeItemFromCartHandler = id => {
        setCartState({
            type : 'REMOVE',
            id : id
        })
    };

    const cartContext = {
        items: carState.items,
        totalAmount : carState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;