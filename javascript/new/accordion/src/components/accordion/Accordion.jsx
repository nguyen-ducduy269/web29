import React from 'react'
import AccordionItem from './AccordionItem'

export default function Accordion({items = []}) {
  const children = items.map((item, index) => AccordionItem key ={index} {...item})
}
