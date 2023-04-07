const initialState = {
	meteo: {
		location: {
			latitude: '',
			longitude: '',
			city: '',
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
				meteo: {
					...state.meteo,
					location: {
						...state.meteo.location,
						latitude: action.payload,
					},
				},
			};
		case 'LONGITUDE':
			return {
				...state,
				meteo: {
					...state.meteo,
					location: {
						...state.meteo.location,
						longitude: action.payload,
					},
				},
			};
		case 'CITY':
			return {
				...state,
				meteo: {
					...state.meteo,
					location: {
						...state.meteo.location,
						city: action.payload,
					},
				},
			};
		case 'TEMPERATURE':
			return {
				...state,
				meteo: {
					...state.meteo,
					weather: {
						...state.weather,
						temperature: action.payload,
					},
				},
			};

		case 'CONDITIONS':
			return {
				...state,
				meteo: {
					...state.meteo,
					weather: {
						...state.weather,
						conditions: action.payload,
					},
				},
			};
		case 'WIND':
			return {
				...state,
				meteo: {
					...state.meteo,
					weather: {
						...state.weather,
						wind: action.payload,
					},
				},
			};
		default:
			return state;
	}
};

export default mainReducer;
