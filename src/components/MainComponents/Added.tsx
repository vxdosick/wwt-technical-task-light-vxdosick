import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
	Box,
	Button,
	ButtonGroup,
	Center,
	Heading,
	Input,
	List,
	ListItem,
	Text
} from '@chakra-ui/react'

import { useAddTaskStore } from '@store/useStore'

interface Task {
	id: number
	title: string
	description: string
	isComplete: boolean
}
interface AddedProps {
	addedItems: Task[]
}

export const Added: React.FC<AddedProps> = ({ addedItems }) => {
	const { removeTask, toggleComplete, updateTask, loadTasks } =
		useAddTaskStore()
	const { t } = useTranslation()
	const [editMode, setEditMode] = useState<number | null>(null)
	const [editTitle, setEditTitle] = useState<string>('')
	const [editDescription, setEditDescription] = useState<string>('')

	useEffect(() => {
		loadTasks()
	}, [loadTasks])

	const handleEditClick = (task: Task) => {
		setEditMode(task.id)
		setEditTitle(task.title)
		setEditDescription(task.description)
	}

	const handleSaveClick = (id: number) => {
		updateTask(id, editTitle, editDescription)
		setEditMode(null)
	}

	return (
		<>
			<Center
				as="header"
				mb={10}
			>
				<Heading
					as="h2"
					size="xl"
				>
					{t('addedHeader')}
				</Heading>
			</Center>
			<Box as="div">
				<List
					as="ul"
					spacing={'3'}
				>
					{addedItems.length > 0 ? (
						addedItems.map(item => (
							<ListItem
								as="li"
								key={item.id}
							>
								{editMode === item.id ? (
									<>
										<Input
											value={editTitle}
											onChange={e => setEditTitle(e.target.value)}
											mb={'4'}
											fontSize={'lg'}
										/>
										<Input
											value={editDescription}
											onChange={e => setEditDescription(e.target.value)}
											mb={'4'}
											fontSize={'md'}
										/>
										<Button onClick={() => handleSaveClick(item.id)}>
											{t('saveButton')}
										</Button>
									</>
								) : (
									<>
										<Heading
											mb={'4'}
											as={'h3'}
											fontSize={'lg'}
										>
											{t('taskNumber')} {item.id}: {item.title}
										</Heading>
										{item.description ? (
											<Text
												as={'p'}
												mb={'4'}
												fontSize={'md'}
											>
												{t('taskDetails')} {item.description}
											</Text>
										) : (
											<Text
												as={'p'}
												mb={'4'}
												fontSize={'md'}
											>
												{t('noTaskDetails')}
											</Text>
										)}
										<ButtonGroup as="div">
											<Button
												as="button"
												p={'5'}
												colorScheme={item.isComplete ? 'green' : 'gray'}
												size={'xs'}
												fontSize={'md'}
												onClick={() => toggleComplete(item.id)}
											>
												{item.isComplete
													? t('completedButton')
													: t('completeButton')}
											</Button>
											<Button
												as="button"
												p={'5'}
												colorScheme="orange"
												size={'xs'}
												fontSize={'md'}
												onClick={() => handleEditClick(item)}
											>
												{t('updateButton')}
											</Button>
											<Button
												as="button"
												p={'5'}
												colorScheme="red"
												size={'xs'}
												fontSize={'md'}
												onClick={() => removeTask(item.id)}
											>
												{t('deleteButton')}
											</Button>
										</ButtonGroup>
									</>
								)}
							</ListItem>
						))
					) : (
						<Heading
							as="h2"
							textAlign={'center'}
						>
							{t('addedEmptyMessage')}
						</Heading>
					)}
				</List>
			</Box>
		</>
	)
}
