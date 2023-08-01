export const AddJob = () => {
  return (
    <>
      <div className="left">
        <p className="add">Thêm công việc</p>
        <form className="form">
          <label htmlFor="name">Tên: </label>
          <br />
          <input id="name" value={""} type="text" />

          <label>Trạng thái: </label>
          <select value={""}>
            <option value="Kích hoạt">Kích hoạt</option>
            <option value="Ẩn">Ẩn</option>
          </select>

          <div className="button">
            <button type="submit" className="btn_add">
              Thêm
            </button>
            <button className="btn_remove">Hủy bỏ</button>
          </div>
        </form>
      </div>
    </>
  );
};
