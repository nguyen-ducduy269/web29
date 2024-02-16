"use client";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/Store";
import { filterJobAsync, sortJobAsync } from "../features/todo/todoSlice";

////// import hooks

type Props = {
  setArrange: (value: any) => void;
};

const Arrange = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const filterValue = useSelector((state: any) => state.todos.data);

  const handleStatus = async (value: string) => {
    dispatch(filterJobAsync({ ...filterValue, status: value }));
  };

  const fromAToZ = async () => {
    const res = await fetch(`http://localhost:3000/data?_sort=name`).then(
      (res) => res.json()
    );
    dispatch(sortJobAsync(res));
  };

  const fromZToA = async () => {
    const res = (
      await fetch(`http://localhost:3000/data?_sort=name`).then((res) =>
        res.json()
      )
    ).reverse();
    dispatch(sortJobAsync(res));
  };

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
