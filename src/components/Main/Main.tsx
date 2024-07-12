import { Route, Routes } from 'react-router-dom'

import { Container } from '@chakra-ui/react'

import { Add } from '@components/MainComponents/Add'
import { Added } from '@components/MainComponents/Added'
import { Completed } from '@components/MainComponents/Completed'
import { useAddTaskStore } from '@store/useStore'

export const Main: React.FC = () => {
	const { tasks } = useAddTaskStore()

	return (
		<Container
			as="main"
			maxW="100%"
			py={10}
			minH="calc(100vh - 135px)"
		>
			<Routes>
				<Route
					path="/"
					element={<Add />}
				/>
				<Route
					path="/added-task"
					element={<Added addedItems={tasks} />}
				/>
				<Route
					path="/completed-task"
					element={<Completed />}
				/>
			</Routes>
		</Container>
	)
}
