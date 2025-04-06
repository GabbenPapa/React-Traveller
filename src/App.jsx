import { Logo, Form, PackingList, Stats } from "./Components";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div>
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats />
    </div>
  );
}
