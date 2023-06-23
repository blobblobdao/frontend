"use client";

import React from "react";
import "./index.css";
import Button from "@/components/Button";
import Image from "next/image";

function Slide3() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="flex flex-col items-center mb-10"
        style={{ marginTop: "178px" }}
      >
        <p
          className="heading-md-2 text-center mobile:text-4xl desktop:text-5xl"
          id="features"
        >
          Revenue Generating Treasury
        </p>
        <p className="slide-description w-10/12 text-center mt-6">
          Stake your Blob and receive Blob Share, our governance token, and join
          us as community owners of our treasury. Blob Share holders reap
          proportional rewards from treasury revenue.
        </p>
      </div>
      <div className="flex desktop:flex-row mobile:flex-col items-center justify-between card-dim-bg">
        <div className="flex flex-col items-center desktop:w-6/12 desktop:px-10 my-10 mx-10 ">
          <p className="text-heading-big text-center mobile:text-3xl desktop:text-4xl ">
            Portfolio Balancing
          </p>
          <p className="text-caption text-center">
            Leveraging Modern Portfolio Theory, Blob DAO strategically
            diversifies its crypto portfolio, balances risk, and maximizes
            growth by wisely timing market trends.
          </p>
          {/* <Button className="desktop:w-4/12 mobile:w-6/12 ">
            More About RGT
          </Button> */}
        </div>
        <Image
          alt="portfolio"
          src="/portfolio-balancing-2.svg"
          width={600}
          height={200}
        />
      </div>
      <div className="desktop:flex desktop:justify-between mt-2 gap-2">
        {/* community Governed */}
        <div className="flex desktop:flex-col mobile:flex-col-reverse items-center justify-between card-dim-bg desktop:pb-20 desktop:pt-10 desktop:w-6/12 mobile:pt-8">
          <Image
            alt="community"
            src="/CommunityGoverned.svg"
            width={400}
            height={50}
          />
          <div className="flex flex-col items-start desktop:px-16 mobile:px-7">
            <p className="text-heading-big mobile:text-center desktop:text-left mobile:text-3xl desktop:text-4xl">
              Community Owned
            </p>
            <p className="text-caption mobile:text-center desktop:text-left ">
              Ownership in BlobDAO is symbolized through Blob Shares, our
              governance token that is received when you stake your Blob tokens.
              This doesn't merely provide a ticket to community decision-making,
              it's your personal stake in our growing treasury. As a Blob Share
              holder, you are a part-owner of the treasury, and its success is
              your success.
            </p>
          </div>
        </div>
        {/* staking */}
        <div className="flex flex-col desktop:w-6/12 justify-between gap-2 mobile:mt-2 desktop:mt-0">
          <div className="flex-col card-dim-bg py-10 w-full h-full">
            <div className="flex flex-col desktop:items-start mobile:items-center px-16">
              <Image alt="staking" src="/staking.svg" width={39} height={39} />
              <p className="text-heading-small mt-3 ">Staking</p>
              <p className="text-caption mt-3 mobile:text-center desktop:text-left">
                Our strategy includes staking top-tier cryptocurrencies like
                Ethereum and Cosmos, which not only generates regular income but
                also allows for asset appreciation over time.
              </p>
            </div>
          </div>

          <div className="flex-col card-dim-bg py-10 w-full h-full">
            <div className="flex flex-col desktop:items-start mobile:items-center px-16">
              <Image alt="investing" src="/bank.svg" width={39} height={39} />
              <p className="text-heading-small mt-3">Seed Investing</p>
              <p className="text-caption mt-3 mobile:text-center desktop:text-left">
                BlobDAO actively participates in seed investing, harnessing
                promising new DeFi projects to expand our portfolio, drive
                innovation, and yield robust returns for our community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="desktop:flex w-full justify-between gap-2 mt-2">
        <div className="flex-col card-dim-bg py-10 w-full h-full">
          <div className="flex flex-col desktop:items-start mobile:items-center px-16">
            <Image alt="staking" src="/liquidity.svg" width={39} height={39} />
            <p className="text-heading-small mt-3">Liquidity Providing</p>
            <p className="text-caption mt-3 mobile:text-center desktop:text-left">
              BlobDAO strategically invests treasury assets into liquidity
              pools, fostering market vibrancy in DeFi spaces and generating
              substantial yield from trading fees.
            </p>
          </div>
        </div>
        <div className="flex-col card-dim-bg py-10 w-full h-full mobile:mt-2 desktop:mt-0">
          <div className="flex flex-col desktop:items-start mobile:items-center px-16">
            <Image alt="lending" src="/lending.svg" width={39} height={39} />
            <p className="text-heading-small mt-3">Pitch Deck</p>
            <p className="text-caption mt-3 mobile:text-center desktop:text-left">
              Got a brilliant business idea? Pitch it to the community. If they
              like it and vote YES, you'll receive funding, and a slice of that
              revenue will enrich our treasury.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide3;
