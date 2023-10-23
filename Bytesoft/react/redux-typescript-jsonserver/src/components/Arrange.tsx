"use client";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import axios from "axios";

// import components
import { Task } from "../store/actions/indexActions";

// type Props = {
//   setArrange: (value: any) => void;
// };

interface Props {
  setArrange: (value: boolean) => void;
}

const Arrange = (prop: Props) => {
  const dispatch = useDispatch();

  const dispactchValue = (value: any) => {
    dispatch(Task(value));
  };

  const handleStatus = async (value: string) => {
    const data = await axios.get("http://localhost:3000/data");
    const initValue = data.data;

    let filterValue = [...initValue];
    // let filterValue = [...initValue];
    filterValue = filterValue.filter((filter: any) => {
      return filter.status.includes(value);
    });
    dispactchValue(filterValue);
  };

  const fromAToZ = async () => {
    const data = await axios.get("http://localhost:3000/data");
    const initValue = data.data;

    let filterValue = [...initValue];
    // let filterValue = [...initValue];
    filterValue = filterValue.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    dispactchValue(filterValue);
  };

  const fromZToA = async () => {
    const data = await axios.get("http://localhost:3000/data");
    const initValue = data.data;

    let filterValue = [...initValue];
    // let filterValue = [...initValue];
    filterValue = filterValue
      .sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
      .reverse();
    dispactchValue(filterValue);
  };

  return (
    <>
      <Arranged>
        <ul>
          <li>
            <a
              type="button"
              onClick={() => {
                prop.setArrange(false);
                // setArrange(false);
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
                prop.setArrange(false);
                // setArrange(false);
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
                prop.setArrange(false);
                // setArrange(false);
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
                prop.setArrange(false);
                // setArrange(false);
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
