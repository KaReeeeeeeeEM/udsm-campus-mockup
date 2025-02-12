import { Input } from "@heroui/react";
import Profile from "../components/demo/Avatar";
import { MdNotifications } from "react-icons/md";

export default function Notifications() {
  return (
    <div className="h-[82vh] overflow-y-auto max-w-xs md:max-w-lg mx-auto bg-black text-white">
        {/* feelings input */}
        <div className="mt-8 mb-4 flex items-center gap-2">
        <Profile />
        <div>
          <Input
            key="inside"
            description={<span className="text-xs text-neutral-500">14th Feb - 1st Mar </span>}
            label={<span><span className="text-blue-400 underline font-bold">Up Next:</span> University Examinations begins!</span>}
            labelPlacement="inside"
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-8 ">
        <MdNotifications className="text-blue-400" />
        <span className="flex items-center gap-2 text-neutral-400 text-xs">
            You have <span className="text-blue-400">3</span> new notifications
        </span>
      </div>
    </div>
  )
}
