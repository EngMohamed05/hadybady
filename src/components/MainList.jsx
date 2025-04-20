import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function MainList() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleItem = (event) => {
    setItem(event.target.value);
  };

  const handleItems = () => {
    if (item.trim() !== "") {
      setItems([...items, item]);
      setItem("");
    }
  };

  const handleGo = () => {
    if (items.length === 0) return;

    setIsAnimating(true);
    setSelectedItem(null);

    setTimeout(() => {
      const random = items[Math.floor(Math.random() * items.length)];
      setSelectedItem(random);
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <div className="main-container">
      <div className="input" style={{ marginTop: "25px" }}>
        <TextField
          onChange={handleItem}
          value={item}
          id="standard-basic"
          label="Option"
          variant="standard"
          placeholder="Bla Bla.."
        />
        <Button variant="contained" color="success" onClick={handleItems}>
          Add
        </Button>
      </div>

      <ul>
        <div className="list">
          {items.map((itm, index) => (
            <li key={index}>{itm}</li>
          ))}
        </div>
      </ul>

      <Button
        variant="contained"
        className={isAnimating ? "go-button animating" : "go-button"}
        onClick={handleGo}
      >
        Start!
      </Button>

      {selectedItem && (
        <div className="result">
          🎉 Go And Do <strong>{selectedItem}</strong> !!🎉
        </div>
      )}
    </div>
  );
}
