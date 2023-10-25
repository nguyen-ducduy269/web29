"use client";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import axios from "axios";
import { todoSlice } from "../features/todo/todoSlice";

type Props = {
  setArrange: (value: any) => void;
};

const Arrange = (props: Props) => {
  const dispatch = useDispatch();

  const handleStatus = async (value: string) => {
    const data = await axios.get("http://localhost:3000/data");
    const initValue = data.data;

    let filterValue = [...initValue];
    filterValue = filterValue.filter((filter: any) => {
      return filter.status.includes(value);
    });
    dispatch(todoSlice.actions.filterStatus(filterValue));
  };

  const fromAToZ = async () => {
    const data = await axios.get("http://localhost:3000/data");
    const initValue = data.data;

    let filterValue = [...initValue];
    filterValue = filterValue.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    dispatch(todoSlice.actions.filterStatus(filterValue));
  };

  const fromZToA = async () => {
    const data = await axios.get("http://localhost:3000/data");
    const initValue = data.data;

    let filterValue = [...initValue];
    filterValue = filterValue
      .sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
      .reverse();
    dispatch(todoSlice.actions.filterStatus(filterValue));
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
