import React from 'react';

function GrindSize() {
	return (
		<div>
			<h1>Choose grind size</h1>

			<div className="tap">
				<div className="tap__selections">
					<div className="tap__selection">
						<p>Fine</p>
					</div>
					<div className="tap__selection tap__active">
						<p>Medium</p>
					</div>
					<div className="tap__selection">
						<p>Coarse</p>
					</div>
				</div>
			</div>

			<div className="info">
			<h2>What to know</h2>
				<div className="info__box">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed perspiciatis nisi alias aliquid, iure saepe sint modi dolorem placeat debitis! Nostrum autem, ex nobis tenetur cumque similique totam facere inventore?</p>
				</div>
			</div>

			<div className="info">
			<h2>Suggested products</h2>
				<div className="info__box">
					<ul>
						<li>
							<a href="">Brazil</a>
						</li>
						<li>
							<a href="">Indonisia</a>
						</li>
						<li>
							<a href="">South Korea</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default GrindSize;