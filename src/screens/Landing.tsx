import NavBar from "../components/Navbar";
import BottomNav from "../components/BottomNavigation";

export default function Landing() {
  return (
    <div className="bg-black h-screen w-full">
      <NavBar />
      <BottomNav className="fixed bottom-0 w-full left-0 text-white" />
    </div>
  );
}
