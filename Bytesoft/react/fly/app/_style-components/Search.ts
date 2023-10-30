import styled from "styled-components";

export const Search = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  .btns {
    display: flex;
    width: 50%;
    height: 41px;
    padding: 8px;
    background-color: hsl(180, 17%, 95%);
    border-radius: 20px;
    height: 100%;
    margin-bottom: 10px;
    .singleBtn {
      padding: 0.8rem 1.5rem;
      font-size: 13px;
      border-radius: 3rem;
      width: 80%;
      text-align: center;
      cursor: pointer;
      line-height: 25px;
      height: 50px;
      &:hover {
        background-color: #58a7ff;
        color: white;
      }
    }
  }

  .search-input {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 5px;

    .search {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .typing {
      input {
        width: 90%;
        height: 30px;
        border-radius: 5px;
        padding-left: 10px;
        height: 40px;
      }
    }

    .date-picking {
      input {
        height: 30px;
      }
    }

    .search-btn {
      margin-top: 25px;
      height: 100%;
      background-color: #58a7ff;
    }
  }

  @media only screen and (min-width: 320px) {
    .btns {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin-bottom: 10px;
      .singleBtn {
        width: 100%;
      }
    }

    .search-input {
      display: flex;
      flex-direction: column;
      width: 90%;
      .search {
        input {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (min-width: 425px) {
    .btns {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin-bottom: 10px;
      .singleBtn {
        width: 100%;
      }
    }

    .search-input {
      display: flex;
      flex-direction: column;
      width: 70%;
      .search {
        input {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .btns {
      display: flex;
      flex-direction: row;
      width: 80%;
      margin-bottom: 10px;
      .singleBtn {
        width: 100%;
      }
    }

    .search-input {
      display: flex;
      flex-direction: row;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      .search {
        input {
          width: 90%;
        }
      }

      .search-btn {
        margin-top: 25px;
      }
    }
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1024px) {
  }
`;
