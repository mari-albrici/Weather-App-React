import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { MdLocationOn, MdSearch } from 'react-icons/md';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
	const [query, setQuery] = useState('');

	const dispatch = useDispatch();

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
				dispatch({ type: 'LATITUDE', payload: data[0].lat });
				dispatch({ type: 'LONGITUDE', payload: data[0].lon });
				dispatch({ type: 'CITY', payload: data[0].name });
				await getWeather(data[0].lat, data[0].lon);
			} else {
				alert('Error fetching location data');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const getWeather = async (latitude, longitude) => {
		try {
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${authKey}`);
			if (response.ok) {
				const data = await response.json();
				dispatch({ type: 'TEMPERATURE', payload: data.main.temp });
				dispatch({ type: 'CONDITIONS', payload: data.weather[0].main });
				dispatch({ type: 'WIND', payload: data.wind.speed });
			} else {
				alert('Error fetching weather data');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Container id="searchBar">
				<MdLocationOn className="searchIcons" />
				<Form onSubmit={handleSubmit} id="searchBarForm">
					<Form.Control type="search" placeholder="Enter city" value={query} onChange={handleChange} id="searchBarInput" />
				</Form>
				<MdSearch className="searchIcons" />
			</Container>
		</>
	);
};

export default SearchBar;
