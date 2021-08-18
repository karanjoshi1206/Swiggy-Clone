import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../../reducer";

const Cart = () => {
	const [{ basket }, dispatch] = useStateValue();
	const [cartData, setCartData] = useState(basket);
	const increment = (id) => {
		dispatch({
			type: "INCREMENT",
			payload: id,
		});
	};
	const decrement = (id, qty) => {
		if (qty === 0) {
			dispatch({
				type: "REMOVE_FROM_BASKET",
				id: id,
			});
		}
		dispatch({
			type: "DECREMENT",
			payload: id,
		});
	};
	useEffect(() => {
		setCartData(basket);
	}, [basket]);
	useEffect(() => {
		dispatch({
			type: "GET_TOTAL",
			payload: basket,
		});
	}, [basket]);
	return (
		<div>
			<div className='cart'>
				{basket.length > 0 ? (
					<div>
						<h1>Cart</h1>
						<p>
							{basket.length} {basket.length > 1 ? "items" : "item"}
						</p>
						<div className='non_empty_cart'>
							{cartData.map((item) => (
								<div className='cart_items' key={item.id}>
									<div>
										<p>{item.title}</p>
									</div>
									<div className='controls'>
										<span onClick={() => decrement(item.id, item.qty)}>-</span>
										<span>{item.qty}</span>
										<span onClick={() => increment(item.id)}>+</span>
									</div>
									<div>
										<p>₹{item.price}</p>
									</div>
								</div>
							))}
						</div>
						<div className='subtotal'>
							<div className='price'>
								<div>
									<h3>Subtotal</h3>

									<p>Extra charges may apply</p>
								</div>
								<div>{getBasketTotal(basket)}</div>
							</div>
							<button className='checkout_button'>
								CheckOut <i className='fas fa-arrow-right'></i>
							</button>
						</div>
					</div>
				) : (
					<div className='cart_empty'>
						<h1>Cart Empty</h1>
						<img src='images/cart_empty.png' alt='' />
						<p>
							Good food is always cooking! Go ahead, order some yummy items from
							the menu.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
