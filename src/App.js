import './App.css';
import SearchBar from './components/SearchBar';
import MainWeather from './components/MainWeather';
import FutureConditions from './components/FutureConditions';
import { useSelector } from 'react-redux';

function App() {
	const latitude = useSelector((state) => state.meteo.location.latitude);
	const longitude = useSelector((state) => state.meteo.location.longitude);
	return (
		<>
			<SearchBar />
			<MainWeather />
			{latitude && longitude !== '' && <FutureConditions />}
		</>
	);
}

export default App;
