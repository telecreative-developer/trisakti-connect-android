import { FETCH_SHOP_CATEGORY, FETCH_ADS, FETCH_SHOP, FETCH_SHOP_WITH_CATEGORY, FETCH_MY_SHOP } from '../constants'

export const shop = (state = [], action) => {
	switch (action.type) {
		case FETCH_SHOP:
			return action.payload
		default:
			return state
	}
}

export const myShop = (state = [], action) => {
	switch (action.type) {
		case FETCH_MY_SHOP:
			return action.payload
		default:
			return state
	}
}

export const shopWithCategory = (state = [], action) => {
	switch (action.type) {
		case FETCH_SHOP_WITH_CATEGORY:
			return action.payload
		default:
			return state
	}
}

export const shopCategory = (state = [], action) => {
	switch (action.type) {
		case FETCH_SHOP_CATEGORY:
			return action.payload
		default:
			return state
	}
}

export const ads = (state = [], action) => {
	switch (action.type) {
		case FETCH_ADS:
			return action.payload
		default:
			return state
	}
}
