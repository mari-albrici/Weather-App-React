import { useState } from 'react';
import { Form, Offcanvas, Button, Container } from 'react-bootstrap';
import { MdLocationOn, MdSearch } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

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
		setShow(false);

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
				dispatch({ type: 'SUNRISE', payload: data.sys.sunrise });
				dispatch({ type: 'SUNSET', payload: data.sys.sunset });
				dispatch({ type: 'HUMIDITY', payload: data.main.humidity });
			} else {
				alert('Error fetching weather data');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const sunrise = useSelector((state) => state.meteo.weather.sunrise);
	const sunset = useSelector((state) => state.meteo.weather.sunset);

	console.log(sunrise);
	console.log(sunset);

	const [show, setShow] = useState(false);
	const handleShow = () => setShow(!show);

	return (
		<>
			<Container fluid>
				<Button id="searchButton" onClick={handleShow}>
					Search
				</Button>
				<Offcanvas show={show} id="offcanvasSearch" placement="start">
					<Offcanvas.Body id="searchBar">
						<MdLocationOn className="searchIcons" />
						<Form onSubmit={handleSubmit} id="searchBarForm">
							<Form.Control type="search" placeholder="Enter city" value={query} onChange={handleChange} id="searchBarInput" />
						</Form>
						<MdSearch className="searchIcons" />
					</Offcanvas.Body>
				</Offcanvas>
			</Container>
		</>
	);
};

export default SearchBar;
