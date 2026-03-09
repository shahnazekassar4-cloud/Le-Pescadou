import { Home } from "lucide-react";

export function Head() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="w-screen h-10 bg-red-900 flex items-center justify-end pr-3">
        <a href="/">
          <Home
            color="white"
            strokeWidth={1}
            className="hover:cursor-pointer"
          />
        </a>
      </div>
      <img src="../logoPescadou.png" className="w-60 m-5" />
    </div>
  );
}
