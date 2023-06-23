"use client";

import React, { useState, Fragment, useEffect } from "react";
import "./index.css";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import ReactSlider from "react-slider";
import {
  API_HOME_SCREEN_PRICING,
  BLOB_PRICE,
  COINS,
} from "@/helpers/constants";
import axios from "axios";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function Slide2() {
  const [days, setDays] = useState(1);

  const [assetFrom, setAssetFrom] = useState<string>("0");
  const [assetFromInDollar, setAssetFromInDollars] = useState<number>(0);
  const [assetTo, setAssetTo] = useState("0");
  const [assetToDollars, setAssetToDollars] = useState(0);
  const [rewardPercentage, setRewardPercentage] = useState(0);

  const [currentCoin, setCurrentCoin] = useState<{
    name: string;
    contract: string;
    price: number;
  }>();

  const {
    feeding: { threshold, baseGrowth, increaseGrowth, tokensPrice, feedPool },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (currentCoin && currentCoin.price) {
      setAssetFrom((assetFromInDollar / currentCoin?.price).toFixed());
      let totalReward = 0;
      const TOTAL_BLOBS = feedPool;
      const firstEq = TOTAL_BLOBS / threshold + 1;
      let secondEq = increaseGrowth * days + baseGrowth;
      secondEq = Math.pow(secondEq, days) - 1;
      totalReward = firstEq * secondEq + 1;
      const rewardInDollar = totalReward * assetFromInDollar;

      setRewardPercentage(totalReward);
      setAssetToDollars(rewardInDollar);
      setAssetTo((rewardInDollar / BLOB_PRICE).toFixed());
    }
  }, [assetFromInDollar, currentCoin?.contract, days]);

  const DropDown = () => (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 ring-gray-300">
        <span className="drop-down-text">
          {currentCoin?.name ? currentCoin.name : "Select"}
        </span>
        <Image src="/chevron-down.svg" width={10} height={15} alt="chevron" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg"
          style={{ backgroundColor: "#121215", border: "#CAFC5F 1px solid" }}
        >
          <div>
            {tokensPrice.map((item: any, index: any) => {
              return (
                <div>
                  <Menu.Item>
                    {() => {
                      return (
                        <a
                          onClick={() => {
                            setCurrentCoin(item);
                          }}
                          style={{ color: "#fff" }}
                          className={classNames(
                            "block px-4 py-2 text-sm drop-down-items"
                          )}
                        >
                          {item.name}
                        </a>
                      );
                    }}
                  </Menu.Item>
                  {index < COINS.length - 1 && <div className="divider" />}
                </div>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
  return (
    <div
      className="flex flex-col items-center justify-center mt-7"
      id="calculator"
    >
      <div className="flex flex-col items-center mb-10 desktop:mt-0 mobile:mt-72 ">
        <p className="slide2-heading desktop:text-[70px] mobile:text-[36px]">
          Blob Gets <span>Hungry</span>.
        </p>
        <p className="slide2-caption my-3 desktop:text-[24px] mobile:text-[20px]">
          Feed Blob meme coins and get a return.
        </p>
        <p className="slide-description desktop:mt-6 text-center desktop:text-[24px] mobile:text-[15px]">
          A portion of the token taxes are funneled into the Feed Pool, the more
          funds in this pool, the bigger Blob’s appetite. The hungrier Blob is
          and the longer the stake, the greater the returns.
        </p>
      </div>

      <div className="flex items-center justify-between conversion-container-first desktop:py-4 mobile:py-0 desktop:px-12 mobile:px-0">
        <div className="flex flex-col desktop:w-[300px] mobile:mx-2">
          <span className="caption-text-swap">Turn This</span>
          <span className="desktop:my-2 desktop:w-[300px] token-amount desktop:text-[48px] mobile:text-[32px]">
            {assetFrom}
          </span>
          <span className="caption-text-swap">${assetFromInDollar}</span>
        </div>
        <div className="flex items-center justify-center desktop:w-4/12 ">
          <DropDown />
        </div>
        <div className="w-8/12 mobile:hidden desktop:inline">
          <ReactSlider
            trackClassName="slider-track"
            renderThumb={(props, state) => (
              <div {...props}>
                <div>
                  <Image
                    alt="slider"
                    src="/slider-thumb.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <div
                  className="absolute flex justify-center flex-col items-center"
                  style={{ bottom: -45, width: 100, left: -40 }}
                >
                  <span className="slider-caption">${assetFromInDollar}</span>
                </div>
              </div>
            )}
            min={0}
            max={50000}
            onChange={(value) => setAssetFromInDollars(value)}
          />
          <div
            className="flex justify-between"
            style={{ marginTop: 20, marginBottom: 5 }}
          >
            <p className="slider-labels text-dimText">Fed</p>
            <p className="slider-labels text-primary">Hungry</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between conversion-container-last desktop:py-4 mobile:py-0 desktop:px-12 mobile:px-0">
        <div className="flex flex-col desktop:w-[300px] mobile:w-screen mobile:mx-2">
          <span className="caption-text-swap">Into This</span>
          <span className="my-2 token-amount desktop:text-[48px] mobile:text-[32px] desktop:w-[300px]">
            {assetTo}
          </span>
          <span className="caption-text-swap">
            ${assetToDollars.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-center w-4/12">
          <span className="drop-down-text">BLOB</span>
        </div>
        <div className="w-8/12 mobile:hidden desktop:inline">
          <ReactSlider
            trackClassName="slider-track"
            renderThumb={(props, state) => (
              <div {...props}>
                <div>
                  <Image
                    alt="slider"
                    src="/slider-thumb.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <div
                  className="absolute flex justify-center flex-col items-center"
                  style={{ bottom: -45, width: 100, left: -35 }}
                >
                  <span className="slider-caption">{days} Day(s)</span>
                </div>
              </div>
            )}
            max={7}
            min={1}
            onChange={(value) => setDays(value)}
          />
          <div
            className="flex justify-between"
            style={{ marginTop: 20, marginBottom: 5 }}
          >
            <p className="slider-labels text-dimText">1 Day</p>
            <p className="slider-labels text-dimText">7 Days</p>
          </div>
        </div>
      </div>

      {/* for mobile */}
      <div className="w-full desktop:hidden mobile:inline mobile:mt-6 ">
        <div className="flex justify-between ">
          <p className="caption-text-swap">Fed</p>
          <p className="text-primary-color">Hungry</p>
        </div>
        <ReactSlider
          trackClassName="slider-track mobile:mx-2"
          renderThumb={(props, state) => (
            <div {...props}>
              <div>
                <Image
                  alt="slider"
                  src="/slider-thumb.svg"
                  width={20}
                  height={20}
                />
              </div>
              <div
                className="absolute flex justify-center flex-col items-center"
                style={{ bottom: -45, width: 100, left: -40 }}
              >
                <span className="slider-caption">${assetFromInDollar}</span>
              </div>
            </div>
          )}
          min={0}
          max={10000}
          onChange={(value) => setAssetFromInDollars(value)}
        />
      </div>
      <div className="w-full desktop:hidden mobile:inline mobile:mt-20">
        <div className="flex justify-between">
          <p className="caption-text-swap">1 Day</p>
          <p className="caption-text-swap">7 Days</p>
        </div>
        <ReactSlider
          trackClassName="slider-track mobile:mx-2"
          renderThumb={(props, state) => (
            <div {...props} className="mobile:mx-2">
              <div>
                <Image
                  alt="slider"
                  src="/slider-thumb.svg"
                  width={20}
                  height={30}
                />
              </div>
              <div
                className="absolute flex justify-center flex-col items-center mobile:ml-2"
                style={{ bottom: -25, width: 100, left: -35 }}
              >
                <span className="slider-caption">{days} day(s)</span>
              </div>
            </div>
          )}
          max={7}
          min={1}
          onChange={(value) => setDays(value)}
        />
      </div>
      <div className="desktop:mt-6 mobile:mt-24 mobile:mb-8">
        <p className="estimated-return">
          Estimated Return{" "}
          <span className="primary-text">{rewardPercentage.toFixed(5)}x</span>
        </p>
        <p className="calculated-return">
          ${(assetToDollars - assetFromInDollar).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default Slide2;
