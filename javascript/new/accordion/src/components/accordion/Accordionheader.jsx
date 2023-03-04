import React from 'react'

export default function Accordionheader({title, onClick}) {
  return (
    <h2 className="accordion-header">
      <button className="accordion-button" onClick={onClick}>{title}</button>
      <span className="accordion-"></span>
    </h2>
  )
}
