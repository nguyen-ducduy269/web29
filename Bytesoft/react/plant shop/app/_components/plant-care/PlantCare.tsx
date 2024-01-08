import { Container } from "@/app/_style-components/home-page-css/Container";
import { PlantCareCss } from "@/app/_style-components/plant-care/PlantCareCss";
import React from "react";

const PlantCare = () => {
  return (
    <>
      <PlantCareCss>
        <Container>
          <div className="header">
            <h1>Plant Care Guides</h1>
            <p>
              Access our digital care guide booklet here. It includes
              species-specific care info with lots of great plant tips!
            </p>
            <a href="https://drive.google.com/file/d/1TZsCFzGogY154kv6FDsxbBthwkkEwWoA/view">
              <button className="to-pdf">Care Guide PDF</button>
            </a>
          </div>

          <div className="content"></div>
        </Container>
      </PlantCareCss>
    </>
  );
};

export default PlantCare;
