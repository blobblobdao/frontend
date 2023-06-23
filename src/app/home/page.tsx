"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AreaConfig } from "@ant-design/plots/es/components/area";
import { LineConfig } from "@ant-design/plots/es/components/line";

import dynamic from "next/dynamic";
import "./index.css";
import { Card, Typography } from "@material-tailwind/react";
import Dashboard from "@/Layout/Dashboard";
import Button from "@/components/Button";
import ConnectWallet from "@/components/ConnectWallet";
import Graph from "@/components/Graph";

export default function Home() {
  const Header = () => {
    return (
      <div className="flex flex-row bg-darkBg h-24 rounded p-6 items-center w-[925px] self-center">
        <div className="flex flex-row items-center w-1/4">
          {/* <Image
          src="/chart-pyramid.svg"
          alt="price"
          width={14}
          height={13}
        /> */}
          <p className="stats-heading ml-2 text-dimText w-1/4  justify-between">
            BLOB PRICE
          </p>
          <p className="stats-values ml-2">$0.00056</p>
        </div>
        <div className="flex flex-row items-center w-1/3  px-2 justify-between">
          {/* <Image src="/chart-pyramid.svg" alt="cap" width={14} height={13} /> */}
          <p className="stats-heading ml-2 text-dimText ">BLOB MARKET CAP</p>
          <p className="stats-values ml-2">$1,456,454</p>
        </div>
        <div className="flex flex-row items-center w-1/4  px-2 justify-between">
          {/* <Image src="/total-fed.svg" alt="fvd" width={14} height={13} /> */}
          <p className="stats-heading ml-2 text-dimText">BLOB HOLDERS</p>
          <p className="stats-values ml-2">6500</p>
        </div>
        <div className="flex flex-row items-center w-1/4 px-2 justify-between">
          {/* <Image src="/holders.svg" alt="holders" width={14} height={13} /> */}
          <p className="stats-heading ml-2 text-dimText">BLOB HOLDERS</p>
          <p className="stats-values ml-2">21.15</p>
        </div>
      </div>
    );
  };
  return (
    <Dashboard>
      <div className="flex flex-col mx-6 my-3">
        {Header()}
        <div className="flex w-full gap-5 mt-6">
          <Graph title="Feed Pool" numbers={"30,454"} half />
          <Graph
            title="Total fed to Blob"
            numbers={"26,456,454"}
            half
            // connect
          />
        </div>
        <Graph title="Payout to Blob Share Holders" numbers={"126,454"} />
        {/* multiline graphs */}
        <Graph title={"DAO Revenue"} numbers={"266,454"} breakdown />
        <Graph title={"Treasury Assets"} numbers={"26,456,454"} breakdown />
        <Graph title={"BLOB Supply"} numbers={"9,856,545,554,326"} breakdown />
      </div>
    </Dashboard>
  );
}
