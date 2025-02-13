import { Button, CircularProgress, Input } from "@heroui/react";
import { useEffect, useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/home";
      setLoading(false);
    }, 2000);
  };


  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img src="/udsm-logo.png" alt="udsm-logo" className="w-20 h-20" />
        <span className="text-2xl font-bold text-white mt-3">
          Login to UDSM Mobile App
        </span>
        <Input
          placeholder="Enter Registration Number"
          className="mt-4 bg-neutral-700 rounded-lg"
        />
        <Input
          placeholder="Enter Password"
          type="password"
          className="mt-4 bg-neutral-700 rounded-lg"
        />
        <Button onPress={handleLogin} className="w-full bg-blue-400 text-white rounded-lg px-4 py-2 mt-4">
          {loading ? <CircularProgress aria-label="Loading..." /> : "Login"}
        </Button>
      </div>
    </div>
  );
}
