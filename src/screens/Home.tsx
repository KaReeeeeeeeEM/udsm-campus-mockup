import { FaHornbill, FaPoll } from "react-icons/fa";
import { CarouselDemo } from "../components/demo/Carousel";
import Profile from "../components/demo/Avatar";
import { Input } from "@heroui/react";
import { posts, announcements } from "../data";
import { Posts } from "../components/demo/Post";
import { useEffect, useState } from "react";
import { MdLink, MdVerified } from "react-icons/md";
import { Announcement } from "../components/demo/Announcement";
import PopQuestion from "../components/demo/Radio";
import Tabs from "../components/demo/Tabs";

export default function Home() {
  const [isLoggedIn] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/login";
    }
  },[])

  return (
    <div className="h-[82vh] overflow-y-auto max-w-xs md:max-w-lg mx-auto bg-black text-white">
      <div>
        <span className="flex items-center gap-2 font-semibold mt-4"> <MdLink className="text-blue-400" />  Quick Links</span>
        <Tabs />
      </div>

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


      {/* posts */}
      <div className="my-4">
        <span className="flex items-center mt-4 gap-2 font-semibold"><MdVerified className="text-blue-400" /> Announcements</span>

        <div id="events" className="w-full flex items-center gap-4 mt-4 overflow-x-auto">
          {announcements.map((announcement, index) => (
            <Posts key={index} {...announcement} />
          ))}
        </div>
      </div>

       {/* Voting Poll */}
    <div className="my-4">
      <span className="flex items-center text-neutral-400 gap-2 mb-2 mt-6">
        <FaPoll className="text-blue-400" />
        Voting Poll
      </span>

      <div className="bg-neutral-800 p-4 rounded-md">
        <PopQuestion />
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
      <div id="news" className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {posts.map((post, index) => (
          <Announcement key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
