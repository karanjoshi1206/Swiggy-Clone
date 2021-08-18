export const getBasketTotal = (basket) => {
	return basket?.reduce(
		(amount, item) => (item.price + amount) * (item.qty > 0 ? item.qty : 1),
		0
	);
};

export const initialState = {
	basket: [],
	totalAmount: 0,
};
function reducer(state, action) {
	switch (action.type) {
		case "ADD_TO_BASKET":
			return { ...state, basket: [...state.basket, action.item] };
		case "REMOVE_FROM_BASKET":
			let newBasket = [...state.basket];
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			if (index >= 0) {
				newBasket.splice(index, 1);
			}
			return { ...state, basket: newBasket };
		case "INCREMENT":
			let updtedCart = state.basket.map((item) => {
				if (item.id === action.payload) {
					return { ...item, qty: item.qty + 1 };
				}
				return item;
			});
			return { ...state, basket: updtedCart };
		case "DECREMENT":
			let newCart = state.basket.map((item) => {
				if (item.id === action.payload) {
					return { ...item, qty: item.qty - 1 };
				}
				return item;
			});
			return { ...state, basket: newCart };

		default:
			return state;
	}
}
export default reducer;
