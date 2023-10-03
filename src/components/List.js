import { useState } from "react";
import Actions from "./Actions";
import ListItem from "./ListItem";

function List({ itemsList, onChangeChecked, onDeleteItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  const sortByHandler = (sortValue) => {
    setSortBy(sortValue);
  };
  let sortedItems;

  if (sortBy === "input") sortedItems = itemsList;
  if (sortBy === "description") {
    sortedItems = itemsList
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === "packed") {
    sortedItems = itemsList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onChangeChecked={onChangeChecked}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <Actions
        onClearItems={onClearItems}
        sortBy={sortBy}
        onSortBy={sortByHandler}
      />
    </div>
  );
}
export default List;
