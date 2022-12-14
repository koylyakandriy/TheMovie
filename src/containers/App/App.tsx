import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import Home from '../../pages/Home/Home';
import Movie from '../../pages/Movie/Movie';
import NowPlaying from '../../pages/NowPlaying/NowPlaying';
import Popular from '../../pages/Popular/Popular';
import TopRated from '../../pages/TopRated/TopRated';
import Upcoming from '../../pages/Upcoming/Upcoming';

import { MainContent } from './App.styled';

function App() {
	return (
		<>
			<Header />

			<Layout>
				<MainContent>
					<Routes>
						<Route element={<Home />} path='/' />
						<Route path='movies'>
							<Route element={<Popular />} path='popular' index />
							<Route element={<NowPlaying />} path='now-playing' />
							<Route element={<TopRated />} path='top-rated' />
							<Route element={<Upcoming />} path='upcoming' />
						</Route>
						<Route element={<Movie />} path='movie/:id' />
					</Routes>
				</MainContent>
			</Layout>
			<Footer />
		</>
	);
}

export default App;
