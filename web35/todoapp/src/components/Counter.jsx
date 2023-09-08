import { useState, useEffect } from "react";

export default Counter = ({ disabled }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    {
      console.log("Giá trị count hiện tại là: ", count);
    }
  }, [count]);

  return (
    <div>
      <button disabled={disabled} onClick={() => setCount(count + 1)}>
        You click {count} time(s)
      </button>
    </div>
  );
};
