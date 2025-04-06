import "./index.css";
import { useState } from "react";

export function Logo() {
  return <h1>Far Away</h1>;
}

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export function PackingList({ items, onDeleteItem, onDeleteAll, onToggle }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [...items];

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onDeleteAll={onDeleteAll}
            onToggle={onToggle}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onDeleteAll}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggle }) {
  function handleDelete() {
    onDeleteItem(item.id);
  }
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="remove" onClick={() => handleDelete(item.id)}>
        ❌
      </button>
    </li>
  );
}

export function Stats({ items }) {
  if (!items.length) {
    return (
      <div className="stats">
        <em>Your list is empty</em>
      </div>
    );
  }

  const numOfItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPackedItems / numOfItems) * 100) || 0;

  // function handleitem(item) {
  //   setItems((items) => [...items, item]);
  // }

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything!"
          : `You have ${numOfItems} items on your list, and you already packed
        ${numOfPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
