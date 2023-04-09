import { Col, Container, Row } from 'react-bootstrap';
import Sun from '../assets/sun.png';
import Cloud from '../assets/cloud.png';
import Rain from '../assets/rain.png';
import Snow from '../assets/snow.png';
import Storm from '../assets/storm.png';
import { useSelector } from 'react-redux';

const MainWeather = () => {
	const city = useSelector((state) => state.meteo.location.city);
	const temperature = useSelector((state) => state.meteo.weather.temperature);
	const conditions = useSelector((state) => state.meteo.weather.conditions);
	const wind = useSelector((state) => state.meteo.weather.wind);

	console.log(city);
	console.log(temperature);
	console.log(conditions);
	console.log(wind);

	return (
		<>
			<Container id="mainWeather">
				<h3>{city}</h3>
				<Container fluid>
					{conditions === 'Clouds' && <img src={Cloud} alt="weather" className="weatherIcon" />}
					{conditions === 'Clear' && (
						<p className="weatherIcon">
							<img src={Sun} alt="weather" className="weatherIcon" />
						</p>
					)}
					{conditions === 'Rain' && (
						<p className="weatherIcon">
							<img src={Rain} alt="weather" className="weatherIcon" />
						</p>
					)}
					{conditions === 'Snow' && (
						<p className="weatherIcon">
							<img src={Snow} alt="weather" className="weatherIcon" />
						</p>
					)}
					{conditions === 'Thuderstorm' && (
						<p className="weatherIcon">
							<img src={Storm} alt="weather" className="weatherIcon" />
						</p>
					)}
				</Container>
				<Container>
					<Row id="tempWind">
						<Col>
							<p>{Math.floor(temperature)}°C</p>
						</Col>
						<Col>
							<p className="weatherSmallIcons"></p>
							<p>{Math.floor(wind)}km/h</p>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default MainWeather;
