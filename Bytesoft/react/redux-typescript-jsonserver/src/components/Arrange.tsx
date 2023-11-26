"use client";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/Store";

////// import hooks

type Props = {
  setArrange: (value: any) => void;
};

const Arrange = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleStatus = async (value: string) => {};

  const fromAToZ = async () => {};

  const fromZToA = async () => {};

  return (
    <>
      <Arranged>
        <ul>
          <li>
            <a
              type="button"
              onClick={() => {
                props.setArrange(false);
                fromAToZ();
              }}
            >
              <span>Từ A - Z</span>
            </a>
          </li>

          <li>
            <a
              type="button"
              onClick={() => {
                props.setArrange(false);
                fromZToA();
              }}
            >
              <span>Từ Z - A</span>
            </a>
          </li>

          <li>
            <a
              type="button"
              onClick={() => {
                props.setArrange(false);
                handleStatus("Active");
              }}
            >
              <span>Trạng thái Kích hoạt</span>
            </a>
          </li>

          <li>
            <a
              type="button"
              onClick={() => {
                props.setArrange(false);
                handleStatus("Hide");
              }}
            >
              <span>Trạng thái Ẩn</span>
            </a>
          </li>
        </ul>
      </Arranged>
    </>
  );
};

export default Arrange;

const Arranged = styled.div`
  min-width: 160px;
  min-height: 200px;
  background-color: white;
  border: 1px solid black;
  position: absolute;
  left: 30%;
  display: flex;
  align-items: center;
  ul {
    width: 100%;
    height: 100%;
    padding: 5px;
    list-style: none;
    li {
      height: 30px;
      line-height: 30px;
      margin-bottom: 10px;
    }
  }
`;
