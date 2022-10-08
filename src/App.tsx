import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import {
	useLatestMovies,
	useMovie,
	usePopularMovies,
	useTopRatedMovies,
	useUpcomingMovies,
} from './hooks';

import './App.css';

// const fetchData = async () => await order.getOrderSummary()

function App() {
	const { data } = useMovie(76341);
	const latestMovies = useLatestMovies();
	const popularMovies = usePopularMovies();
	const topRatedMovies = useTopRatedMovies();
	const upcomingMovies = useUpcomingMovies();

	return (
		<div>
			<Header />
			<Layout>The Movies</Layout>
			<Footer />
		</div>
	);
}

export default App;
