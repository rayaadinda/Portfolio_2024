import { motion } from "framer-motion"

function InfoCard({ title, description, icon }) {
	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
		>
			<div className="flex items-start space-x-4">
				<div className="p-3 rounded-full bg-gray-50">{icon}</div>
				<div>
					<h3 className="text-lg font-medium text-gray-900">{title}</h3>
					<p className="mt-2 text-sm text-gray-500">{description}</p>
				</div>
			</div>
		</motion.div>
	)
}
