type Props = {
  name: string;
  setName: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  handleBtn: (value: any) => void;
  // handleEdit: (value: any) => void;
  setIsDisplay: (value: any) => void;
};

const AddJob = (props: Props) => {
  const {
    name,
    setName,
    status,
    setStatus,
    handleBtn,
    setIsDisplay,
    // handleEdit,
  } = props;

  const closeForm = () => {
    setIsDisplay(false);
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
              onClick={(e) => {
                handleBtn(e);
                // handleEdit(e);
              }}
              data-id="add"
            >
              Thêm
            </button>
            <button className="btn_remove" onClick={() => closeForm()}>
              Hủy bỏ
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddJob;
