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
				console.log(futureWeather);
				weatherDays();
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

	const weatherDays = () => {
		futureWeather.map((i) => {
			return {
				date: [i].dt,
				// temp = [i].main.temp;
				// condition = [i].weather.main;
				// wind = [i].wind.speed;
			};
		});
	};

	return (
		<>
			<Container>
				<Row>
					<ListGroup>
						<ListGroup.Item className="futureConditonsList">
							<Col xs={6}>
								<p>{futureWeather.date}</p>
							</Col>
							{/* <Col xs={2}>
								<p>
									<MdDeviceThermostat />
									{Math.floor(temp)}
								</p>
							</Col>
							<Col xs={2}>
								{condition === 'Clear' && (
									<p className="weatherIconFuture">
										<MdSunny />
									</p>
								)}
								{condition === 'Clouds' && (
									<p className="weatherIconFuture">
										<MdCloud />
									</p>
								)}
							</Col>
							<Col xs={2}>
								<p>
									<MdWindPower />
									{Math.floor(wind)}
								</p>
							</Col> */}
						</ListGroup.Item>
					</ListGroup>
				</Row>
			</Container>
		</>
	);
};

export default FutureConditions;
