"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "./index.css";
import Button from "./Button";
import { useRouter } from "next/navigation";
function Header(props: any) {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center py-1 desktop:px-24 header-container">
      <Image src="/logo.svg" alt="Blob Logo" width={150} height={32} />
      <div className="mobile:hidden desktop:flex desktop:w-3/12 flex justify-between">
        <span
          className="header-link"
          onClick={() => {
            document.getElementById("calculator")?.scrollIntoView();
          }}
        >
          Calculator
        </span>
        <span
          className="header-link"
          onClick={() => {
            document.getElementById("features")?.scrollIntoView();
          }}
        >
          Features
        </span>
        <span className="header-link">Growth</span>
        <span className="header-link">Open Source</span>
      </div>

      <div className="mobile:mr-4 desktop:mr-0 ">
        <Button onClick={() => router.push("/home")}>Launch App</Button>
      </div>
    </div>
  );
}

export default Header;
