import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/indexActions";
import axios from "axios";

type props = {
  setArray: (value: object) => void;
  name: string;
  setName: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
};

const AddJob = ({ setArray, name, setName, status, setStatus }: props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.Task.data.data);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(actions.Task({ name: name, status: status }));
    const newItem = {
      id: Math.random(),
      name: name,
      status: status,
    };
    axios
      .post("http://localhost:3000/data", newItem)
      .then((response) => console.log(response.data))
      .then((error) => console.log(error));

    setArray(newItem);
    tasks.push(newItem);
    dispatch(actions.closeForm());

    setName("");
    setStatus("Kích hoạt");
  };

  return (
    <>
      <div className="left">
        <p className="add">Thêm công việc</p>
        <form className="form">
          <label htmlFor="name">Tên: </label>
          <br />
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Trạng thái: </label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Kích hoạt">Kích hoạt</option>
            <option value="Ẩn">Ẩn</option>
          </select>

          <div className="button">
            <button
              type="submit"
              className="btn_add"
              onClick={(e) => handleSubmit(e)}
            >
              Thêm
            </button>
            <button
              className="btn_remove"
              onClick={() => {
                dispatch(actions.closeForm());
                setName("");
                setStatus("Kích hoạt");
              }}
            >
              Hủy bỏ
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddJob;
