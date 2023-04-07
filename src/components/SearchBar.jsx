import { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = () => {
	const [location, setLocation] = useState([]);
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState([]);
	console.log(location);
	console.log(weather);

	const authKey = 'd078a2ae9188f0ed9f439c0e848f3da3';

	const locationEndpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${authKey}`;
	const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${authKey}`;

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(locationEndpoint);
			if (response.ok) {
				const data = await response.json();
				setLocation(data);
			} else {
				alert('Error fetching location data');
			}
		} catch (error) {
			console.log(error);
		}

		try {
			const response = await fetch(weatherEndpoint);
			if (response.ok) {
				const data = await response.json();
				setWeather(data);
			} else {
				alert('Error fetching weather data');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Control type="search" placeholder="Enter city" value={query} onChange={handleChange} />
				</Form.Group>
			</Form>
			{location.length > 0 && (
				<>
					<h3>City name: {location[0].name}</h3>
					<p>City lat: {location[0].lat}</p>
					<p>City long: {location[0].lon}</p>
				</>
			)}
			{weather && (
				<>
					<h3>Main weather: {weather.weather[0].main}</h3>
				</>
			)}
		</>
	);
};

export default SearchBar;
