import "./index.css";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: false },
	{ id: 3, description: "Charger", quantity: 1, packed: true },
];

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
	return (
		<div className="list">
			<ul>
				{initialItems.map((item) => (<Item item={item} />))}
			</ul>
		</div>
	);
}

function Item({ item }) {
	return (
		<li>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>
			<button className="remove">❌</button>
		</li>
	);
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
