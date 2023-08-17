import React from "react";

function Wrapper({ children }) {
  return (
    <div className="ellipseDiv flex flex-col justify-center px-[40px] space-y-2 -rotate-45">
      <div className="rotate-45">{children}</div>
    </div>
  );
}

export default Wrapper;
