import { useTranslation } from 'react-i18next'

import { Button, Center, Heading, List, ListItem, Text } from '@chakra-ui/react'

import { useAddTaskStore } from '@store/useStore'

export const Completed: React.FC = () => {
	const { tasks, toggleComplete } = useAddTaskStore()
	const completedTasks = tasks.filter(task => task.isComplete)
	const { t } = useTranslation()

	return (
		<>
			<Center
				as="header"
				mb="10"
			>
				<Heading
					as="h2"
					size="xl"
				>
					{t('completedHeader')}
				</Heading>
			</Center>
			{completedTasks.length > 0 ? (
				<List
					as="ul"
					spacing="3"
				>
					{completedTasks.map(task => (
						<ListItem
							as="li"
							key={task.id}
						>
							<Heading
								as="h3"
								mb="4"
								fontSize="lg"
							>
								{t('taskNumber')} {task.id}: {task.title}
							</Heading>
							{task.description ? (
								<Text
									as="p"
									mb="4"
									fontSize="md"
								>
									{t('taskDetails')} {task.description}
								</Text>
							) : (
								<Text
									as="p"
									mb="4"
									fontSize="md"
								>
									{t('noTaskDetails')}
								</Text>
							)}
							<Button
								as="button"
								colorScheme="orange"
								p="5"
								size="xs"
								fontSize="md"
								onClick={() => toggleComplete(task.id)}
							>
								{t('returntoComplete')}
							</Button>
						</ListItem>
					))}
				</List>
			) : (
				<Heading
					as="h2"
					textAlign="center"
				>
					{t('completedEmptyMessage')}
				</Heading>
			)}
		</>
	)
}
