import { Box } from '@chakra-ui/react'

import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { Main } from '@components/Main'

export const App: React.FC = () => {
	return (
		<Box
			as="div"
			maxW="90rem"
			mx="auto"
			minH="100dvh"
		>
			<Header />
			<Main />
			<Footer />
		</Box>
	)
}
