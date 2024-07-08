import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { QueryClientProvider } from '@tanstack/react-query'

import { App } from '@components/App'
import { ThemeProvider } from '@providers/ThemeProvider'

import './i18n'
import { queryClient } from './query'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<Router>
					<App />
				</Router>
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
