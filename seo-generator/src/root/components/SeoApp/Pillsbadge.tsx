import { useKeywordContext } from "@/context/Context";
import React from "react";

function Pillsbadge() {
  const { initialKeywords } = useKeywordContext();

  return (
<div className="">
  <ul>
    <div className="grid grid-cols-3">
      {initialKeywords.map((keyword) => (
        <li className="col-span-1" key={keyword.id}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <button
              id="badge-dismiss-dark"
              className="text-gray-800 pr-10 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 font-medium rounded-full text-sm px-3 py-1 mr-2 mb-2"
            >
              {keyword.keyword}
            </button>
          </label>
        </li>
      ))}
    </div>
  </ul>
</div>

  );
}

export default Pillsbadge;
