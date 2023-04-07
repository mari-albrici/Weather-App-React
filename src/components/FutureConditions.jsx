import { useEffect, useState } from 'react';
import { Col, Container, Row, ListGroup } from 'react-bootstrap';
import { MdDeviceThermostat, MdCloud, MdSunny, MdWaterDrop, MdSevereCold, MdThunderstorm, MdWindPower } from 'react-icons/md';
import { useSelector } from 'react-redux';

const FutureConditions = (props) => {
	const [futureConditions, setFutureConditions] = useState({});
	const latitude = useSelector((state) => state.location.latitude);
	const longitude = useSelector((state) => state.location.longitude);

	const authKey = 'd078a2ae9188f0ed9f439c0e848f3da3';

	const getFutureWeather = async () => {
		try {
			const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${authKey}`);
			if (response.ok) {
				const data = await response.json();
				setFutureConditions(data.list);
				console.log(futureConditions);
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
	}, []);

	return (
		<>
			<Container>
				<Row>
					<ListGroup>
						<ListGroup.Item className="futureConditonsList">
							{futureConditions.length > 0 && (
								<>
									<Col xs={6}>
										<p>{futureConditions[0].dt_txt}</p>
									</Col>
									<Col xs={2}>
										<p>
											<MdDeviceThermostat />
											{Math.floor(futureConditions[0].main.temp)}
										</p>
									</Col>
									<Col xs={2}>
										{futureConditions[0].weather.main === 'Clear' && (
											<p className="weatherIconFuture">
												<MdSunny />
											</p>
										)}
										{futureConditions[0].weather.main === 'Clouds' && (
											<p className="weatherIconFuture">
												<MdCloud />
											</p>
										)}
									</Col>
									<Col xs={2}>
										<p>
											<MdWindPower />
											{Math.floor(futureConditions[0].wind.speed)}
										</p>
									</Col>
								</>
							)}
						</ListGroup.Item>
						<ListGroup.Item className="futureConditonsList"></ListGroup.Item>
						<ListGroup.Item className="futureConditonsList"></ListGroup.Item>
					</ListGroup>
				</Row>
			</Container>
		</>
	);
};

export default FutureConditions;
