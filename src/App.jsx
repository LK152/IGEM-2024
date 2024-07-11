import { Routes, Route } from 'react-router-dom';
import Team from './pages/Team';

const App = () => {
	return (
		<Routes>
			<Route path='/team' element={<Team />} />
		</Routes>
	);
};

export default App;
