import { FaGraduationCap, FaPhoneAlt } from "react-icons/fa";
import { MdEvent, MdNewReleases } from "react-icons/md";

export default function Tabs() {
  return (
    <div className="w-full overflow-x-auto flex items-center gap-4 mt-2 mb-4">
      <a 
        href="#events"
        className="rounded-lg shrink-0 text-white px-4 py-2 bg-neutral-700 flex items-center gap-2 hover:bg-blue-400 transition-all ease-in-out duration-500"
      >
        {" "}
        <MdEvent /> Events
      </a >
      <a 
        href="#news"
        className="rounded-lg shrink-0 text-white px-4 py-2 bg-neutral-700 flex items-center gap-2 hover:bg-blue-400 transition-all ease-in-out duration-500"
      >
        {" "}
        <MdNewReleases /> News
      </a >
      <a 
        href="#alumni"
        className="rounded-lg shrink-0 text-white px-4 py-2 bg-neutral-700 flex items-center gap-2 hover:bg-blue-400 transition-all ease-in-out duration-500"
      >
        {" "}
        <FaGraduationCap /> Alumni
      </a >
      <a 
        href="#emergency"
        className="rounded-lg shrink-0 text-white px-4 py-2 bg-neutral-700 flex items-center gap-2 hover:bg-blue-400 transition-all ease-in-out duration-500"
      >
        {" "}
        <FaPhoneAlt /> Emergency Contacts
      </a >
    </div>
  );
}
