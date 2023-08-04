import { useDispatch } from "react-redux";
import * as actions from "../store/actions/indexActions";

type props = {
  name: string;
  setName: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  handleBtn: (value: any) => void;
};

const AddJob = ({ name, setName, status, setStatus, handleBtn }: props) => {
  const dispatch = useDispatch();

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
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Kích hoạt">Kích hoạt</option>
            <option value="Ẩn">Ẩn</option>
          </select>

          <div className="button">
            <button
              type="submit"
              className="btn_add"
              onClick={(e) => handleBtn(e)}
              data-id="add"
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
