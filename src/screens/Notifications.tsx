import { Input } from "@heroui/react";
import Profile from "../components/demo/Avatar";
import { MdNotifications, MdTv } from "react-icons/md";
import Notification from "../components/demo/Notification";
import { suggestions } from "../data";
import { CgUserAdd } from "react-icons/cg";
import { BiCheck, BiCheckCircle } from "react-icons/bi";

export default function Notifications() {
  return (
    <div className="h-[82vh] overflow-y-auto w-full md:max-w-lg mx-auto bg-black text-white">
      {/* feelings input */}
      <div className="mt-8 mb-4 flex items-center gap-2">
        <Profile />
        <div>
          <Input
            key="inside"
            description={
              <span className="text-xs text-neutral-500">
                14th Feb - 1st Mar{" "}
              </span>
            }
            label={
              <span>
                <span className="text-blue-400 underline font-bold">
                  Up Next:
                </span>{" "}
                University Examinations begins!
              </span>
            }
            labelPlacement="inside"
            type="text"
          />
        </div>
      </div>

      {/* Notification title */}
      <div className="flex items-center gap-2 mt-8 ">
        <MdNotifications className="text-blue-400" />
        <span className="flex items-center gap-2 text-neutral-400 text-xs">
          You have <span className="text-blue-400">3</span> new notifications
        </span>
      </div>

      <div>
        <div className="bg-neutral-700 hover:bg-neutral-600 rounded-lg w-full p-2 flex flex-col mt-2 mb-3">
            <div className="flex justify-between items-center">
                <span className="text-blue-400 text-xs flex items-center gap-2"> <CgUserAdd /> Today</span>
                <span className="text-neutral-400 text-xs">10:30 AM</span>
            </div>
            <span className="text-neutral-400 text-xs">
              Jabari Kwesa wants to Connect.
            </span>
        </div>

        <div className="bg-neutral-700 hover:bg-neutral-600 rounded-lg w-full p-2 flex flex-col mt-2 mb-3">
            <div className="flex justify-between items-center">
                <span className="text-blue-400 text-xs flex items-center gap-2"> <BiCheckCircle /> Today</span>
                <span className="text-neutral-400 text-xs">08:33 AM</span>
            </div>
            <span className="text-neutral-400 text-xs">
              Salama Bakari accepted your request.
            </span>
        </div>

        <div className="bg-neutral-700 hover:bg-neutral-600 rounded-lg w-full p-2 flex flex-col mt-2 mb-3">
            <div className="flex justify-between items-center">
                <span className="text-blue-400 text-xs flex items-center gap-2"> <BiCheckCircle />Yesterday</span>
                <span className="text-neutral-400 text-xs">23:12 PM</span>
            </div>
            <span className="text-neutral-400 text-xs">
              Sophia Vedasto accepted your request.
            </span>
        </div>
      </div>

      {/* channels suggestions */}
      <div className="flex items-center gap-2 mt-8 ">
        <MdTv className="text-blue-400" />
        <span className="text-neutral-400 text-sm">Channel Suggestions</span>
      </div>
      <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-4 gap-4">
        {suggestions.map((suggestion, index) => (
          <Notification
            key={index}
            username={suggestion.username}
            title={suggestion.title}
            description={suggestion.description}
            avatarSrc={suggestion.avatarSrc}
            followers={suggestion.followers}
            following={suggestion.following}
          />
        ))}
      </div>
    </div>
  );
}
