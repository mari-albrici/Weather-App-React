import './App.css';
import SearchBar from './components/SearchBar';
import MainWeather from './components/MainWeather';
import FutureConditions from './components/FutureConditions';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

function App() {
	const latitude = useSelector((state) => state.meteo.location.latitude);
	const longitude = useSelector((state) => state.meteo.location.longitude);
	return (
		<>
			<Container id="weatherApp">
				<SearchBar />
				{latitude && longitude !== '' && <MainWeather />}
				{latitude && longitude !== '' && <FutureConditions />}
			</Container>
		</>
	);
}

export default App;
