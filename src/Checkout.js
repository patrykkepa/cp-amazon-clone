import React from 'react';
import { useStateValue } from './StateProvider';

import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


import './Checkout.css';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/bday/bday.jpg" 
                alt=""/>
                {
                    basket?.length === 0 ? (
                        <div>
                            <h2 className="checkout__tittle">Your shopping basket is empty</h2>
                            <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="checkout__tittle">Your shopping basket </h2>
                            {
                                basket.map(item => (
                                    <CheckoutProduct 
                                        id={item.id} 
                                        image={item.image}
                                        title={item.title}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))
                            }
                            
                        </div>
                    )
                }
            </div>
            {
                basket.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                )
            }
            
           
        </div>
    )
}

export default Checkout
