import { useState } from "react";

function Form({ onAddItem }) {
  const [item, setItem] = useState("");
  const [qty, setQty] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!item) return;

    const newItem = {
      id: Date.now(),
      name: item,
      qty: qty,
      packed: false,
    };
    onAddItem(newItem);
    setItem("");
    setQty(1);
  };

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3>What do you need for your trip?</h3>
      <select onChange={(e) => setQty(+e.target.value)} value={qty}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        id="item"
        value={item}
        placeholder="Item..."
        onChange={(e) => setItem(e.target.value)}
      ></input>
      <button className="">Add</button>
    </form>
  );
}

export default Form;
