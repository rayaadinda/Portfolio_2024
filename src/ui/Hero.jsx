import { motion } from "framer-motion"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

function Hero() {
	const [heroRef, heroControls] = useScrollAnimation()
	const [cardsRef, cardsControls] = useScrollAnimation(0.2)

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	}

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	}

	const floatingVariants = {
		hidden: { scale: 0, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 20,
			},
		},
	}

	return (
		<div className="min-h-screen flex flex-col justify-between relative">
			{/* Background Elements with enhanced animations */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="absolute inset-0 overflow-hidden pointer-events-none"
			>
				<motion.div
					variants={floatingVariants}
					className="absolute top-20 left-10 w-64 h-64 bg-blue/10 rounded-full blur-3xl"
				/>
				<motion.div
					variants={floatingVariants}
					className="absolute bottom-40 right-20 w-72 h-72 bg-orange/10 rounded-full blur-3xl"
				/>
				<motion.div
					variants={floatingVariants}
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow/10 rounded-full blur-3xl"
				/>

				{/* Floating Elements with enhanced animations */}
				<motion.div
					animate={{
						y: [0, -20, 0],
						rotate: [0, 5, -5, 0],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute top-20 right-32"
				>
					<div className="w-8 h-8 rounded-lg bg-blue rotate-12" />
				</motion.div>
				{/* Add similar animations for other floating elements */}
			</motion.div>

			{/* Hero Text with scroll animations */}
			<motion.div
				ref={heroRef}
				variants={containerVariants}
				initial="hidden"
				animate={heroControls}
				className="flex-1 flex items-center pt-20 md:pt-0"
			>
				<div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl space-y-4">
						<motion.h1
							variants={itemVariants}
							className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900"
						>
							Raya is a Geeks <span className="text-xs font-normal">(jk)</span>
						</motion.h1>
						<motion.div
							variants={itemVariants}
							className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-tight"
						>
							<p>
								He does <span className="text-[#3D99ED]">interaction</span>,
								<span className="text-[#22C55E]">graphics</span>,
							</p>
							<p>
								and <span className="text-[#F47F2B]">motion</span> design to
								bring joy :D
							</p>
						</motion.div>
					</div>
				</div>
			</motion.div>

			{/* Info Cards with scroll animations */}
			<motion.div
				ref={cardsRef}
				variants={containerVariants}
				initial="hidden"
				animate={cardsControls}
				className="w-full mt-8 md:mt-0"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 md:mb-8">
					{/* Mobile: Individual cards, Desktop: Single card with grid */}
					<div className="md:bg-white md:rounded-3xl md:shadow-sm">
						<div className="md:px-10 md:py-14">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-16">
								{/* Who this */}
								<div className="bg-white rounded-lg shadow-sm p-6 md:p-0 md:shadow-none md:bg-transparent">
									<div className="space-y-4">
										<h2 className="text-lg font-medium text-gray-900">
											Who this
										</h2>
										<p className="text-sm text-gray-500">
											Hello people, this is Raya adinda. I am currently studying
											in Universitas Pamulang.
										</p>
									</div>
								</div>

								{/* What purpose */}
								<div className="bg-white rounded-lg shadow-sm p-6 md:p-0 md:shadow-none md:bg-transparent">
									<div className="space-y-2">
										<h2 className="text-lg font-medium text-gray-900">
											What purpose
										</h2>
										<p className="text-sm text-gray-500">
											Looking at beautiful things makes me happy. I enjoy
											sharing things that amaze me with others and I want to
											create things that inspire people.
										</p>
									</div>
								</div>

								{/* How good */}
								<div className="bg-white rounded-lg shadow-sm p-6 md:p-0 md:shadow-none md:bg-transparent">
									<div className="space-y-2">
										<h2 className="text-lg font-medium text-gray-900">
											How good
										</h2>
										<p className="text-sm text-gray-500">
											Work experience? OK barely... I identify myself as a
											former child, but I am open to work, so if you find my
											projects interesting, contact me :D
										</p>
									</div>
								</div>

								<div className="bg-white rounded-lg shadow-sm p-6 md:p-0 md:shadow-none md:bg-transparent relative">
									<div className="space-y-2">
										<h2 className="text-lg font-medium text-gray-900">
											My <span className="underline">rabbit</span> chilling
										</h2>
										<p className="text-sm text-gray-500">
											I love games, if you have any game recommendations, please
											share :D. I also enjoy hiking, skiing, and free diving.
										</p>
									</div>

									{/* Ilustrasi */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.4 }}
										className="absolute -top-44 -right-4 w-24 md:w-32"
									>
										<img
											src="/src/assets/ilus.svg"
											alt="Character illustration"
											className="w-full h-auto"
										/>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default Hero
