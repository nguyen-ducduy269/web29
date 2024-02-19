"use client";
import { Arranged } from "../App.ts";
import useJob from "../hooks/Job.ts";

////// import hooks

type Props = {
  setArrange: (value: boolean) => void;
  setSearchStatus: (value: string) => void;
  setReload: (value: number) => void;
  reload: number;
};

const Arrange = (props: Props) => {
  const { fromAToZ, fromZToA } = useJob();

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
                props.setSearchStatus("Active");
                props.setReload(props.reload + 1);
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
                props.setSearchStatus("Hide");
                props.setReload(props.reload + 1);
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
