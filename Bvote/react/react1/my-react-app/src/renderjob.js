import AddJob from "./addjob";

function RenderJob() {
  return <button onClick={() => <AddJob />}>Thêm công việc</button>;
}

export default RenderJob;
