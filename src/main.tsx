import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from './config/reactQuery';
import { GlobalStyle } from './themes/GlobalStyle';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<GlobalStyle />
			<BrowserRouter>
				<App />
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
		</QueryClientProvider>
	</React.StrictMode>,
);
