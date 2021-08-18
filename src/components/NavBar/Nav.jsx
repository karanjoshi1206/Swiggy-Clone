import React from "react";
import { useStateValue } from "../StateProvider";

import "./Nav.scss";
const Nav = () => {
	const [{ basket }] = useStateValue();

	return (
		<div className='nav'>
			<div className='left'>
				<img
					src='http://www.pngimagesfree.com/LOGO/S/Swiggy/Swiggy-Logo-PNG.png'
					alt='swiggy'
				/>
				<span className='location'>Kilpak</span>
				<span className='location_details'>
					<p>Chennai, Tamil Nadu, India</p>
					<span>
						<i className='fas fa-chevron-down'></i>
					</span>
				</span>
			</div>
			<div className='right'>
				<span>
					<i className='fas fa-search'></i> Search
				</span>
				<span>
					<i className='fas fa-percent'></i> Offers
				</span>
				<span>
					<i className='fas fa-hamburger'></i>Help
				</span>
				<span>
					<i className='far fa-user'></i>User
				</span>
				<span>
					<span className='cart_count'>{basket.length}</span> Cart
				</span>
			</div>
		</div>
	);
};

export default Nav;
