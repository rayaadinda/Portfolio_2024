import { motion } from "framer-motion"

const iconVariants = {
	hidden: { opacity: 0, scale: 0.5 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
	hover: {
		scale: 1.1,
		rotate: [0, -10, 10, -10, 0],
		transition: {
			duration: 0.5,
		},
	},
}

function AnimatedIcon({ icon: Icon, color }) {
	return (
		<motion.div
			variants={iconVariants}
			initial="hidden"
			animate="visible"
			whileHover="hover"
			className={`p-3 rounded-full bg-${color}/10`}
		>
			<Icon className={`w-6 h-6 text-${color}`} />
		</motion.div>
	)
}

export default AnimatedIcon
