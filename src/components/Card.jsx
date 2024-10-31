import PropTypes from "prop-types"

function Card({
	title,
	description,
	image,
	dateRange,
	stats,
	labels,
	assignees,
}) {
	return (
		<div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
			<div className="space-y-3">
				{/* Header */}
				<div className="flex items-start justify-between">
					<h3 className="text-base font-medium text-gray-900">{title}</h3>
					<div className="flex items-center gap-3">
						<button className="text-gray-400 hover:text-gray-500">
							<span className="sr-only">Options</span>
							<svg
								className="w-5 h-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Description */}
				<p className="text-sm text-gray-600">{description}</p>

				{image && (
					<div className="mb-3">
						<img
							src={image}
							alt="Post content"
							className="w-full h-auto rounded-xl object-cover"
						/>
					</div>
				)}

				{/* Date Range */}
				<div className="flex items-center text-sm text-gray-500">
					<svg
						className="w-4 h-4 mr-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
					<span>
						{dateRange.start} - {dateRange.end}
					</span>
				</div>

				{/* Stats and Labels */}
				<div className="flex items-center gap-3 flex-wrap">
					{/* Assignees */}
					<div className="flex -space-x-2">
						{assignees.map((assignee) => (
							<img
								key={assignee.id}
								className="w-6 h-6 rounded-full border-2 border-white"
								src={assignee.avatar}
								alt={assignee.name}
							/>
						))}
					</div>

					{/* Comments */}
					<div className="flex items-center text-gray-500">
						<svg
							className="w-4 h-4 mr-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
							/>
						</svg>
						<span className="text-sm">{stats.comments}</span>
					</div>

					{/* Attachments */}
					<div className="flex items-center text-gray-500">
						<svg
							className="w-4 h-4 mr-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
							/>
						</svg>
						<span className="text-sm">{stats.attachments}</span>
					</div>

					{/* Progress */}
					<div className="flex items-center gap-1">
						<div className="w-4 h-4 rounded-full border-2 border-green-500 flex items-center justify-center">
							<div className="w-2 h-2 rounded-full bg-green-500"></div>
						</div>
						<span className="text-sm text-gray-500">
							{stats.progress.current}/{stats.progress.total}
						</span>
					</div>

					{/* Labels */}
					<div className="flex gap-1">
						{labels.map((label) => (
							<span
								key={label.id}
								className="px-2 py-1 text-xs rounded-full"
								style={{
									backgroundColor: label.color || "#e5e7eb",
									color: label.color ? "white" : "black",
								}}
							>
								{label.text}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	dateRange: PropTypes.shape({
		start: PropTypes.string.isRequired,
		end: PropTypes.string.isRequired,
	}).isRequired,
	stats: PropTypes.shape({
		comments: PropTypes.number.isRequired,
		attachments: PropTypes.number.isRequired,
		progress: PropTypes.shape({
			current: PropTypes.number.isRequired,
			total: PropTypes.number.isRequired,
		}).isRequired,
	}).isRequired,
	labels: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			color: PropTypes.string,
		})
	).isRequired,
	assignees: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
}

export default Card
