import React from "react";
import Listitem from "./Listitem";

export default function List({ items = [] }) {
  items = items.map((item, index) => <Listitem key={index}>{item}</Listitem>);
  return <ul className="list">{items}</ul>;
}
