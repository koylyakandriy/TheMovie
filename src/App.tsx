import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import NowPlaying from './pages/NowPlaying/NowPlaying';
import Popular from './pages/Popular/Popular';
import TopRated from './pages/TopRated/TopRated';
import Upcoming from './pages/Upcoming/Upcoming';
// import { Pallete } from './themes/types';

export const MainContent = styled.main`
	min-height: calc(100vh - 190px);
`;

export const Sidebar = styled.div`
	min-width: 300px;
	width: 300px;
`;

function App() {
	// const customColor: keyof Pallete = true ? 'primary' : 'secondary';

	return (
		<>
			<Header />
			{/* <div style={{ background: CustomTheme.colors[customColor].main }} /> */}
			{/* <Sidebar>Sidebar</Sidebar> */}

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
