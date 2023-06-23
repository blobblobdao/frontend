"use client";

import React from "react";
import "./index.css";
import Button from "@/components/Button";
import Image from "next/image";

function Security() {
  return (
    <div
      className="security-container flex items-center justify-center pb-2"
      style={{ marginTop: "116px" }}
    >
      <div
        className="desktop:flex justify-between items-center px-11"
        style={{ maxWidth: "1200px" }}
        id="open-source"
      >
        <div className="desktop:w-8/12 flex flex-col justify-center  mobile:px-1">
          <p className="heading-md mobile:text-center desktop:text-left mobile:text-3xl desktop:text-4xl mobile:pt-2">
            Transparent, <br />
            audited, & open source
          </p>
          <p className="slide-description my-5 mobile:text-center desktop:text-left desktop:w-2/3">
            We champion transparency and employ state-of-the-art DeFi security
            measures, leaving no stone unturned to ensure the utmost safety and
            trust for our community.
          </p>
          <Button className="flex desktop:w-3/12 mobile:w-10/12 mobile:self-center desktop:self-start">
            More about Security
          </Button>
        </div>
        <div className="desktop:w-4/12 mobile:w-12/12 flex justify-center mobile:mt-5">
          <Image
            alt="lending"
            src="/SecurityRight.svg"
            width={400}
            height={280}
          />
        </div>
      </div>
    </div>
  );
}

export default Security;
