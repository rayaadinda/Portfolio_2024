import { cardsData } from "./data/cards"
import Card from "./components/Card"
import Hero from "./ui/Hero"

function App() {
	return (
		<main className="min-h-screen bg-gray-100">
			<Hero />
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
