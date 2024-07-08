import { create } from 'zustand'

interface Task {
	id: number
	title: string
	description: string
	isComplete: boolean
}

interface FormState {
	title: string
	description: string
	setTitle: (title: string) => void
	setDescription: (description: string) => void
}

interface TaskState {
	tasks: Task[]
	addTask: (task: Task) => void
	removeTask: (id: number) => void
	toggleComplete: (id: number) => void
	updateTask: (id: number, title: string, description: string) => void
	loadTasks: () => void
}

const loadTasksFromLocalStorage = (): Task[] => {
	const tasks = localStorage.getItem('tasks')
	return tasks ? JSON.parse(tasks) : []
}

export const useAddTaskStore = create<FormState & TaskState>(set => ({
	title: '',
	description: '',
	setTitle: title => set({ title }),
	setDescription: description => set({ description }),
	tasks: loadTasksFromLocalStorage(),
	addTask: task =>
		set(state => {
			const updatedTasks = [...state.tasks, { ...task, isComplete: false }]
			localStorage.setItem('tasks', JSON.stringify(updatedTasks))
			return { tasks: updatedTasks }
		}),
	removeTask: id =>
		set(state => {
			const updatedTasks = state.tasks.filter(task => task.id !== id)
			localStorage.setItem('tasks', JSON.stringify(updatedTasks))
			return { tasks: updatedTasks }
		}),
	toggleComplete: id =>
		set(state => {
			const updatedTasks = state.tasks.map(task =>
				task.id === id ? { ...task, isComplete: !task.isComplete } : task
			)
			localStorage.setItem('tasks', JSON.stringify(updatedTasks))
			return { tasks: updatedTasks }
		}),
	updateTask: (id, title, description) =>
		set(state => {
			const updatedTasks = state.tasks.map(task =>
				task.id === id ? { ...task, title, description } : task
			)
			localStorage.setItem('tasks', JSON.stringify(updatedTasks))
			return { tasks: updatedTasks }
		}),
	loadTasks: () => set({ tasks: loadTasksFromLocalStorage() })
}))
