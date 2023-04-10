import { useEffect, useState } from 'react';
import { Col, Container, Row, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Sun from '../assets/sun.png';
import Cloud from '../assets/cloud.png';
import Rain from '../assets/rain.png';
import Snow from '../assets/snow.png';
import Storm from '../assets/storm.png';
import Sunrise from '../assets/sunrise.png';
import Wind from '../assets/wind.png';
import Humidity from '../assets/humidity.png';

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
										{new Date(day.dt_txt).getDay() === 1 && (
											<p>
												Mon {new Date(day.dt_txt).getDate()}/{new Date(day.dt_txt).getMonth() + 1}
											</p>
										)}
										{new Date(day.dt_txt).getDay() === 2 && (
											<p>
												Tue {new Date(day.dt_txt).getDate()}/{new Date(day.dt_txt).getMonth() + 1}
											</p>
										)}
										{new Date(day.dt_txt).getDay() === 3 && (
											<p>
												Wed {new Date(day.dt_txt).getDate()}/{new Date(day.dt_txt).getMonth() + 1}
											</p>
										)}
										{new Date(day.dt_txt).getDay() === 4 && (
											<p>
												Thur {new Date(day.dt_txt).getDate()}/{new Date(day.dt_txt).getMonth() + 1}
											</p>
										)}
										{new Date(day.dt_txt).getDay() === 5 && (
											<p>
												Fri {new Date(day.dt_txt).getDate()}/{new Date(day.dt_txt).getMonth() + 1}
											</p>
										)}
										{new Date(day.dt_txt).getDay() === 6 && (
											<p>
												Sat {new Date(day.dt_txt).getDate()}/{new Date(day.dt_txt).getMonth() + 1}
											</p>
										)}
										{new Date(day.dt_txt).getDay() === 0 && (
											<p>
												Sun {new Date(day.dt_txt).getDate()}/{new Date(day.dt_txt).getMonth() + 1}
											</p>
										)}
									</Col>
									<Col>
										{day.weather[0].main === 'Clouds' && <img src={Cloud} alt="weather" className="weatherIconFuture" />}
										{day.weather[0].main === 'Clear' && <img src={Sun} alt="weather" className="weatherIconFuture" />}
										{day.weather[0].main === 'Rain' && <img src={Rain} alt="weather" className="weatherIconFuture" />}
										{day.weather[0].main === 'Snow' && <img src={Snow} alt="weather" className="weatherIconFuture" />}
										{day.weather[0].main === 'Thuderstorm' && <img src={Storm} alt="weather" className="weatherIconFuture" />}
									</Col>
									<Col>
										<p>{Math.floor(day.main.temp)}°C</p>
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
