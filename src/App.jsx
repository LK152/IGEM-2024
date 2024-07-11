import { Routes, Route } from 'react-router-dom';
import Team from './pages/Team';
import Home from './pages/Home';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/team' element={<Team />} />
		</Routes>
	);
};

export default App;
