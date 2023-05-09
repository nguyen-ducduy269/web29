import React, { useState } from "react";
import AddJob from "./addjob";

function RenderJob() {
  // showAddJob là trạng thái hiện tại, setShowAddJob là hàm được sử dụng để cập nhật trạng thái
  const [showAddJob, setShowAddJob] = useState(false);
  console.log("show", showAddJob);
  return (
    <div>
      <button className="add-job" onClick={() => setShowAddJob(true)}>
        Thêm công việc
      </button>
      {showAddJob && <AddJob />}{" "}
    </div>
  );
}

export default RenderJob;
