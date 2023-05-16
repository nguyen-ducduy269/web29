import Add from "./add";

function AddJob({ setShowAddJob }) {
  return (
    <div className="left">
      <p className="add">Thêm công việc</p>

      <div className="form">
        <label>Tên: </label>
        <br></br>
        <input className="name" type="text"></input>
        <br></br>
        <label>Trạng thái: </label>
        <select>
          <option>Kích hoạt</option>
          <option>Ẩn</option>
        </select>

        <div className="button">
          <button className="btn_add" onClick={() => Add()}>
            Thêm
          </button>
          <button className="btn_remove" onClick={() => setShowAddJob(false)}>
            Hủy bỏ
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddJob;
