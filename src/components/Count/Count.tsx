import React, { useState } from "react";

type CountProps = {
  count: number;
  onChange: (type: "sub" | "add") => void;
};

export const Count: React.FC<CountProps> = ({ count, onChange }) => {
  return (
    <div className='count-row'>
      <div className='count-item minus' onClick={() => onChange("sub")}></div>
      <div className='count'>{count}</div>
      <div className='count-item plus' onClick={() => onChange("add")}></div>
    </div>
  );
};
