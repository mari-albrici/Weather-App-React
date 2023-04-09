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
		forecast: {
			date: '',
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
						...state.meteo.weather,
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
						...state.meteo.weather,
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
						...state.meteo.weather,
						wind: action.payload,
					},
				},
			};

		case 'DATE':
			return {
				...state,
				meteo: {
					...state.meteo,
					forecast: {
						...state.meteo.forecast,
						date: action.payload,
					},
				},
			};
		case 'FORECAST_TEMPERATURE':
			return {
				...state,
				meteo: {
					...state.meteo,
					forecast: {
						...state.meteo.forecast,
						temperature: action.payload,
					},
				},
			};
		case 'FORECAST_CONDITIONS':
			return {
				...state,
				meteo: {
					...state.meteo,
					forecast: {
						...state.meteo.forecast,
						conditions: action.payload,
					},
				},
			};
		case 'FORECAST_WIND':
			return {
				...state,
				meteo: {
					...state.meteo,
					forecast: {
						...state.meteo.weather,
						wind: action.payload,
					},
				},
			};
		default:
			return state;
	}
};

export default mainReducer;
