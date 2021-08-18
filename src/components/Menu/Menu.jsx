import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Item from "../Item/Item";
import { Scrollbars } from "react-custom-scrollbars";
import data from "../../data";

import "./Menu.scss";
const Menu = () => {
	const [items] = useState(data);

	return (
		<div className='menu'>
			<div className='hero'>
				<div className='hero_left'>
					<img src='images/food.jpeg' alt='' />
					<div className='restraunt_details'>
						<h1>The Belgian Waffle Co.</h1>
						<p>Desserts, Beverages</p>
						<span className='location'>Kilpak ,</span>
						<span className='location_details'>
							<span style={{ marginRight: "5px" }}> Change outlet</span>
							<span>
								<i className='fas fa-chevron-down'></i>
							</span>
						</span>
						<div className='further_details'>
							<div>
								<span>
									<i className='fas fa-star'></i> 4.3
								</span>
								<p>100+ ratings</p>
							</div>
							<div className='line'></div>
							<div>
								<span>26 mins </span>
								<p>Delivery Time</p>
							</div>
							<div className='line'></div>

							<div>
								<span>₹ 200 </span>
								<p>Cost for two</p>
							</div>
						</div>
					</div>
				</div>
				<div className='hero_right'>
					<h3>OFFER</h3>
					<div className='hero_right_content'>
						<div>
							<i className='fas fa-percent'></i>
							<p>20% off up to ₹50 | Use code TRYNEW</p>
						</div>
						<div>
							<i className='fas fa-percent'></i>
							<p>15% off up to ₹100 | Use code 100SBI</p>
						</div>
					</div>
				</div>
				<div className='category'>
					<input type='text' placeholder='Search for dishes...' />
					<div>
						<i
							style={{ color: "green", fontWeight: "400", fontSize: "15px" }}
							className='fab fa-pagelines'></i>
						Pure Veg
					</div>
					<div className='category_hover'>
						<i className='far fa-heart'></i>Favourite
					</div>
				</div>
			</div>
			<div className='main_menu'>
				<div className='left_menu'>
					<ul>
						<li>Recommended</li>
						<li>Rakhi Specials</li>
						<li>Waffles</li>
						<li>Less Sugar Waffles And Pancakes..</li>
						<li>Waffle Cakes</li>
					</ul>
				</div>
				<div className='mid_menu'>
					<h1>Recommended</h1>
					<p>14 ITEMS</p>
					<div className='items'>
						<Scrollbars autoHide style={{ width: 600, height: 500 }}>
							{items.map((item) => (
								<Item key={item.id} item={item} />
							))}
							{/* <Item />
							<Item />
							<Item /> */}
						</Scrollbars>
					</div>
				</div>
				<Cart />
			</div>
		</div>
	);
};

export default Menu;
