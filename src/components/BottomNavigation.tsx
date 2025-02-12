import { Tabs, Tab, Chip } from "@heroui/react";
import { FaBell, FaHome, FaMap } from "react-icons/fa";
import Home from "../screens/Home";
import Map from "../screens/Map";

type BottomNavProps = {
  className?: string;
};

export default function BottomNav({ ...props }: BottomNavProps) {
  return (
    <div className={`flex w-full flex-col ${props.className} px-5`}>
      <Tabs
        aria-label="Bottom Nav"
        classNames={{
          tabList: "gap-8 w-full max-w-sm mx-auto relative rounded-none p-0",
          cursor: "w-full bg-[#42A5F5] absolute top-0",
          tab: "max-w-cover px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#42A5F5]",
        }}
        color="primary"
        variant="underlined"
        placement="bottom"
      >
      
      {/* home section */}
        <Tab
          key="home"
          title={
            <div className="flex items-center space-x-2">
              <FaHome />
              <span>Home</span>
              <Chip size="sm" variant="faded" className="bg-blue-400 text-white text-xs">
                2
              </Chip>
            </div>
          }
        >
          <Home />
        </Tab>
      
      {/* notifications section */}
        <Tab
          key="notifications"
          title={
            <div className="flex items-center space-x-2">
              <FaBell />
              <span>Notification</span>
              <Chip size="sm" variant="faded" className="bg-blue-400 text-white text-xs">
                3
              </Chip>
            </div>
          }
        >
          Notification
        </Tab>

        {/* map section */}
        <Tab
          key="map"
          title={
            <div className="flex items-center space-x-2">
              <FaMap />
              <span>Map</span>
            </div>
          }
        >
          <Map />
        </Tab>
      </Tabs>
    </div>
  );
}
