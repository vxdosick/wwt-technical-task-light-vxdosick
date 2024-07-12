import React from 'react'
import { useTranslation } from 'react-i18next'

import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Button,
	Center,
	CloseButton,
	FormControl,
	FormLabel,
	Heading,
	Input,
	VStack
} from '@chakra-ui/react'

import { useAddTaskStore } from '@store/useStore'

export const Add: React.FC = () => {
	const {
		title,
		description,
		setTitle,
		setDescription,
		addTask,
		tasks,
		isAlertVisible,
		setAlert
	} = useAddTaskStore()
	const { t } = useTranslation()

	const handleAddTask = (e: React.FormEvent) => {
		e.preventDefault()
		const isTitleDuplicate = tasks.some(task => task.title === title)

		if (isTitleDuplicate) {
			setAlert(true, t('errorTitle'))
			return
		}

		const newTask = {
			id: tasks.length + 1,
			title,
			description,
			isComplete: false
		}
		addTask(newTask)
		setTitle('')
		setDescription('')
		setAlert(false, '')
	}

	return (
		<>
			<Center
				as="header"
				mb={10}
			>
				<Heading
					as="h1"
					size="xl"
				>
					{t('addHeader')}
				</Heading>
			</Center>
			<FormControl
				as="form"
				maxW="100%"
				onSubmit={handleAddTask}
			>
				<VStack
					as="div"
					align="start"
					maxW="500px"
					margin="auto"
				>
					<FormLabel
						as="label"
						fontWeight="bold"
						mb="0"
					>
						{t('inputTitle')}
					</FormLabel>
					<Input
						as="input"
						required
						placeholder={t('inputTitlePlaceholder')}
						onChange={e => setTitle(e.target.value)}
						value={title}
						maxW="500px"
						size="md"
						mb="5"
					/>
					<FormLabel
						as="label"
						fontWeight="bold"
						mb="0"
					>
						{t('inputDescription')}
					</FormLabel>
					<Input
						as="input"
						placeholder={t('inputDescriptionPlaceholder')}
						onChange={e => setDescription(e.target.value)}
						value={description}
						maxW="500px"
						size="md"
						mb="5"
					/>
					<Button
						as="button"
						type="submit"
						variant="solid"
						colorScheme="red"
					>
						{t('addTaskButton')}
					</Button>
				</VStack>
			</FormControl>
			{isAlertVisible && (
				<Alert
					as="div"
					status="error"
					variant="solid"
					maxW="500px"
					mt={4}
					mx="auto"
				>
					<AlertIcon as="image" />
					<AlertTitle
						as="h3"
						mr={2}
					>
						{t('errorTitle')}
					</AlertTitle>
					<AlertDescription as="p">{t('failedMessage')}</AlertDescription>
					<CloseButton
						as="button"
						position="absolute"
						right="8px"
						top="8px"
						onClick={() => setAlert(false, '')}
					/>
				</Alert>
			)}
		</>
	)
}
