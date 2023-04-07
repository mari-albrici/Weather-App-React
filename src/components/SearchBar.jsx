import { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import { MdLocationOn, MdSearch } from 'react-icons/md';
import MainWeather from './MainWeather';

const SearchBar = () => {
	const [location, setLocation] = useState([]);
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState([]);
	const [conditions, setConditions] = useState([]);
	const [temperature, setTemperature] = useState('');

	const authKey = 'd078a2ae9188f0ed9f439c0e848f3da3';

	const locationEndpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${authKey}`;

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
	};

	const getWeather = async () => {
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${location[0].lat}&lon=${location[0].lon}&units=metric&appid=${authKey}`,
			);
			if (response.ok) {
				const data = await response.json();
				setWeather(data);
				setConditions(data.weather[0].main);
				setTemperature(data.main);
			} else {
				alert('Error fetching weather data');
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getWeather();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return (
		<>
			<Container id="searchBar">
				<MdLocationOn className="searchIcons" />
				<Form onSubmit={handleSubmit} id="searchBarForm">
					<Form.Control type="search" placeholder="Enter city" value={query} onChange={handleChange} id="searchBarInput" />
				</Form>
				<MdSearch className="searchIcons" />
			</Container>
			{weather && conditions && temperature && (
				<MainWeather city={location[0].name} wind={weather.wind.speed} temperature={temperature.temp} conditions={conditions} />
			)}
		</>
	);
};

export default SearchBar;
