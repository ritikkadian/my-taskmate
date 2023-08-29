import { useState } from "react";
export default function TodoForm({ onSubmit }) {
  const [item, setItem] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    onSubmit(item);
    setItem("");
  }
  return (
    <form onSubmit={submitHandler} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={item}
          type="text"
          id="item"
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="btn">Add</button>
      </div>
    </form>
  );
}
