import React from "react";

export default function Box(box, handleBox) {
  const handleChangeBox = (e) => {
    setBox(e.target.value);
    e.preventDefault();
    onSubmit(box);
  };

  return <button onSubmit={handleChangeBox}>Them boxs:</button>;
}
