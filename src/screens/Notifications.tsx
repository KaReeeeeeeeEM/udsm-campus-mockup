import { Input } from "@heroui/react";
import Profile from "../components/demo/Avatar";
import { MdNotifications, MdTv } from "react-icons/md";
import Notification from "../components/demo/Notification";
import { suggestions } from "../data";

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

      {/* channels suggestions */}
      <div className="flex items-center gap-2 mt-8 ">
        <MdTv className="text-blue-400" />
        <span className="text-neutral-400 text-sm">Channel Suggestions</span>
      </div>
      <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-4 gap-4">
        {suggestions.map((notification, index) => (
          <Notification
            key={index}
            username={notification.username}
            title={notification.title}
            description={notification.description}
            avatarSrc={notification.avatarSrc}
            followers={notification.followers}
            following={notification.following}
          />
        ))}
      </div>
    </div>
  );
}
