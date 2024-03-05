import { useState } from "react";
export default function Form({ onAdditems }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, amount: 1, packed: false, id: Date.now() };
    onAdditems(newItem);
    // initialItems.push(newItem);
    // console.log(initialItems);
    setDescription("");
    setAmount("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for you trip</h3>
      <select
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((e) => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>add</button>
    </form>
  );
}
