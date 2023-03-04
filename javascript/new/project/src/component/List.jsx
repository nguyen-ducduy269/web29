import React from "react";
import Listitem from "./Listitem";

export default function List({ items = [], handleRemove, hide }) {
  items = items.map((item, index) => (
    <Listitem key={index}>
      {item}
      <button onClick={() => handleRemove(index)}>remove</button>
    </Listitem>
  ));
  return (
    <ul style={{ display: hide }} className="list">
      {items}
    </ul>
  );
}
