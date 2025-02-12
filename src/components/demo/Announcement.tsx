import { FaHouse } from "react-icons/fa6";
import { cn } from "../../lib/utils";
import { CardProps } from "../../types";
import { FaUser } from "react-icons/fa";

export function Announcement({ ...props }: CardProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <FaUser className="h-8 w-8 text-blue-400 rounded-full border-2 object-cover" />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {props.profileName}
            </p>
            <p className="text-sm text-gray-400">{props.timeAgo}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {props.title}
          </h1>
          <h3 className="flex items-center gap-2">
            <FaHouse className="text-blue-400" /> {props.college}
          </h3>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
