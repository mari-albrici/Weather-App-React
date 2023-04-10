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
			tempmax: '',
			tempmin: '',
			humidity: '',
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
		case 'TEMP_MAX':
			return {
				...state,
				meteo: {
					...state.meteo,
					weather: {
						...state.meteo.weather,
						tempmax: action.payload,
					},
				},
			};
		case 'TEMP_MIN':
			return {
				...state,
				meteo: {
					...state.meteo,
					weather: {
						...state.meteo.weather,
						tempmin: action.payload,
					},
				},
			};
		case 'HUMIDITY':
			return {
				...state,
				meteo: {
					...state.meteo,
					weather: {
						...state.meteo.weather,
						humidity: action.payload,
					},
				},
			};
		default:
			return state;
	}
};

export default mainReducer;
