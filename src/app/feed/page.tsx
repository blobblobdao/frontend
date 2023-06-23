"use client";
import React, { useState, useEffect } from "react";
import Dashboard from "@/Layout/Dashboard";
import ConnectWallet from "@/components/ConnectWallet";
import { LineConfig } from "@ant-design/plots/es/components/line";

import dynamic from "next/dynamic";
import "./index.css";
import Button from "@/components/Button";
import { Card, Typography } from "@material-tailwind/react";
import ReactSlider from "react-slider";
import Image from "next/image";
const Line: React.ComponentType<LineConfig & React.RefAttributes<unknown>> =
  dynamic(() => import("@ant-design/plots").then((mod) => mod.Line) as any, {
    ssr: false,
  });
export default function Feed() {
  const [data, setData] = useState([]);
  const [days, setDays] = useState(0);

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

  const TABLE_HEAD = [
    "FED",
    "REWARD",
    "BLOB RECEIVED",
    "STAKE DURATION",
    "CLAIMABLE IN",
  ];

  const TABLE_ROWS = [
    {
      fed: "PEPE   105,000,462",
      reward: "1.46X",
      blob: "BLOB   10,000,255",
      stake: "3 days",
      claimableIn: "0d 0hrs 0mins",
      data: "Tx Hash",
    },
    {
      fed: "PEPE   55,710,451",
      reward: "1.46X",
      blob: "BLOB   10,000,255",
      stake: "2 days",
      claimableIn: "4d 12hrs 26mins",
      data: "Tx Hash",
    },
    {
      fed: "PEPE   2,844,140",
      reward: "1.46X",
      blob: "BLOB   10,000,255",
      stake: "4 days",
      claimableIn: "0d 0hrs 0mins",
      data: "Tx Hash",
    },
  ];
  return (
    <Dashboard>
      <div className="mx-6 my-3">
        <div className="flex flex-col w-full items-center">
          <ConnectWallet />
          <div className="w-2/3 my-[48px]">
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
              <div className="flex flex-col card-dim-bg py-8 w-full h-[345px]">
                <div className="flex flex-col desktop:items-start mobile:items-center px-8">
                  <div className=" flex justify-between w-full ">
                    <p className=" text-primary stakeOptions stakeTextOptions">
                      Feed Blob
                    </p>
                  </div>
                  <div className="mt-3 inputContainer">
                    <div className="flex justify-between w-full items-center ">
                      <input placeholder="0.00" className=" inputField" />
                      <Button
                        className="inputButton"
                        style={{ marginBottom: 6 }}
                      >
                        PEPE
                      </Button>
                    </div>
                    <div className="flex justify-between ">
                      <p className=" text-dimText inputContainerText">
                        $5,143.31
                      </p>
                      <p className=" text-dimText inputContainerText">
                        Balance: 105000462{" "}
                        <span className=" text-primary">Max</span>
                      </p>
                    </div>
                  </div>
                  <Image
                    alt="swap"
                    src="/swap2.svg"
                    width={32}
                    height={32}
                    style={{
                      position: "absolute",

                      alignSelf: "center",
                      marginTop: 75,
                    }}
                    onClick={() => console.log("swap")}
                  />
                  <div className=" mt-3 inputContainer">
                    <div className="flex justify-between w-full items-center">
                      <input
                        placeholder="0.00"
                        className="inputField"
                        // style={{ marginBottom: 6 }}
                      />
                      <Button style={{ marginBottom: 6 }}>BLOB</Button>
                    </div>
                    <div className="flex justify-between w-full">
                      <p className=" text-dimText inputContainerText">
                        $8,998.20
                      </p>
                      <p className=" text-dimText inputContainerText">
                        Balance: 3.155
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-2">
                    <p className=" text-dimText percentText">
                      Estimated Return
                    </p>
                    <p className=" text-primary percentText ml-2">
                      <span className=" font-bold">1.69x</span> + $2,493.2
                    </p>
                  </div>
                  <div className="w-full mt-6">
                    <ReactSlider
                      className="bg-primary"
                      trackClassName="slider-track"
                      renderThumb={(props, state) => (
                        <div {...props}>
                          <div>
                            <Image
                              alt="slider"
                              src="/slider-thumb.svg"
                              width={16}
                              height={16}
                            />
                          </div>
                          <div
                            className="absolute flex justify-center flex-col items-center"
                            style={{ bottom: 18, width: 100, left: -35 }}
                          >
                            <span className="slider-caption">{days} DAYS</span>
                          </div>
                        </div>
                      )}
                      max={7}
                      min={0}
                      onChange={(value) => setDays(value)}
                    />
                  </div>
                  <div className="flex justify-between w-full mt-4">
                    <p className="caption-text-swap text-dimText">Stake</p>
                  </div>
                  <Button className="flex w-full mt-4">Feed</Button>
                </div>
              </div>

              {/* second column */}
              <div className="flex-col card-dim-bg py-8 w-full h-[345px] mobile:mt-2 desktop:mt-0">
                <div className="flex flex-col desktop:items-start mobile:items-center px-8">
                  <div className="flex items-center">
                    <p className=" text-primary blobTxt">How it Works</p>
                    <p className="ml-3 text-dimText balanceTxt">
                      Your feed history
                    </p>
                  </div>
                  <p className="howItWorksDetail text-dimText">
                    In the Feed Protocol, meme coins are fed to Blob, or swapped
                    for BLOB tokens and depending on how hungry Blob is and the
                    longer you stake BLOB, the returns for feeding Blob grow
                    exponentially.
                  </p>
                  <p className="howItWorksDetail text-dimText">
                    Your rewards are closely tied to BLOB's market value. If
                    BLOB's value rises during your staking period, your Feed
                    reward increases proportionally. Conversely, if BLOB's value
                    drops, the dollar value of your reward decreases
                    accordingly.
                  </p>
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
                    (
                      { fed, reward, blob, stake, claimableIn, data },
                      index
                    ) => (
                      <tr key={fed} className="even:bg-blue-gray-50/50">
                        <td className="pb-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="tableDataFirst text-whiteText"
                          >
                            {fed}
                          </Typography>
                        </td>
                        <td className="pb-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="tableDataFirst text-primary"
                          >
                            {reward}
                          </Typography>
                        </td>
                        <td className="pb-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="tableDataFirst text-whiteText"
                          >
                            {blob}
                          </Typography>
                        </td>
                        <td className="pb-4">
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue"
                            className="tableDataFirst text-whiteText"
                          >
                            {stake}
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
                            {data}
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
