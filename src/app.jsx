import { useState, useEffect } from "react"
import { cardsData } from "./data/cards"
import Card from "./components/Card"
import Hero from "./ui/Hero"
import SectionDivider from "./components/SectionDivider"
import ParticleBackground from "./components/ParticleBackground"
import LoadingAnimation from "./components/LoadingAnimation"
import ScrollProgress from "./components/ScrollProgress"

function App() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 2000)
	}, [])

	if (isLoading) return <LoadingAnimation />

	return (
		<main className="min-h-screen bg-gray-100">
			<ScrollProgress />
			<ParticleBackground />
			<Hero />
			<SectionDivider />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{cardsData.map((card, index) => (
						<Card key={index} {...card} />
					))}
				</div>
			</div>
		</main>
	)
}

export default App
