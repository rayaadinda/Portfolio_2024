function HeroSection() {
	return (
		<div className="bg-white rounded-3xl shadow-sm mb-8">
			<div className="max-w-7xl mx-auto px-2 py-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="space-y-3">
						<h2 className="text-xl font-medium text-gray-900">Who this</h2>
						<p className="text-gray-500">
							Hello people, this is Diana Lu. I am currently studying in
							ArtCenter College of Design.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-medium text-gray-900">What purpose</h2>
						<p className="text-gray-500">
							Looking at beautiful things makes me happy. I enjoy sharing things
							that amaze me with others and I want to create things that inspire
							people.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-medium text-gray-900">How good</h2>
						<p className="text-gray-500">
							Work experience? OK barely... I identify myself as a former child,
							but I am open to work, so if you find my projects interesting,
							contact me :D
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-medium text-gray-900">
							My <span className="underline">rabbit</span> chilling
						</h2>
						<p className="text-gray-500">
							I love games, if you have any game recommendations, please share
							:D. I also enjoy hiking, skiing, and free diving.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
