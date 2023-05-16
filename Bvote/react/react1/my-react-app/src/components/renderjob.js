import React, { useState } from "react";
import AddJob from "./addjob";

function RenderJob() {
  const [showAddJob, setShowAddJob] = useState(false);
  console.log("show", showAddJob);
  return (
    <div>
      <button className="add-job" onClick={() => setShowAddJob(true)}>
        Thêm công việc
      </button>
      {showAddJob && <AddJob setShowAddJob={setShowAddJob} />}{" "}
    </div>
  );
}

export default RenderJob;
