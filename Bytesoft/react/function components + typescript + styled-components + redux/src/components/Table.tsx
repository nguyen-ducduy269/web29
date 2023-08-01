export const Table = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td className="stt">STT</td>
            <td className="name">Tên</td>
            <td className="status">Trạng thái</td>
            <td className="activity">Hành động</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="stt"></td>
            <td className="name">
              <input className="add-input" type="text"></input>
            </td>

            <td className="status">
              <select>
                <option>Tất cả</option>
                <option>Kích hoạt</option>
                <option>Ẩn</option>
              </select>
            </td>
            <td className="activity"></td>
          </tr>

          <tr>
            <td className="stt">1</td>
            <td className="name">a</td>
            <td className="status">
              <p className="status-active">Kích hoạt</p>
            </td>
            <td className="activity button">
              <button className="btn_edit">Sửa</button>
              <button className="btn_remove">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
