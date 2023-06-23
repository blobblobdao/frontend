"use client";

import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import "./index.css";
import { BLOB_PRICE } from "@/helpers/constants";
import { convertBlobToUSD } from "@/helpers/helpert";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function Slide1() {
  const {
    feeding: { feedPool, threshold, totalValueFed },
    token: { totalSupply, ownerBalance, holders },
  } = useSelector((state: RootState) => state);

  const totalFed = () => {
    let percentage = (feedPool / threshold) * 100;
    return percentage;
  };

  const renderText = () => {
    if (totalFed() < 50) {
      return "HUNGRY";
    } else if (totalFed() > 75) {
      return "FED";
    } else if (totalFed() > 50 && totalFed() <= 75) {
      return "SATISFIED";
    }
  };

  const Stats = (props: any) => (
    <div className="mt-6">
      <div className="flex items-center">
        <Image src={props.icon} width={15} height={15} alt="icons" />
        <p className="stats-graph-titles ml-1">{props.heading}</p>
      </div>
      <p className="stats-values">
        <span>{props.unit}</span>
        {props.value}
      </p>
      <Image src={props.graph} width={200} height={25} alt="icons" />
    </div>
  );

  const renderCard = () => {
    return (
      <div className="stats-card mt-2 mx-4 desktop:w-full mobile:w-11/12 desktop:ml-32">
        <p className="stats-titles">BLOB IS</p>
        <p className="gradient-text">{renderText()}</p>
        <div className="">
          <div className="progress-bar-outer">
            <div
              className="progress-bar-inner"
              style={{ width: totalFed() + "%" }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <p className="stats-titles">FED</p>
            <p className="stats-titles">HUNGRY</p>
          </div>
        </div>
        <div className="desktop:block mobile:flex mobile:gap-10">
          <Stats
            icon="/total-fed.svg"
            heading="total value fed"
            value={totalValueFed}
            unit="$"
            graph="/GraphDummy.svg"
          />
          <Stats
            icon="/total-fed.svg"
            heading="Market cap"
            value={convertBlobToUSD(totalSupply - ownerBalance).toFixed()}
            unit="$"
            graph="/GraphDummy.svg"
          />
        </div>
        <div className="desktop:block mobile:flex mobile:gap-10">
          <Stats
            icon="/fdv.svg"
            heading="FDV"
            value={(totalSupply * BLOB_PRICE).toFixed()}
            unit="$"
            graph="/GraphDummy.svg"
          />
          <Stats
            icon="/holders.svg"
            heading="Holders"
            value={holders}
            unit=""
            graph="/GraphDummy.svg"
          />
        </div>
      </div>
    );
  };
  return (
    <div style={{ height: "100vh" }}>
      <div className="blob-main-container">
        <p className="meet-blob">Meet</p>
        <p className="blob-main-heading">BLOB</p>
        <p className="unstoppable-text">
          The unstoppable meme DAO that{" "}
          <span className="primary-text">eats</span> meme coins.
        </p>
      </div>
      <Spline
        // scene="https://prod.spline.design/Bufwzr-RhtP0GbcP/scene.splinecode"
        scene="https://prod.spline.design/GA3EQOZ3euCC945K/scene.splinecode"
      />
      {renderCard()}
      <div className="blurry-container desktop:block mobile:hidden" />
    </div>
  );
}

export default Slide1;
