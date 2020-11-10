import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Ride from './pages/Ride';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/ride/:id' component={Ride} />
				<Route component={() => <div>404 Not Found</div>} />
			</Switch>
		</Router>
	);
}

export default App;
