export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((e) => e.packed === true).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  console.log(percentage);
  return (
    <footer className="stats">
      {percentage !== 100
        ? `you have ${numItems} items on your list ${numPacked}
      ${numPacked > 1 ? "are" : "is"} packed (${percentage ? percentage : 0})%`
        : "you are done"}
    </footer>
  );
}
