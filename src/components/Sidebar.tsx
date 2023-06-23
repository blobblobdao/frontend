"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./index.css";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="flex">
      <div className="sidebar h-full sticky left-0 top-0">
        <p className="title text-whiteText ml-6 mt-6">BLOB</p>
        <div className="flex justify-between items-center">
          <Image
            src="/blobLogo.svg"
            alt="Blob Logo"
            width={71}
            height={32}
            className="ml-6 mt-4"
            onClick={() => router.push("/")}
          />
          <div className=" mr-4 mt-5">
            <p className=" text-primary text-right rewards-count">1.2X</p>
            <p className=" text-dimText text-right rewards-text">REWARDS</p>
          </div>
        </div>
        {/* progress bar */}
        <div className="h-1  bg-dimText mx-5 mt-2">
          <div className="h-1 bg-primary " style={{ width: "45%" }}></div>
        </div>
        <div className="flex justify-between mt-1 mx-5">
          <p className="stats-titles">FED</p>
          <p className="stats-titles">HUNGRY</p>
        </div>
        <div className="mx-4 mt-6 ">
          <div
            className={
              pathName == "/home" ? "bg-[#ffffff12] rounded items-center" : ""
            }
          >
            <Link
              className="flex flex-row ml-5 mb-4 h-6 "
              style={{
                alignItems: "center",
              }}
              href={"/home"}
            >
              <Image
                src={pathName == "/home" ? "/home-active.svg" : "/home.svg"}
                alt="home"
                width={9}
                height={11}
                style={{
                  marginBottom: 3,
                }}
              />
              <p className="text-dimText text-xs ml-1.5">Home</p>
            </Link>
          </div>
          <div className={pathName == "/feed" ? "bg-[#ffffff12] rounded" : ""}>
            <Link
              className="flex flex-row ml-5 mb-4 h-6"
              style={{
                alignItems: "center",
              }}
              href={"/feed"}
            >
              <Image
                src={
                  pathName == "/feed"
                    ? "/chart-bar-alt-active.svg"
                    : "/chart-bar-alt.svg"
                }
                alt="feed"
                width={10}
                height={12}
              />
              <p className="text-dimText text-xs ml-1.5">Feed Blob</p>
            </Link>
          </div>
          <div className={pathName == "/stake" ? "bg-[#ffffff12] rounded" : ""}>
            <Link
              className="flex flex-row ml-5 mb-4 h-6"
              style={{
                alignItems: "center",
              }}
              href={"/stake"}
            >
              <Image
                src={
                  pathName == "/stake"
                    ? "/coin-convert-active.svg"
                    : "/coin-convert.svg"
                }
                alt="stake"
                width={10}
                height={12}
              />
              <p className="text-dimText text-xs ml-1.5">Stake</p>
            </Link>
          </div>
          <div
            className={pathName == "/bridge" ? "bg-[#ffffff12] rounded" : ""}
          >
            <Link
              className="flex flex-row ml-5 mb-4 h-6"
              style={{
                alignItems: "center",
              }}
              href={"/bridge"}
            >
              <Image
                src={pathName == "/bridge" ? "road-active.svg" : "/road.svg"}
                alt="bridge"
                width={10}
                height={12}
              />
              <p className="text-dimText text-xs ml-1.5">Bridge</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col  ml-8 w-1/2  mr-12 absolute bottom-0">
          <a
            className="flex flex-row "
            style={{
              alignItems: "center",
              marginBottom: "16px",
            }}
            href={"https://www.dextools.io"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/chart-bar-vertical.svg"
              alt="bridge"
              width={10}
              height={12}
            />
            <p className="text-dimText text-xs ml-1.5">DEX Chart</p>
          </a>
          <div className="flex justify-between mb-5">
            <Image src="/twitter.svg" alt="twitter" width={10} height={12} />
            <Image src="/discord.svg" alt="discord" width={10} height={12} />
            <Image src="/telegram.svg" alt="telegram" width={10} height={12} />
            <Image src="/bookmark.svg" alt="bookmark" width={10} height={12} />
            <Image src="/doc.svg" alt="doc" width={10} height={12} />
          </div>
        </div>
      </div>
    </div>
  );
}
