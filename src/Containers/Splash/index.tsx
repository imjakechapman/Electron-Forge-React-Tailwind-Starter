import React from "react";

// Development
import { hot } from "react-hot-loader";

const Splash: React.FC<{}> = () => {
  return (
    <div className="bg-shadow-50 min-w-full w-full min-h-screen h-full flex flex-col justify-center items-center">
      <p className="text-shadow-700 text-xl p-0 m-0">Electron Starter</p>
    </div>
  );
};

export default hot(module)(Splash);
