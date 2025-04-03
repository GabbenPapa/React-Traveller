import "./index.css";

export function Logo() {
	return <h1>Far Away</h1>;
}

export function Form() {
	return (
	<div className="add-form">
		<h3>What do you need for your trip?</h3>
	</div>
	);
}

export function PackingList() {
	return <div className="list">PackingList</div>;
}

export function Stats() {
	return (
		<footer className="stats">
			<em>
				You have x items on your list, and you already packed x items
			</em>
		</footer>
	);
}
