import React, { useState } from "react";
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

  const [myData, setMyData] = useState(false);

  return (
    <>
      <div className="accordion">
        {data.map((item) => {
          return (
            <div className="accordion-page">
              <div className="item">
                <div
                  className="header-accordion"
                  onClick={() => setMyData(!myData)}
                >
                  {item.title}{" "}
                  {myData ? (
                    <i className="fa-solid fa-caret-up"></i>
                  ) : (
                    <i className="fa-solid fa-caret-down"></i>
                  )}
                </div>

                {myData ? (
                  <div className="body-accordion">{item.description}</div>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AccordionPage;
