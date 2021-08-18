import React from "react";
import "./Item.scss";
import { useStateValue } from "../StateProvider";
const Item = ({ item }) => {
	const [{ basket }, dispatch] = useStateValue();
	const addToCart = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: item.id,
				title: item.name,
				price: item.price,
				description: item.description,
				img: item.img,
				qty: item.qty,
			},
		});
	};
	const removeFromCart = (id) => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	return (
		<>
			<div className='item'>
				<div className='item_left'>
					<div>
						{item.category === "veg" ? <img src='images/veg.png' alt='' /> : ""}
						<span>
							{item.bestSeller
								? ((<i className='fas fa-star'></i>), "Best Seller")
								: ""}
						</span>
					</div>
					<h4 className='item_title'>{item.name} </h4>
					<p className='price'>₹ {item.price}</p>
					<p className='description'>{item.description}</p>
				</div>
				<div className='item_right'>
					<img src={item.img} alt='' />
					{basket.some((p) => p.id === item.id) ? (
						<button
							style={{ padding: " 5px 10px" }}
							onClick={() => removeFromCart(item.id)}>
							Remove <span>-</span>
						</button>
					) : (
						<button onClick={() => addToCart()}>
							Add <span>+</span>
						</button>
					)}
				</div>
			</div>
			<hr />
		</>
	);
};

export default Item;
