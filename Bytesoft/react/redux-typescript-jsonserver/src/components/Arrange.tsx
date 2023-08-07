import styled from "styled-components";

type Props = {
  setArrange: (value: any) => void;
};
const Arrange = ({ setArrange }: Props) => {
  return (
    <>
      <Arranged>
        <ul>
          <li
            onClick={() => {
              setArrange(false);
            }}
          >
            <a type="button">
              <span>Từ A - Z</span>
            </a>
          </li>
          <li
            onClick={() => {
              setArrange(false);
            }}
          >
            <a type="button">
              <span>Từ Z - A</span>
            </a>
          </li>
          <li
            onClick={() => {
              setArrange(false);
            }}
          >
            <a type="button">
              <span>Trạng thái Kích hoạt</span>
            </a>
          </li>
          <li
            onClick={() => {
              setArrange(false);
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
