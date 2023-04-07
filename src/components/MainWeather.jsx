import { Col, Container, Row } from 'react-bootstrap';
import { MdDeviceThermostat, MdCloud, MdSunny, MdWaterDrop, MdSevereCold, MdThunderstorm, MdWindPower } from 'react-icons/md';
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
				<h3 className="text-dark">{city}</h3>
				<Container fluid>
					{conditions === 'Clouds' && (
						<p className="weatherIcon">
							<MdCloud />
						</p>
					)}
					{conditions === 'Clear' && (
						<p className="weatherIcon">
							<MdSunny />
						</p>
					)}
					{conditions === 'Rain' && (
						<p className="weatherIcon">
							<MdWaterDrop />
						</p>
					)}
					{conditions === 'Snow' && (
						<p className="weatherIcon">
							<MdSevereCold />
						</p>
					)}
					{conditions === 'Thuderstorm' && (
						<p className="weatherIcon">
							<MdThunderstorm />
						</p>
					)}
				</Container>
				<Container>
					<Row id="tempWind">
						<Col>
							{Math.floor(temperature) >= 5 && (
								<p className="weatherSmallIcons">
									<MdDeviceThermostat />
								</p>
							)}
							{Math.floor(temperature) <= 4 && (
								<p className="weatherSmallIcons">
									<MdSevereCold />
								</p>
							)}
							<p>{Math.floor(temperature)}°C</p>
						</Col>
						<Col>
							<p className="weatherSmallIcons">
								<MdWindPower />{' '}
							</p>
							<p>{Math.floor(wind)}km/h</p>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default MainWeather;
