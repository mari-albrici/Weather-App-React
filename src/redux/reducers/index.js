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
		default:
			return state;
	}
};

export default mainReducer;
