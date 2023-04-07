const initialState = {
	meteo: {
		location: {
			latitude: '',
			longitude: '',
		},
		weather: {
			temperature: '',
			conditions: '',
			wind: '',
		},
	},
};

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LATITUDE':
			return {
				...state,
				location: {
					...state.location,
					latitude: [action.payload],
				},
			};
		case 'LONGITUDE':
			return {
				...state,
				location: {
					...state.location,
					longitude: [action.payload],
				},
			};
		default:
			return state;
	}
};

export default mainReducer;
