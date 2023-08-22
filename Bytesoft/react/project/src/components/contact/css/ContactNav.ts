import styled from "styled-components";

export const ContactNav = styled.div`
  width: 100%;
  height: 66px;
  box-shadow: 5px 0px 35px rgba(29, 64, 125, 0.2);
  .nav-content {
    display: flex;
    .logo {
      width: 30%;
      height: 66px;
      img {
        height: 46px;
        width: 187px;
        margin-left: 116px;
        margin-top: 13px;
      }
    }
    .nav {
      width: 70%;
      .menu {
        .menu-list {
          margin-left: 71px;
          width: 643px;
          margin-top: 20px;
          display: flex;
          .menu-list__item {
            font-family: sans-serif;
            position: relative;
            width: 90px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            margin-right: 0;
            &:hover {
              background-color: unset;
            }
            a {
              text-decoration: none;
              color: #1b4a9b;
              font-size: 11px;
              font-weight: 600;
              width: 81px;
              height: 27px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            &:hover {
              a {
                background-color: #1bcd8d;
                color: #f0fcf7;
                &::before {
                  content: "";
                  position: absolute;
                  bottom: -80px;
                  left: 0px;
                  width: 0.5px;
                  height: 40px;
                  background-color: #1bcd8d;
                  animation: leftmove 1.5s infinite;
                }
                @keyframes leftmove {
                  from {
                    bottom: -80px;
                  }
                  to {
                    bottom: 35px;
                  }
                }
                &::after {
                  content: "";
                  position: absolute;
                  top: -80px;
                  right: 1px;
                  width: 0.5px;
                  height: 40px;
                  background-color: #1bcd8d;
                  animation: rightmove 1.5s infinite;
                  animation-delay: 0.35s;
                }
                @keyframes rightmove {
                  from {
                    top: -80px;
                  }
                  to {
                    top: 35px;
                  }
                }
              }
              &::before {
                content: "";
                position: absolute;
                top: 0px;
                left: -40px;
                width: 40px;
                height: 1px;
                background-color: #1bcd8d;
                animation: topmove 1.5s infinite;
              }
              @keyframes topmove {
                from {
                  left: -40px;
                }
                to {
                  left: 90px;
                }
              }
              &::after {
                content: "";
                position: absolute;
                bottom: 0px;
                right: -40px;
                width: 40px;
                height: 1px;
                background-color: #1bcd8d;
                animation: bottom-move 1.5s infinite;
                animation-delay: 1s;
              }
              @keyframes bottom-move {
                from {
                  right: -40px;
                }
                to {
                  right: 90px;
                }
              }
            }
            .active {
              display: block;
              width: 81px;
              height: 26px;
              text-align: center;
              line-height: 26px;
              background-color: #1bcd8d;
              color: #f0fcf7;
              &::before {
                content: "";
                position: absolute;
                top: 0px;
                left: -40px;
                width: 40px;
                height: 1px;
                background-color: #1bcd8d;
                animation: topmove 1.5s infinite;
              }
              @keyframes topmove {
                from {
                  left: -40px;
                }
                to {
                  left: 90px;
                }
              }
              &::after {
                content: "";
                position: absolute;
                bottom: 0px;
                right: -40px;
                width: 40px;
                height: 1px;
                background-color: #1bcd8d;
                animation: bottom-move 1.5s infinite;
                animation-delay: 1s;
              }
              @keyframes bottom-move {
                from {
                  right: -40px;
                }
                to {
                  right: 90px;
                }
              }
            }
          }
          .list-active {
            &::before {
              content: "";
              position: absolute;
              bottom: -80px;
              left: 0px;
              width: 0.5px;
              height: 40px;
              background-color: #1bcd8d;
              animation: leftmove 1.5s infinite;
            }
            @keyframes leftmove {
              from {
                bottom: -80px;
              }
              to {
                bottom: 35px;
              }
            }
            &::after {
              content: "";
              position: absolute;
              top: -80px;
              right: 0px;
              width: 0.5px;
              height: 40px;
              background-color: #1bcd8d;
              animation: rightmove 1.5s infinite;
              animation-delay: 0.35s;
            }
            @keyframes rightmove {
              from {
                top: -80px;
              }
              to {
                top: 35px;
              }
            }
          }
        }
      }
    }
    #show-menu {
      .show__menu {
        display: none;
      }
      .menu-respon {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .nav-content {
      .nav {
        .menu {
          .menu-list {
            width: 578px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .nav-content {
      .logo {
        img {
          height: 46px;
          width: 179px;
          margin-left: 30px;
          margin-top: 11px;
        }
      }
      .nav {
        .menu {
          .menu-list {
            width: 100%;
            margin-left: 0;
            .menu-list__item {
              .active {
                width: 75px;
              }
              a {
                width: 75px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .nav-content {
      .logo {
        img {
          height: 26px;
          height: 45px;
          width: 155px;
          margin-left: 22px;
          margin-top: 10px;
        }
      }
      .nav {
        .menu {
          .menu-list {
            display: none;
          }
        }
      }
      #show-menu {
        .show__menu {
          display: block;
          position: absolute;
          right: 8%;
          top: 50px;
          font-size: 24px;
        }
        .menu-respon {
          display: block;
          width: 30%;
          height: 100%;
          background: white;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10;
          transition: 1s;
          .close__menu {
            position: relative;
            font-size: 25px;
            right: -85%;
            top: 2px;
          }
          .menu-list {
            list-style: none;
            padding-left: 20px;
            .menu-list__item {
              padding-bottom: 20px;
              a {
                text-decoration: none;
                color: black;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .nav-content {
      .logo {
        img {
          height: 26px;
          height: 45px;
          width: 155px;
          margin-left: 22px;
          margin-top: 10px;
        }
      }
      .nav {
        .menu {
          .menu-list {
            display: none;
          }
        }
      }
      #show-menu {
        .show__menu {
          display: block;
          position: absolute;
          right: 8%;
          top: 50px;
          font-size: 24px;
        }
        .menu-respon {
          display: block;
          width: 40%;
          height: 100%;
          background: white;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10;
          transition: 1s;
          .close__menu {
            position: relative;
            font-size: 25px;
            right: -85%;
            top: 2px;
          }
          .menu-list {
            list-style: none;
            padding-left: 20px;
            .menu-list__item {
              padding-bottom: 20px;
              a {
                text-decoration: none;
                color: black;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .nav-content {
      .logo {
        img {
          height: 26px;
          height: 45px;
          width: 155px;
          margin-left: 22px;
          margin-top: 10px;
        }
      }
      .nav {
        .menu {
          .menu-list {
            display: none;
          }
        }
      }
      #show-menu {
        .show__menu {
          display: block;
          position: absolute;
          right: 8%;
          top: 50px;
          font-size: 24px;
        }
        .menu-respon {
          display: block;
          width: 50%;
          height: 100%;
          background: white;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10;
          transition: 1s;
          .close__menu {
            position: relative;
            font-size: 25px;
            right: -85%;
            top: 2px;
          }
          .menu-list {
            list-style: none;
            padding-left: 20px;
            .menu-list__item {
              padding-bottom: 20px;
              a {
                text-decoration: none;
                color: black;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 425px) {
    .nav-content {
      .logo {
        img {
          height: 26px;
          height: 45px;
          width: 155px;
          margin-left: 22px;
          margin-top: 10px;
        }
      }
      .nav {
        .menu {
          .menu-list {
            display: none;
          }
        }
      }
      #show-menu {
        .show__menu {
          display: block;
          position: absolute;
          right: 8%;
          top: 50px;
          font-size: 24px;
        }
        .menu-respon {
          display: block;
          width: 50%;
          height: 100%;
          background: white;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10;
          transition: 1s;
          .close__menu {
            position: relative;
            font-size: 25px;
            right: -85%;
            top: 2px;
          }
          .menu-list {
            list-style: none;
            .menu-list__item {
              padding-bottom: 20px;
              a {
                text-decoration: none;
                color: black;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .nav-content {
      .logo {
        img {
          height: 26px;
          height: 45px;
          width: 155px;
          margin-left: 22px;
          margin-top: 10px;
        }
      }
      .nav {
        .menu {
          .menu-list {
            display: none;
          }
        }
      }
      #show-menu {
        .show__menu {
          display: block;
          position: absolute;
          right: 8%;
          top: 50px;
          font-size: 24px;
        }
        .menu-respon {
          display: block;
          width: 50%;
          height: 100%;
          background: white;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10;
          transition: 1s;
          .close__menu {
            position: relative;
            font-size: 25px;
            right: -85%;
            top: 2px;
          }
          .menu-list {
            list-style: none;
            .menu-list__item {
              padding-bottom: 20px;
              a {
                text-decoration: none;
                color: black;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
`;
