import { FaHornbill } from "react-icons/fa";
import { CarouselDemo } from "../components/demo/Carousel";
import Profile from "../components/demo/Avatar";
import { Input } from "@heroui/react";
import { posts, announcements } from "../data";
import { Posts } from "../components/demo/Post";
import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { Announcement } from "../components/demo/Announcement";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/login";
    }
  },[])

  return (
    <div className="h-[82vh] overflow-y-auto max-w-xs md:max-w-lg mx-auto bg-black text-white">
      {/* feelings input */}
      <div className="mt-8 mb-4 flex items-center gap-2">
        <Profile />
        <div>
          <Input
            key="inside"
            description=""
            label="What's on your mind?"
            labelPlacement="inside"
            type="text"
          />
        </div>
      </div>

      {/* stories */}
      <div>
        <span className="flex items-center gap-2 mt-8">
          <FaHornbill className="text-blue-400" />
          <h1 className=" text-sm text-neutral-400">
            See what is happening in your <span className="text-blue-400">Campus</span>
          </h1>
        </span>
        <CarouselDemo />
      </div>

      {/* announcements */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {posts.map((post, index) => (
          <Announcement key={index} {...post} />
        ))}
      </div>

      {/* posts */}
      <div>
        <span className="flex items-center mt-4 gap-2 font-semibold"><MdVerified className="text-blue-400" /> Announcements</span>

        <div className="w-full flex items-center gap-4 mt-4 overflow-x-auto">
          {announcements.map((announcement, index) => (
            <Posts key={index} {...announcement} />
          ))}
        </div>
      </div>
    </div>
  );
}
