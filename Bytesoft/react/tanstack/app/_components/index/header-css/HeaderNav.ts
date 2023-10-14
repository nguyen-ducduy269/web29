import styled from "styled-components";

export const HeaderNav = styled.div`
  box-shadow: none;
  .nav-content {
    display: flex;
    .logo {
      width: 30%;
      img {
        height: 46px;
        width: 188px;
        margin-left: 122px;
        margin-top: 13px;
      }
    }
    .nav {
      width: 70%;
      .show__menu {
        display: none;
      }
      .menu {
        margin-left: 53px;
        .menu-list {
          display: flex;
          margin-left: 22px;
          margin-top: 18px;
          width: 642px;
          gap: 2px;
          font-family: sans-serif;
          font-weight: 100;
          .menu-list__item {
            position: relative;
            width: 90px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            &:hover {
              a {
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
                    bottom: 40px;
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
                  animation-delay: 0.5s;
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
                right: -60px;
                width: 60px;
                height: 1px;
                background-color: #1bcd8d;
                animation: bottom-move 1.5s infinite;
                animation-delay: 1s;
              }
              @keyframes bottom-move {
                from {
                  right: -60px;
                }
                to {
                  right: 90px;
                }
              }
            }
            a {
              width: 81px;
              text-decoration: none;
              color: #fff;
              font-size: 11px;
              font-weight: 600;
              display: block;
              white-space: nowrap;
              height: 27px;
              line-height: 27px;
              text-align: center;
              &:hover {
                background-color: #1bcd8d;
                height: 27px;
                width: 81px;
              }
              .active {
                display: block;
                width: 81px;
                background-color: #1bcd8d;
                height: 27px;
                text-align: center;
                line-height: 27px;
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
                  right: -60px;
                  width: 60px;
                  height: 1px;
                  background-color: #1bcd8d;
                  animation: bottom-move 1.8s infinite;
                  // animation-delay: 2s;
                }
                @keyframes bottom-move {
                  from {
                    right: -60px;
                  }
                  to {
                    right: 90px;
                  }
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
              animation: leftmove 1.75s infinite;
              // animation-delay: 1s;
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
      .menu-respon {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 1350px) {
    .nav-content {
      .logo {
        img {
          margin-left: 40px;
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    background-color: white;
    box-shadow: 3px 5px 3px rgb(131, 151, 185, 0.18),
      0px 6px 2px rgb(131, 151, 185, 0.18);
    height: 70px;
    .nav-content {
      .logo {
        img {
          margin-left: 40px;
        }
      }
      .nav {
        .menu {
          margin-left: 0;
          .menu-list {
            margin-left: 0;
            .menu-list__item {
              position: relative;
              width: 90px;
              height: 35px;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              &:hover {
                a {
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
                      bottom: 40px;
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
                    animation-delay: 0.5s;
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
                  right: -60px;
                  width: 60px;
                  height: 1px;
                  background-color: #1bcd8d;
                  animation: bottom-move 1.5s infinite;
                  animation-delay: 1s;
                }
                @keyframes bottom-move {
                  from {
                    right: -60px;
                  }
                  to {
                    right: 90px;
                  }
                }
              }
              a {
                width: 81px;
                text-decoration: none;
                color: black;
                font-size: 11px;
                font-weight: 600;
                display: block;
                white-space: nowrap;
                height: 27px;
                line-height: 27px;
                text-align: center;
                &:hover {
                  background-color: #1bcd8d;
                  height: 27px;
                  width: 81px;
                }
                .active {
                  display: block;
                  width: 81px;
                  background-color: #1bcd8d;
                  height: 27px;
                  text-align: center;
                  color: white;
                  line-height: 27px;
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
                    right: -60px;
                    width: 60px;
                    height: 1px;
                    background-color: #1bcd8d;
                    animation: bottom-move 1.8s infinite;
                    // animation-delay: 2s;
                  }
                  @keyframes bottom-move {
                    from {
                      right: -60px;
                    }
                    to {
                      right: 90px;
                    }
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
                animation: leftmove 1.75s infinite;
                // animation-delay: 1s;
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
    }
  }

  @media only screen and (max-width: 991px) {
    background-color: white;
    box-shadow: 3px 5px 3px rgb(131, 151, 185, 0.18),
      0px 6px 2px rgb(131, 151, 185, 0.18);
    height: 70px;
    .nav-content {
      .logo {
        img {
          margin-left: 40px;
          height: 35px;
          width: 130px;
          margin-top: 15px;
        }
      }
      .nav {
        .menu {
          margin-left: 40px;
          .menu-list {
            margin-left: -55px;
            padding-left: 0;
            gap: 5px;
            width: 520px;
            .menu-list__item {
              position: relative;
              width: 90px;
              height: 35px;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              &:hover {
                a {
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
                      bottom: 40px;
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
                    animation-delay: 0.5s;
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
                  right: -60px;
                  width: 60px;
                  height: 1px;
                  background-color: #1bcd8d;
                  animation: bottom-move 1.5s infinite;
                  animation-delay: 1s;
                }
                @keyframes bottom-move {
                  from {
                    right: -60px;
                  }
                  to {
                    right: 90px;
                  }
                }
              }
              a {
                width: 81px;
                text-decoration: none;
                color: black;
                font-size: 11px;
                font-weight: 600;
                display: block;
                white-space: nowrap;
                height: 27px;
                line-height: 27px;
                text-align: center;
                &:hover {
                  background-color: #1bcd8d;
                  height: 27px;
                  width: 81px;
                }
                .active {
                  display: block;
                  width: 81px;
                  background-color: #1bcd8d;
                  height: 27px;
                  text-align: center;
                  color: white;
                  line-height: 27px;
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
                    right: -60px;
                    width: 60px;
                    height: 1px;
                    background-color: #1bcd8d;
                    animation: bottom-move 1.8s infinite;
                    // animation-delay: 2s;
                  }
                  @keyframes bottom-move {
                    from {
                      right: -60px;
                    }
                    to {
                      right: 90px;
                    }
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
                animation: leftmove 1.75s infinite;
                // animation-delay: 1s;
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
    }
  }

  @media only screen and (max-width: 767px) {
    background-color: #fff;
    height: 100px;
    box-shadow: 3px 5px 3px rgb(131, 151, 185, 0.18),
      0px 6px 2px rgb(131, 151, 185, 0.18);
    .nav-content {
      .logo {
        width: 50%;
        img {
          height: 45px;
          width: 140px;
          margin-left: 11%;
          margin-top: 20px;
        }
      }
      .nav {
        width: 50%;
        height: 100px;
        display: flex;
        align-content: center;
        justify-content: flex-end;
        .menu {
          display: none;
        }
        .show__menu {
          display: block;
          font-size: 25px;
          margin-right: 17%;
        }
        .show__menu {
          display: flex;
          align-items: center;
        }
        .menu-respon {
          display: block;
        }
        .menu-respon {
          position: fixed;
          width: 50%;
          height: 100%;
          background-color: white;
          top: 0;
          left: 0;
          animation: 5s;
          z-index: 20;
          .close__menu {
            position: absolute;
            right: 19px;
            top: 4px;
            font-size: 25px;
          }
          .menu-list {
            width: 100%;
            margin-top: 50px;
            list-style: none;
            padding-left: 20px;
            .menu-list__item {
              margin-bottom: 20px;
              a {
                font-size: 16px;
                text-decoration: none;
                color: black;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    background-color: #fff;
    height: 100px;
    box-shadow: 3px 5px 3px rgb(131, 151, 185, 0.18),
      0px 6px 2px rgb(131, 151, 185, 0.18);
    .nav-content {
      .logo {
        width: 50%;
        img {
          height: 45px;
          width: 140px;
          margin-left: 11%;
          margin-top: 20px;
        }
      }
      .nav {
        width: 50%;
        height: 100px;
        display: flex;
        align-content: center;
        justify-content: flex-end;
        .menu {
          display: none;
        }
        .show__menu {
          display: block;
          font-size: 25px;
          margin-right: 17%;
        }
        .show__menu {
          display: flex;
          align-items: center;
        }
        .menu-respon {
          display: block;
        }
        .menu-respon {
          position: fixed;
          width: 50%;
          height: 100%;
          background-color: white;
          top: 0;
          left: 0;
          animation: 5s;
          z-index: 20;
          .close__menu {
            position: absolute;
            right: 19px;
            top: 4px;
            font-size: 25px;
          }
          .menu-list {
            width: 100%;
            margin-top: 50px;
            list-style: none;
            padding-left: 20px;
            .menu-list__item {
              margin-bottom: 20px;
              a {
                font-size: 16px;
                text-decoration: none;
                color: black;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    background-color: #fff;
    height: 100px;
    box-shadow: 3px 5px 3px rgb(131, 151, 185, 0.18),
      0px 6px 2px rgb(131, 151, 185, 0.18);
    .nav-content {
      .logo {
        width: 50%;
        img {
          height: 40px;
          width: 140px;
          margin-left: 11%;
          margin-top: 25px;
        }
      }
      .nav {
        width: 50%;
        height: 100px;
        display: flex;
        align-content: center;
        justify-content: flex-end;
        .menu {
          display: none;
        }
        .show__menu {
          display: block;
          font-size: 25px;
          margin-right: 17%;
        }
        .show__menu {
          display: flex;
          align-items: center;
        }
        .menu-respon {
          display: block;
        }
        .menu-respon {
          position: fixed;
          width: 50%;
          height: 100%;
          background-color: white;
          top: 0;
          left: 0;
          animation: 5s;
          z-index: 20;
          .close__menu {
            position: absolute;
            right: 19px;
            top: 4px;
            font-size: 25px;
          }
          .menu-list {
            width: 100%;
            margin-top: 50px;
            list-style: none;
            padding-left: 20px;
            .menu-list__item {
              margin-bottom: 20px;
              a {
                font-size: 16px;
                text-decoration: none;
                color: black;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 425px) {
    background-color: #fff;
    height: 100px;
    box-shadow: 3px 5px 3px rgb(131, 151, 185, 0.18),
      0px 6px 2px rgb(131, 151, 185, 0.18);
    .nav-content {
      .logo {
        width: 50%;
        img {
          height: 40px;
          width: 140px;
          margin-left: 11%;
          margin-top: 25px;
        }
      }
      .nav {
        width: 50%;
        height: 100px;
        display: flex;
        align-content: center;
        justify-content: flex-end;
        .menu {
          display: none;
        }
        .show__menu {
          display: block;
          font-size: 25px;
          margin-right: 17%;
        }
        .show__menu {
          display: flex;
          align-items: center;
        }
        .menu-respon {
          display: block;
        }
        .menu-respon {
          position: fixed;
          width: 50%;
          height: 100%;
          background-color: white;
          top: 0;
          left: 0;
          animation: 5s;
          z-index: 20;
          .close__menu {
            position: absolute;
            right: 19px;
            top: 4px;
            font-size: 25px;
          }
          .menu-list {
            width: 100%;
            margin-top: 50px;
            list-style: none;
            padding-left: 20px;
            .menu-list__item {
              margin-bottom: 20px;
              a {
                font-size: 16px;
                text-decoration: none;
                color: black;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    background-color: #fff;
    height: 100px;
    box-shadow: 3px 5px 3px rgb(131, 151, 185, 0.18),
      0px 6px 2px rgb(131, 151, 185, 0.18);
    .nav-content {
      .logo {
        width: 50%;
        img {
          height: 40px;
          width: 140px;
          margin-left: 11%;
          margin-top: 25px;
        }
      }
      .nav {
        width: 50%;
        height: 100px;
        display: flex;
        align-content: center;
        justify-content: flex-end;
        .menu {
          display: none;
        }
        .show__menu {
          display: block;
          font-size: 25px;
          margin-right: 17%;
        }
        .show__menu {
          display: flex;
          align-items: center;
        }
        .menu-respon {
          display: block;
        }
        .menu-respon {
          position: fixed;
          width: 50%;
          height: 100%;
          background-color: white;
          top: 0;
          left: 0;
          animation: 5s;
          z-index: 20;
          .close__menu {
            position: absolute;
            right: 19px;
            top: 4px;
            font-size: 25px;
          }
          .menu-list {
            width: 100%;
            margin-top: 50px;
            list-style: none;
            padding-left: 20px;
            .menu-list__item {
              margin-bottom: 20px;
              a {
                font-size: 16px;
                text-decoration: none;
                color: black;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 320px) {
    background-color: #fff;
    height: 100px;
    box-shadow: 3px 5px 3px rgb(131, 151, 185, 0.18),
      0px 6px 2px rgb(131, 151, 185, 0.18);
    .nav-content {
      .logo {
        width: 50%;
        img {
          height: 40px;
          width: 140px;
          margin-left: 11%;
          margin-top: 25px;
        }
      }
      .nav {
        width: 50%;
        height: 100px;
        display: flex;
        align-content: center;
        justify-content: flex-end;
        .menu {
          display: none;
        }
        .show__menu {
          display: block;
          font-size: 25px;
          margin-right: 17%;
        }
        .show__menu {
          display: flex;
          align-items: center;
        }
        .menu-respon {
          display: block;
        }
        .menu-respon {
          position: fixed;
          width: 50%;
          height: 100%;
          background-color: white;
          top: 0;
          left: 0;
          animation: 5s;
          z-index: 20;
          .close__menu {
            position: absolute;
            right: 19px;
            top: 4px;
            font-size: 25px;
          }
          .menu-list {
            width: 100%;
            margin-top: 50px;
            list-style: none;
            padding-left: 20px;
            .menu-list__item {
              margin-bottom: 20px;
              a {
                font-size: 16px;
                text-decoration: none;
                color: black;
              }
            }
          }
        }
      }
    }
  }
`;
