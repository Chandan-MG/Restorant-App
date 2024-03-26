import Modal from '../UI/Modal';
import './Cart.css';

const Cart = (props) => {
    const Cartitems = <ul className='cart-items'>{[
        { id: 'c1', name:'Sushi', amount: 2, price: 12.09}
    ].map((item)=> <li>{item.name}</li>)}</ul>
    return(
        <Modal onClose={props.onClose}>
            {Cartitems}
            <div className='total'>
                <span>Total Amount</span>
                <span>38.02</span>
            </div>
            <div className='actions'>
                <button className='button-alt' onClick={props.onClose}>Close</button>
                <button className='button--alt'>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;