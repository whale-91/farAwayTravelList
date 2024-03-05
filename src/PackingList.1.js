import { useState } from "react";
// import { Item } from "./App";
import Item from "./Item";
export function PackingList({
  items,
  onDeleteItem,
  onToggleitem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "desc") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleitem={onToggleitem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input</option>
          <option value="desc">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={onClearList}>clearList</button>
      </div>
    </div>
  );
}
