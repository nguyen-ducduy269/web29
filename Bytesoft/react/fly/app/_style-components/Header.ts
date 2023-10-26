import styled from "styled-components";

export const HeaderMain = styled.div`
  background-color: #58a7ff;
  height: 64px;
  a {
    text-decoration: none;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main-header {
    height: 100%;
    .logo {
      display: flex;
      align-items: center;
      gap: 5px;
      b {
        font-weight: 600;
        color: white;
      }
    }

    .nav-link {
      width: 280px;
      display: flex;
      justify-content: space-between;
      a {
        color: white;
        font-size: 400;
        cursor: pointer;
      }
    }

    .auth {
      display: flex;
      gap: 10px;
    }
  }
`;
