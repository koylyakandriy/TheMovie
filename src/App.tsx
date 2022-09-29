import { useEffect, useState } from 'react';
import axios from 'axios';

import { API_KEY, BASE_URL } from './api/Core/constants';
import reactLogo from './assets/react.svg';

import './App.css';

const fetchData = () =>
	axios
		.get(`${BASE_URL}/movie/76341?api_key=${API_KEY}`)
		.then(({ data }) => data)
		.catch((err) => err);

function App() {
	const [count, setCount] = useState(0);
	const [, setData1] = useState('');

	useEffect(() => {
		fetchData().then((data) => setData1(data));
	}, []);

	return (
		<div className='App'>
			<div>
				<a href='https://vitejs.dev' rel='noreferrer' target='_blank'>
					<img alt='Vite logo' className='logo' src='/vite.svg' />
				</a>

				<a href='https://reactjs.org' rel='noreferrer' target='_blank'>
					<img alt='React logo' className='logo react' src={reactLogo} />
				</a>
			</div>
			<h1>Vite + React</h1>

			<div className='card'>
				{/* eslint-disable-next-line react/button-has-type,@typescript-eslint/no-shadow */}
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
		</div>
	);
}

export default App;
