import styled from "styled-components";

export const SupportStyle = styled.div`
  .section {
    padding: 4rem 0 2rem;
    .sectionContainer {
      .tittleDiv {
        text-align: center;
        small {
          letter-spacing: 0.8rem;
          text-transform: uppercase;
          font-size: 13px;
          color: hsl(0, 0%, 12%);
          line-height: 1.5rem;
        }
        h2 {
          font-size: 25px;
          padding: 1rem 0;
          color: hsl(0, 0%, 12%);
        }
      }

      .infoDiv {
        display: grid;
        align-items: center;
        margin-top: 2rem;
        gap: 1.5rem;
        .textDiv {
          display: grid;
          align-items: center;
          gap: 1.5rem;
          .singleInfo {
            .number {
              padding: 5px 12px;
              width: 40px;
              border-radius: 3rem;
              text-align: center;
              font-size: 13px;
              font-weight: 700;
              color: hsl(0, 0%, 100%);
            }
          }
        }

        .imgDiv {
          margin: auto;
          img {
            width: 100%;
            max-width: 420px;
            border-radius: 15px;
          }
        }
      }
    }
  }
`;
