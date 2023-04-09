import { Col, Container, Row } from 'react-bootstrap';
import Sun from '../assets/sun.png';
import Cloud from '../assets/cloud.png';
import Rain from '../assets/rain.png';
import Snow from '../assets/snow.png';
import Storm from '../assets/storm.png';
import Sunrise from '../assets/sunrise.png';
import Wind from '../assets/wind.png';
import Humidity from '../assets/humidity.png';
import { useSelector } from 'react-redux';

const MainWeather = () => {
	const city = useSelector((state) => state.meteo.location.city);
	const temperature = useSelector((state) => state.meteo.weather.temperature);
	const conditions = useSelector((state) => state.meteo.weather.conditions);
	const wind = useSelector((state) => state.meteo.weather.wind);
	const sunrise = useSelector((state) => state.meteo.weather.sunrise);
	const sunset = useSelector((state) => state.meteo.weather.sunset);
	const humidity = useSelector((state) => state.meteo.weather.humidity);

	console.log(city);
	console.log(temperature);
	console.log(conditions);
	console.log(wind);
	console.log(sunrise);
	console.log(sunset);

	const sunriseHours = new Date().getHours(sunrise);
	const sunriseMinutes = new Date().getMinutes(sunrise);
	console.log(sunriseHours, sunriseMinutes);

	const sunsetHours = new Date().getHours(sunset);
	const sunsetMinutes = new Date().getMinutes(sunset);
	console.log(sunsetHours, sunsetMinutes);

	return (
		<>
			<Container id="mainWeather">
				<h2 id="cityName">{city}</h2>
				<Container fluid>
					{conditions === 'Clouds' && <img src={Cloud} alt="weather" className="weatherIcon" />}
					{conditions === 'Clear' && <img src={Sun} alt="weather" className="weatherIcon" />}
					{conditions === 'Rain' && <img src={Rain} alt="weather" className="weatherIcon" />}
					{conditions === 'Snow' && <img src={Snow} alt="weather" className="weatherIcon" />}
					{conditions === 'Thuderstorm' && <img src={Storm} alt="weather" className="weatherIcon" />}
				</Container>
				<Container>
					<Row id="temperature">
						<Col>
							<p className="mainTemp">{Math.floor(temperature)}°C</p>
						</Col>
					</Row>
					<hr id="mainDivider" />
					<Row className="mainOtherInfo">
						<Col>
							<img src={Sunrise} alt="sunrise or sunset" className="sunrise" />
						</Col>
						<Col>
							<img src={Wind} alt="wind" className="sunrise" />
						</Col>
						<Col>
							<img src={Humidity} alt="humidity" className="sunrise" />
						</Col>
					</Row>
					<Row className="mainOtherInfo">
						<Col>
							<p>
								↑ {sunriseHours}:{sunriseMinutes} {''}
							</p>
							<p>
								↓ {sunsetHours}:{sunsetMinutes}
							</p>
						</Col>
						<Col>
							<p>{Math.floor(wind)}km/h</p>
						</Col>
						<Col>
							<p>{humidity}%</p>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default MainWeather;
