import styled from "styled-components";
import bg from "@/public/images/Bg.png";

export const HeaderMain = styled.div`
  background-color: #58a7ff;
  width: 100%;
  background-size: cover;
  background-position: top;
  position: relative;
  padding-bottom: 10px;
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
      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background-color: #f97400;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
      }
      p {
        line-height: 36px;
        color: white;
        margin: 0;
        font-size: 16px;
        font-weight: 600;
      }
    }

    .drop-down {
      display: none;
    }
  }

  .header-content {
    width: auto;
    height: 200px;
  }

  .shape1,
  .shape2,
  .shape3,
  .shape4 {
    width: 697px;
    height: 392px;
  }

  .shape1 {
    position: absolute;
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
    }
  }
`;
