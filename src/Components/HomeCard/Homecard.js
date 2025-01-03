import React from "react";

function Homecard({ title, image, link }) {
  return (
    <div className="bg-white h-[420px] z-30 mt-3">
      <div className="text-lg xl:text-xl font-semibold ml-4 mt-4 text-black m-3">
        {title}
      </div>
      <div className="h-[300px] m-4">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="text-xs xl:text-sm text-blue-400 ml-4">{link}</div>
    </div>
  );
}

export default Homecard;
