import styled from "styled-components";
import { useDispatch } from "react-redux";

type Props = {
  setArrange: (value: any) => void;
  initValue: any;
};
const Arrange = ({ setArrange, initValue }: Props) => {
  const dispatch = useDispatch();

  const handleStatus = (value: string) => {
    let filterValue = [...initValue];
    // console.log("filterValue", typeof filterValue);

    filterValue = filterValue.filter((filter: any) => {
      console.log("status", filter.status);
      console.log("filter value", value);

      return filter.status.includes(value);
    });
    console.log("filterValue", filterValue);
    dispatch({ type: "TASK", payload: filterValue });
  };

  const fromAToZ = () => {
    let filterValue = [...initValue];
    console.log(filterValue);

    filterValue = filterValue.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    console.log(filterValue);
    dispatch({ type: "TASK", payload: filterValue });
  };

  const fromZToA = () => {
    let filterValue = [...initValue];
    console.log(filterValue);

    filterValue = filterValue
      .sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
      .reverse();
    console.log(filterValue);
    dispatch({ type: "TASK", payload: filterValue });
  };

  return (
    <>
      <Arranged>
        <ul>
          <li
            onClick={() => {
              setArrange(false);
              fromAToZ();
            }}
          >
            <a type="button">
              <span>Từ A - Z</span>
            </a>
          </li>
          <li
            onClick={() => {
              setArrange(false);
              fromZToA();
            }}
          >
            <a type="button">
              <span>Từ Z - A</span>
            </a>
          </li>
          <li
            value={"Kích hoạt"}
            onClick={() => {
              setArrange(false);
              handleStatus("Kích hoạt");
            }}
          >
            <a type="button">
              <span>Trạng thái Kích hoạt</span>
            </a>
          </li>
          <li
            value={"Ẩn"}
            onClick={() => {
              setArrange(false);
              handleStatus("Ẩn");
            }}
          >
            <a type="button">
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
  left: 48%;
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
