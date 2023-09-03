import React from "react";
import { Accordion } from "react-bootstrap";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
const AccordionPage = () => {
  const data = [
    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, qui. Consectetur exercitationem delectus suscipit necessitatibus quam accusamus maxime ipsa ullam, odio dolore, soluta labore sed nihil ipsum corrupti! Magni, dicta?",
    },

    {
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, qui. Consectetur exercitationem delectus suscipit necessitatibus quam accusamus maxime ipsa ullam, odio dolore, soluta labore sed nihil ipsum corrupti! Magni, dicta?",
    },

    {
      title: "Title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, qui. Consectetur exercitationem delectus suscipit necessitatibus quam accusamus maxime ipsa ullam, odio dolore, soluta labore sed nihil ipsum corrupti! Magni, dicta?",
    },

    {
      title: "Title 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, qui. Consectetur exercitationem delectus suscipit necessitatibus quam accusamus maxime ipsa ullam, odio dolore, soluta labore sed nihil ipsum corrupti! Magni, dicta?",
    },
  ];

  return (
    <>
      <div className="accordion">
        {data.map((item) => {
          return (
            <Accordion id="accordionExample">
              <AccordionItem eventKey={""}>
                <AccordionHeader>{item.title}</AccordionHeader>

                <AccordionBody>{item.description}</AccordionBody>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

export default AccordionPage;
