export interface CardProps {
	title: string
	description: string
	dateRange: {
		start: string
		end: string
	}
	stats: {
		comments: number
		attachments: number
		progress: {
			current: number
			total: number
		}
	}
	labels: Array<{
		id: string
		text: string
		color?: string
	}>
	assignees: Array<{
		id: string
		avatar: string
		name: string
	}>
}
