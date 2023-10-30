import styled from "styled-components";

export const HeaderMain = styled.div`
  background-image: url(https://wallpapers.com/images/hd/1366x768-travel-background-vk9c2y88x4bx63ob.jpg);
  background-repeat: no-repeat;
  height: 600px;
  width: 100%;
  background-size: cover;
  background-position: top;
  position: relative;
  a {
    text-decoration: none;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .outsite {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: #00000080;
    z-index: 1;
  }

  .main-header {
    position: relative;
    z-index: 10;
    padding-top: 10px;
    .logo {
      display: flex;
      gap: 10px;
      align-items: center;
      b {
        font-size: 20px;
        color: white;
      }
    }

    .nav-link {
      width: 30%;
      display: flex;
      justify-content: space-around;
      a {
        color: white;
        &:hover {
          color: #58a7ff;
        }
      }
    }

    .auth {
      display: flex;
      gap: 10px;
      button {
        width: 120px;
        height: 32px;
      }
    }

    .drop-down {
      display: none;
    }
  }

  .header-content {
    width: 40%;
    margin: 0 auto;
    padding-top: 150px;
    position: relative;
    z-index: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 24px;
      color: white;
      text-align: center;
      margin: 0;
    }

    .line {
      width: 50px;
      height: 3px;
      background-color: #58a7ff;
      margin-bottom: 20px;
      margin-top: 10px;
    }

    p {
      font-size: 68px;
      color: white;
      text-align: center;
      margin: 0;
      font-weight: 600;
      margin-bottom: 100px;
    }

    .button {
      width: 140px;
      height: 40px;
      border-radius: 15px;
      font-size: 14px;
      font-weight: 600;
      background-color: #58a7ff;
    }
  }

  @media only screen and (min-width: 320px) {
    .main-header {
      .nav-link {
        display: none;
      }

      .auth {
        display: none;
      }

      .drop-down {
        display: block;
        margin-right: 10px;
        font-size: 20px;
        color: white;
      }

      .menu {
        position: absolute;
        top: 85%;
        right: 2%;
        background-color: white;
        border-radius: 15px;
        padding: 5px;
        width: 50%;
        z-index: 20;
      }
    }

    .header-content {
      width: 100%;
      p {
        font-size: 45px;
      }
    }
  }

  @media only screen and (min-width: 425px) {
    .main-header {
      .menu {
        position: absolute;
        top: 85%;
        right: 2%;
        background-color: white;
        border-radius: 15px;
        padding: 5px;
        width: 40%;
        z-index: 20;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .main-header {
      .menu {
        position: absolute;
        top: 85%;
        right: 2%;
        background-color: white;
        border-radius: 15px;
        padding: 5px;
        width: 30%;
        z-index: 20;
      }
    }

    .header-content {
      width: 100%;
      p {
        font-size: 55px;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .main-header {
      position: relative;
      z-index: 10;
      padding-top: 10px;
      .logo {
        display: flex;
        gap: 10px;
        align-items: center;
        b {
          font-size: 20px;
          color: white;
        }
      }

      .nav-link {
        width: 30%;
        display: flex;
        justify-content: space-around;
        a {
          color: white;
          &:hover {
            color: #58a7ff;
          }
        }
      }

      .auth {
        display: flex;
        gap: 10px;
        button {
          width: 120px;
          height: 32px;
        }
      }

      .drop-down {
        display: none;
      }
    }

    .header-content {
      width: 40%;
      margin: 0 auto;
      padding-top: 70px;
      position: relative;
      z-index: 6;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        font-size: 24px;
        color: white;
        text-align: center;
        margin: 0;
      }

      .line {
        width: 50px;
        height: 3px;
        background-color: #58a7ff;
        margin-bottom: 20px;
        margin-top: 10px;
      }

      p {
        font-size: 68px;
        color: white;
        text-align: center;
        margin: 0;
        font-weight: 600;
        margin-bottom: 100px;
      }

      .button {
        width: 140px;
        height: 40px;
        border-radius: 15px;
        font-size: 14px;
        font-weight: 600;
        background-color: #58a7ff;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .main-header {
      position: relative;
      z-index: 10;
      padding-top: 10px;
      .logo {
        display: flex;
        gap: 10px;
        align-items: center;
        b {
          font-size: 20px;
          color: white;
        }
      }

      .nav-link {
        width: 30%;
        display: flex;
        justify-content: space-around;
        a {
          color: white;
          &:hover {
            color: #58a7ff;
          }
        }
      }

      .auth {
        display: flex;
        gap: 10px;
        button {
          width: 120px;
          height: 32px;
        }
      }

      .drop-down {
        display: none;
      }
    }

    .header-content {
      width: 40%;
      margin: 0 auto;
      padding-top: 70px;
      position: relative;
      z-index: 6;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        font-size: 24px;
        color: white;
        text-align: center;
        margin: 0;
      }

      .line {
        width: 50px;
        height: 3px;
        background-color: #58a7ff;
        margin-bottom: 20px;
        margin-top: 10px;
      }

      p {
        font-size: 68px;
        color: white;
        text-align: center;
        margin: 0;
        font-weight: 600;
        margin-bottom: 100px;
      }

      .button {
        width: 140px;
        height: 40px;
        border-radius: 15px;
        font-size: 14px;
        font-weight: 600;
        background-color: #58a7ff;
      }
    }
  }
`;
