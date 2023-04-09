import { useEffect, useState } from 'react';
import { Col, Container, Row, ListGroup } from 'react-bootstrap';
import { MdDeviceThermostat, MdCloud, MdSunny, MdWaterDrop, MdSevereCold, MdThunderstorm, MdWindPower } from 'react-icons/md';
import { useSelector } from 'react-redux';

const FutureConditions = () => {
	const latitude = useSelector((state) => state.meteo.location.latitude);
	const longitude = useSelector((state) => state.meteo.location.longitude);
	const [futureWeather, setFutureWeather] = useState([]);

	const authKey = 'd078a2ae9188f0ed9f439c0e848f3da3';

	const getFutureWeather = async () => {
		try {
			const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${authKey}`);
			if (response.ok) {
				const data = await response.json();
				setFutureWeather(data.list);
			} else {
				alert('Error fetching future conditions data');
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getFutureWeather();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [latitude, longitude]);

	return (
		<>
			<Container>
				<ListGroup>
					{futureWeather.map((day) => {
						return (
							<ListGroup.Item key={day.dt}>
								<Row className="futureConditonsList">
									<Col>
										<p>{day.dt_txt}</p>
									</Col>
									<Col>
										<p>{day.weather[0].description}</p>
									</Col>
									<Col>
										<p>{day.weather[0].main.temp}°C</p>
									</Col>
									<Col>
										<p>{day.weather[0].wind}km/h</p>
									</Col>
								</Row>
							</ListGroup.Item>
						);
					})}
				</ListGroup>
			</Container>
		</>
	);
};

export default FutureConditions;
