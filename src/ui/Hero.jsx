function Hero() {
	return (
		<div className="min-h-screen flex flex-col justify-between relative">
			{/* Hero Text - at the center */}
			<div className="flex-1 flex items-center pt-20 md:pt-0">
				<div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl space-y-4">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">
							Raya is a Geeks <span className="text-xs font-normal">(jk)</span>
						</h1>
						<div className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-tight">
							<p>
								He does <span className="text-[#3D99ED]">interaction</span>,
								<span className="text-[#22C55E]">graphics</span>,
							</p>
							<p>
								and <span className="text-[#F47F2B]">motion</span> design to
								bring joy :D
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Info Cards - at the bottom */}
			<div className="w-full mt-8 md:mt-0">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 md:mb-8">
					<div className="bg-white rounded-lg md:rounded-3xl shadow-sm">
						<div className="px-6 py-8 md:px-10 md:py-14">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
								<div className="space-y-2 md:space-y-3">
									<h2 className="text-lg md:text-xl font-medium text-gray-900">
										Who this
									</h2>
									<p className="text-sm md:text-base text-gray-500">
										Hello people, this is Diana Lu. I am currently studying in
										ArtCenter College of Design.
									</p>
								</div>

								<div className="space-y-3">
									<h2 className="text-xl font-medium text-gray-900">
										What purpose
									</h2>
									<p className="text-gray-500">
										Looking at beautiful things makes me happy. I enjoy sharing
										things that amaze me with others and I want to create things
										that inspire people.
									</p>
								</div>

								<div className="space-y-3">
									<h2 className="text-xl font-medium text-gray-900">
										How good
									</h2>
									<p className="text-gray-500">
										Work experience? OK barely... I identify myself as a former
										child, but I am open to work, so if you find my projects
										interesting, contact me :D
									</p>
								</div>

								<div className="space-y-3">
									<h2 className="text-xl font-medium text-gray-900">
										My <span className="underline">rabbit</span> chilling
									</h2>
									<p className="text-gray-500">
										I love games, if you have any game recommendations, please
										share :D. I also enjoy hiking, skiing, and free diving.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
