"use client";
import React, { useState, useEffect } from "react";
import Dashboard from "@/Layout/Dashboard";
import ConnectWallet from "@/components/ConnectWallet";
import { LineConfig } from "@ant-design/plots/es/components/line";

import dynamic from "next/dynamic";
import "./index.css";
import Button from "@/components/Button";
import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";
export default function Stake() {
  const Line: React.ComponentType<LineConfig & React.RefAttributes<unknown>> =
    dynamic(() => import("@ant-design/plots").then((mod) => mod.Line) as any, {
      ssr: false,
    });

  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: false,
    yAxis: false,
    legend: false,
  };

  const TABLE_HEAD = ["ASSET", "AMOUNT", "WARM UP PERIOD", "CLAIMABLE IN"];

  const TABLE_ROWS = [
    {
      asset: "Blob Share",
      amount: "2,661,789,604 BLOBs",
      period: "7 days started 02/07/2023",
      claimableIn: "0d 0hrs 0mins",
      cancel: "cancel",
    },
  ];
  return (
    <Dashboard>
      <div className="mx-6 my-3 ">
        <ConnectWallet />
        <div className="flex flex-col w-full items-center">
          <div className="w-2/3 my-[48px]">
            {/* graph area */}
            <div className="graphDiv">
              <div className="mb-14 pt-6 mx-8 flex justify-between ">
                <p className=" text-primary graphHeading">
                  Blob Share Holder Payouts
                  <span className=" text-primary mx-4 graphHeading">1D</span>
                  <span className="unSelectedRange mx-4 graphHeading">1M</span>
                  <span className="unSelectedRange mx-4 graphHeading">1Y</span>
                </p>
                <p className="text-dimText graphHeadingLeft">
                  Percentage of BLOB staked{" "}
                  <span className="ml-3.5 graphHeadingLeft">est APY 19%</span>
                </p>
              </div>
              {/* @ts-ignore */}

              <Line
                {...config}
                color={"#CAFC5F"}
                className="graph"
                style={{
                  height: 200,
                }}
              />
            </div>
            <div className="desktop:flex w-full justify-between gap-2 mt-2">
              {/* first column */}
              <div className="flex-col card-dim-bg py-8 w-1/2 h-[307px] mobile:mt-2 desktop:mt-0">
                <div className="flex flex-col desktop:items-start mobile:items-center px-8">
                  <div className=" flex self-center w-2/3 justify-evenly ">
                    <p className=" text-primary stakeOptions stakeTextOptions">
                      Stake
                    </p>
                    <p className=" text-dimText stakeTextOptions">Unstake</p>
                    <p className=" text-dimText stakeTextOptions">Info</p>
                  </div>

                  <div className="flex justify-between w-full items-center mt-6 inputContainer">
                    <input placeholder="0.00" className="inputField" />
                    <Button>Blob</Button>
                  </div>

                  <div className="flex justify-between w-2/4 mt-3">
                    <p className=" text-primary percentText">25%</p>
                    <p className=" text-dimText percentText">50%</p>
                    <p className=" text-dimText percentText">75%</p>
                    <p className=" text-dimText percentText">Max</p>
                  </div>
                  <p className=" text-dimText  mobile:text-center desktop:text-left mt-16 shortText">
                    Stake BLOB to receive BLOBs (Blob Share) BLOBs grants users
                    access to a proportional share of the Treasury monthly
                    revenue and governance power.
                  </p>
                  <Button className=" mt-3 ">Stake</Button>
                </div>
              </div>

              {/* second column */}
              <div className="flex-col card-dim-bg py-8 w-1/2 h-[307px] mobile:mt-2 desktop:mt-0">
                <div className="flex flex-col desktop:items-start mobile:items-center px-8">
                  <div className="flex w-full justify-between">
                    <div className="flex items-center">
                      <p className=" text-whiteText blobTxt">BLOBs</p>
                      <p className="ml-2 text-dimText balanceTxt">BALANCE</p>
                    </div>
                    <p className=" text-whiteText blobTxtNumbers">
                      820,241,432
                    </p>
                  </div>
                  <div className="flex w-full justify-between mt-4">
                    <div className="flex items-center">
                      <p className=" text-whiteText blobTxt">BLOB</p>
                      <p className="ml-2 text-dimText balanceTxt">BALANCE</p>
                    </div>
                    <p className=" text-whiteText blobTxtNumbersBelow">
                      20,253,265
                    </p>
                  </div>
                  <div className="flex w-full justify-between mt-4">
                    <p className=" text-dimText cardDetails">
                      Your % Ownership of treasury revenue.
                    </p>
                    <p className=" text-dimText blobTxtNumbersBelow cardDetails">
                      6.25%
                    </p>
                  </div>
                  <div className="flex w-full justify-between mt-4">
                    <p className=" text-dimText cardDetails">Est. 1M Payout</p>
                    <p className=" text-dimText blobTxtNumbersBelow cardDetails">
                      30,254
                    </p>
                  </div>
                  <div className="flex w-full justify-between mt-4">
                    <p className=" text-dimText cardDetails">Next Payout</p>
                    <p className=" text-dimText blobTxtNumbersBelow cardDetails">
                      2 hrs, 22mins 1,534
                    </p>
                  </div>
                  <div className="flex w-full justify-between mt-4">
                    <p className=" text-whiteText blobTxt">Claimable</p>
                    <div className="flex">
                      <Image
                        alt="usdc"
                        src={"/coin-usdc-logo.svg"}
                        width={16}
                        height={16}
                      />
                      <p className=" text-whiteText blobTxtNumbersBelow ml-2">
                        4,165.02
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between mt-7 items-center">
                    <Button className=" w-[204px]">Claim</Button>
                    <p className=" text-dimText shortText">Reinvest</p>
                    <p className=" text-dimText shortText">Auto Reinvest</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tableDiv h-full mt-4 py-6 px-8">
              <p className=" text-primary tableHeading">
                Your Active BLOBs Claim
              </p>
              {/* 
            <Card className="h-full w-full "> */}
              <table className="w-full min-w-max table-auto text-left ">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th key={head} className="pt-6 pb-2">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className=" text-dimText tableDataHeading"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(
                    ({ asset, amount, period, claimableIn }, index) => (
                      <tr key={asset} className="even:bg-blue-gray-50/50">
                        <td className="pb-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="tableDataFirst text-whiteText"
                          >
                            {asset}
                          </Typography>
                        </td>
                        <td className="pb-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="tableDataFirst text-whiteText"
                          >
                            {amount}
                          </Typography>
                        </td>
                        <td className="pb-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="tableDataFirst text-whiteText"
                          >
                            {period}
                          </Typography>
                        </td>
                        <td className="pb-4">
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue"
                            className="tableDataFirst text-primary"
                          >
                            {claimableIn}
                          </Typography>
                        </td>
                        <td className="pb-4">
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue"
                            className=" text-dimText"
                          >
                            Cancel
                          </Typography>
                        </td>
                        <td className="pb-4">
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue"
                            className=" text-dimText"
                          >
                            <Button>Claim</Button>
                          </Typography>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
              {/* </Card> */}
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
