function ListItem({ item, onChangeChecked, onDeleteItem }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => onChangeChecked(item.id)}
        value={item.packed}
        checked={item.packed}
      ></input>
      <span className={item.packed ? "checked" : ""}>
        {item.qty} {item.name}
      </span>
      <button
        type="button"
        onClick={() => onDeleteItem(item.id)}
        value={item.id}
      >
        ❌
      </button>
    </li>
  );
}

export default ListItem;
