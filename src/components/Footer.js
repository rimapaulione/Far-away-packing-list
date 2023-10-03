function Footer({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <h3>Start adding some items to your packing list 🚀</h3>
      </footer>
    );

  const itemsLength = items.length;
  const packedItemsLength = items.filter((item) => item.packed).length;
  const procOfPacked = Math.round((packedItemsLength / itemsLength) * 100);

  return (
    <footer className="stats">
      {procOfPacked === 100 ? (
        <h3>You are ready to go ... ✈️</h3>
      ) : (
        <h3>
          🧳 You have {itemsLength} items on your list, and you already packed{" "}
          {packedItemsLength} ({procOfPacked} %).
        </h3>
      )}
    </footer>
  );
}
export default Footer;
