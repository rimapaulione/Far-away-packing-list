import { useEffect, useState } from "react";
import React from "react";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState(function () {
    const storedValue = localStorage.getItem("items");
    if (storedValue) return JSON.parse(storedValue);
    else return [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItemHandler = (item) => {
    setItems((items) => [...items, item]);
  };
  const deleteItemHandler = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const changeCheckedHandler = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const clearItemsHandler = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <Header />
      <Form onAddItem={addItemHandler} />
      <List
        itemsList={items}
        onChangeChecked={changeCheckedHandler}
        onDeleteItem={deleteItemHandler}
        onClearItems={clearItemsHandler}
      />
      <Footer items={items} />
    </div>
  );
}
export default App;
