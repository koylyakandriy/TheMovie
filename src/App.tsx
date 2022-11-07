import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Movie from './pages/Movie/Movie';
import NowPlaying from './pages/NowPlaying/NowPlaying';
import Popular from './pages/Popular/Popular';
import TopRated from './pages/TopRated/TopRated';
import Upcoming from './pages/Upcoming/Upcoming';
// import { Pallete } from './themes/types';
// import {
// 	useMovie,
// 	useNowPlayingMovies,
// 	usePopularMovies,
// 	useTopRatedMovies,
// 	useUpcomingMovies,
// } from './hooks';

// export const MainContent = styled.main`
// 	//min-height: calc(100vh - 140px);
// 	display: flex;
// 	height: calc(100vh - 264px);
// `;

export const Sidebar = styled.div`
	min-width: 300px;
	width: 300px;
`;

// export const Container = styled.main`
// 	//display: flex;
// 	//flex-direction: column;
// 	//width: 100%;
// 	//
// `;

function App() {
	// const customColor: keyof Pallete = true ? 'primary' : 'secondary';

	return (
		<>
			<Header />
			{/* <div style={{ background: CustomTheme.colors[customColor].main }} /> */}
			{/* <Sidebar>Sidebar</Sidebar> */}

			<Layout>
				<main>
					<Routes>
						<Route element={<div>Home page</div>} path='/' />
						<Route path='movies'>
							<Route element={<Popular />} path='popular' index />
							<Route element={<NowPlaying />} path='now-playing' />
							<Route element={<TopRated />} path='top-rated' />
							<Route element={<Upcoming />} path='upcoming' />
						</Route>
						<Route element={<Movie />} path='movie/:id' />
					</Routes>
				</main>
			</Layout>
			<Footer />
		</>
	);
}

export default App;
