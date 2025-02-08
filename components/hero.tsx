import React from "react";
import CopyPaste from "./copy-paste";
import stoicss from "stoicss/package.json";
import { Badge } from "./ui/badge";
export default function Hero() {
  return (
    <div className="container w-full p-6 md:p-10 ">
      <div className="text-center h-full flex flex-col justify-center items-center">
        <h1 className="font-bold md:text-5xl text-2xl">stoicss/ui</h1>
        <p className="text-zinc-600 md:text-xl">A minimal UI for React</p>
        <Badge variant="outline" className="rounded-full mt-4">v.{stoicss.version}</Badge>
        <div className="mt-8">
          <CopyPaste value="npm i stoicss" />
        </div>
      </div>
    </div>
  );
}
