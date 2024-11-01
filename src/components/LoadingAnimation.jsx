import { motion } from "framer-motion"

function LoadingAnimation() {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
			<div className="flex space-x-2">
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="w-4 h-4 rounded-full bg-blue"
				/>
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360],
					}}
					transition={{
						duration: 2,
						delay: 0.2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="w-4 h-4 rounded-full bg-orange"
				/>
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360],
					}}
					transition={{
						duration: 2,
						delay: 0.4,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="w-4 h-4 rounded-full bg-yellow"
				/>
			</div>
		</div>
	)
}

export default LoadingAnimation
