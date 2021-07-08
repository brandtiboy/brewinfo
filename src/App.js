import './App.scss';

function App() {
  return (
    <div className="App">
		<header>
			<h1>Brewinfo</h1>
		</header>

		<main>
			<div className="quote">
				<span>“I want someone to look at me the way i look at coffee”</span>
			</div>

			<div className="tap">
				<h2>Tap to change</h2>
				<div className="tap__selections">
					<div className="tap__size tap__selection">
						<p>Medium</p><span>Grind size</span>
					</div>
					<div className="tap__amount tap__selection">
						<p>13g</p><span>Grind amount</span>
					</div>
					<div className="tap__water tap__selection">
						<p>220ml</p><span>Water</span>
					</div>
				</div>
			</div>

			<div className="steps">
				<h2>Steps to follow</h2>
				<div className="steps__container">
					<div>
					<div>
						<p className="is-active">Pour over 50g of water until the coffee is covered</p>
					</div>
					<div>
						<p>Wait until coffee is bloomed</p>
					</div>
					<div>
						<p>Pour over 50g of water in a rotation</p>
					</div>
					<div>
						<p>Wait until water is through and pour over 150g of water</p>
					</div>
					</div>
				</div>
			</div>
		</main>
    </div>
  );
}

export default App;
