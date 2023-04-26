function AddJob() {
  return (
    <div className="left-job">
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
          <button className="btn_add">Thêm</button>
          <button className="btn_remove">Hủy bỏ</button>
        </div>
      </div>
    </div>
  );
}

export default AddJob;
