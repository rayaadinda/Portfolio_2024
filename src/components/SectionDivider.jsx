function SectionDivider() {
	return (
		<div className="flex items-center justify-center py-16">
			<div className="flex items-center space-x-4">
				<div className="w-32 h-[1px] bg-gradient-to-r from-transparent to-gray-200" />
				<div className="w-2 h-2 rounded-full bg-orange rotate-45" />
				<div className="w-2 h-2 rounded-full bg-blue" />
				<div className="w-2 h-2 rounded-full bg-yellow rotate-45" />
				<div className="w-32 h-[1px] bg-gradient-to-l from-transparent to-gray-200" />
			</div>
		</div>
	)
}

export default SectionDivider
