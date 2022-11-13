import React from 'react';

const Loader = () => (
	<svg
		height='200px'
		preserveAspectRatio='xMidYMid'
		style={{
			margin: 'auto',
			background: 'rgb(255, 255, 255)',
			display: 'block',
			shapeRendering: 'auto',
		}}
		viewBox='0 0 100 100'
		width='200px'
	>
		<path
			d='M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z'
			fill='none'
			stroke='#e90c59'
			strokeDasharray='42.76482137044271 42.76482137044271'
			strokeLinecap='round'
			strokeWidth='8'
			style={{ transform: 'scale(0.8)', transformOrigin: '50px 50px' }}
		>
			<animate
				attributeName='stroke-dashoffset'
				dur='1s'
				keyTimes='0;1'
				repeatCount='indefinite'
				values='0;256.58892822265625'
			/>
		</path>
	</svg>
);

export default Loader;
