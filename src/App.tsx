import { useMovie } from './hooks';

import './App.css';

// const fetchData = async () => await order.getOrderSummary()

function App() {
	const query = useMovie();

	// eslint-disable-next-line no-console
	console.log('query:', query);

	return <h1>The Movie</h1>;
}

export default App;
