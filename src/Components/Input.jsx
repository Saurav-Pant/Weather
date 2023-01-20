import React from "react";

function Input({handleInput}) {
  return <div className="text-center pt-6">
    <h1 className="text-5xl font-bold text-zinc-500 pb-6 ">Weather In</h1>
    <input type="text" className="w-5/12 h-11 border-none outline-none rounded-full " onChange={handleInput} />
  </div>
}

export default Input;
