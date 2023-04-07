import { Col, Container, Row } from 'react-bootstrap';
import { MdDeviceThermostat, MdCloud, MdSunny, MdWaterDrop, MdSevereCold, MdThunderstorm, MdWindPower } from 'react-icons/md';

const MainWeather = (props) => {
	return (
		<>
			<Container id="mainWeather">
				<h3 className="text-dark">{props.city}</h3>
				<Container fluid>
					{props.conditions === 'Clouds' && (
						<p className="weatherIcon">
							<MdCloud />
						</p>
					)}
					{props.conditions === 'Clear' && (
						<p className="weatherIcon">
							<MdSunny />
						</p>
					)}
					{props.conditions === 'Rain' && (
						<p className="weatherIcon">
							<MdWaterDrop />
						</p>
					)}
					{props.conditions === 'Snow' && (
						<p className="weatherIcon">
							<MdSevereCold />
						</p>
					)}
					{props.conditions === 'Thuderstorm' && (
						<p className="weatherIcon">
							<MdThunderstorm />
						</p>
					)}
				</Container>
				<Container>
					<Row id="tempWind">
						<Col>
							{Math.floor(props.temperature) >= 5 && (
								<p className="weatherSmallIcons">
									<MdDeviceThermostat />
								</p>
							)}
							{Math.floor(props.temperature) <= 4 && (
								<p className="weatherSmallIcons">
									<MdSevereCold />
								</p>
							)}
							<p>{Math.floor(props.temperature)}°C</p>
						</Col>
						<Col>
							<p className="weatherSmallIcons">
								<MdWindPower />{' '}
							</p>
							<p>{Math.floor(props.wind)}km/h</p>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default MainWeather;
