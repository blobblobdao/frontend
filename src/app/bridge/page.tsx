import React from "react";
import Image from "next/image";
import "./index.css";
import Button from "@/components/Button";
import Dashboard from "@/Layout/Dashboard";

export default function Bridge() {
  return (
    <Dashboard>
      <div>
        <Image
          src={"/Wonky_jelly.svg"}
          width={834}
          height={610}
          alt={"bg"}
          style={{
            position: "absolute",
            left: -190,
            zIndex: -10,
          }}
        />
        <div className="flex w-full h-screen justify-center items-center">
          <div>
            <Image
              src={"/road.svg"}
              width={48}
              height={48}
              alt={"bridge"}
              className="mb-3 ml-16"
            />
            <p className="bridgeText mb-4">Bridge</p>
            <p className="comingSoonTxt mb-4">Coming soon!</p>
            <Button>Learn more about Bridge</Button>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
