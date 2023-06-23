"use client";

import React from "react";
import "./index.css";
import Image from "next/image";
import Button from "@/components/Button";

function Slide4() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        marginTop: "120px",
      }}
    >
      <div className="flex flex-col items-center">
        <p className="heading-md-2  mobile:text-center desktop:text-left mobile:text-4xl desktop:text-[64px]">
          <span className="primary-text" id="growth">
            Super Charged
          </span>{" "}
          Treasury Growth
        </p>
        <p className="slide-description mobile:text-center desktop:text-left w-10/12 my-5">
          Taxes are being used to accelerate treasury growth and feed Blob
          sustainably.
        </p>
      </div>
      <div className="desktop:flex w-full justify-between gap-2 mt-2">
        <div className="flex flex-col justify-center items-center card-dim-bg py-20 w-full h-full mobile:mb-2">
          <Image alt="lending" src="/5percent.svg" width={300} height={180} />
          <p className="card-caption mt-5">Buy Tax</p>
        </div>
        <div className="flex flex-col justify-center items-center card-dim-bg py-20 w-full h-full mobile:mb-2">
          <Image alt="lending" src="/0percent.svg" width={295} height={170} />
          <p className="card-caption mt-8">Transfer Tax</p>
        </div>
        <div className="flex flex-col justify-center items-center card-dim-bg py-20 w-full h-full">
          <Image alt="lending" src="/5percent.svg" width={300} height={180} />
          <p className="card-caption mt-5">Sell Tax</p>
        </div>
      </div>
      <Button className="my-10 mobile:w-full desktop:w-[266px] mt-6">
        More About Tax Allocation
      </Button>
    </div>
  );
}

export default Slide4;
