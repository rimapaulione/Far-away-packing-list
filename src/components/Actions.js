function Actions({ onClearItems, sortBy, onSortBy }) {
  const clearItemsHandler = () => {
    alert("Are you sure you want to delete all items?");
    onClearItems();
  };
  return (
    <div className="actions">
      <select value={sortBy} onChange={(e) => onSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button onClick={clearItemsHandler}>Clear list</button>
    </div>
  );
}

export default Actions;
