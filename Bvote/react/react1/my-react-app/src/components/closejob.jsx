import React, { useState } from "react";

function CloseJob() {
  const [closeJob, setCloseJob] = useState(true);
  return (
    <div>
      <button className="btn_remove" onClick={() => setCloseJob(!closeJob)}>
        Hủy bỏ
      </button>
    </div>
  );
}

export default CloseJob;
