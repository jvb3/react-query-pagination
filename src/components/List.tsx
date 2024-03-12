import { useContext } from "react";
import { GeneralContext } from "@/GeneralContext";

const List = () => {
  const { filteredTitles } = useContext(GeneralContext);

  return (
    <ul className="px-2 py-1 min-h-[200px] max-h-[200px] w-[350px]  overflow-auto bg-white rounded-[3px]">
      {filteredTitles ? (
        filteredTitles.map((title) => (
          <li key={title} className="p-1 hover:cursor-pointer ">
            {title}
          </li>
        ))
      ) : (
        <div>No data</div>
      )}
    </ul>
  );
};

export default List;
