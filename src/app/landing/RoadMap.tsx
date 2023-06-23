import React from "react";
export default function RoadMap() {
  const data = [
    {
      number: 1,
      date: "June 2023",
      title: "Build",
      list: [
        "Develop smart contracts for Blob and Blob Share",
        "Assemble core team and advisors",
        "Complete external security audit of smart contracts",
        "Build out website and social media presence",
        <div>
          Team doxx to{" "}
          <a
            href="https://assuredefi.com"
            target="_blank"
            className="underline"
          >
            assuredefi.com
          </a>
        </div>,
      ],
    },
    {
      number: 2,
      date: "July 2023",
      title: "Launch",
      list: [
        "Deploy contracts to Ethereum Mainnet",
        "Conduct vested private sale of Blob tokens to early supporters",
        "Presale Marketing Push",
        "Launch Blob on Uniswap",
        "Deploy protocol owned liquidity for Blob and earn trading fees",
        "Launch initial governance features allowing Blob Share holders to vote on major decisions",
      ],
    },
    {
      number: 3,
      date: "August 2023",
      title: "Grow",
      list: [
        "Begin deploying treasury funds to yield-generating activities",
        "Uniswap launch marketing push",
        "Blob expansion to other blockchains",
        "Enable Blob to feed on meme coins from any EVM chain",
        "Continued community growth and engagement activities",
        "Expand the team and recruit community managers and moderators",
      ],
    },
    {
      number: 4,
      date: "Q3 2023",
      title: "Optimize",
      list: [
        "Upgrade Website",
        "Your Blob page. (get your own pet blob in dashboard)",
        "Utility NFTs",
        "Large Marketing Campaign",
      ],
    },
    {
      number: 5,
      date: "Q4 2023",
      title: "Ascend",
      list: [
        "Explore and execute partnerships with other DeFi projects and DAOs",
        "DAO starts seed investments in promising DeFi projects",
        "Develop and launch DAO infrastructure DApps",
        "Launch upgraded DAO governance features",
        "Build the first DeFi Venture Studio",
      ],
    },
    {
      number: 6,
      date: "BULL RUN 2024",
      title: "TBA",
      list: [],
    },
  ];
  return (
    <div style={{ maxWidth: "1200px" }}>
      <div className="roadmap-title text-primary desktop:text-[64px] mobile:text-4xl desktop:mt-24 desktop:mb-16 mobile:my-10">
        Road<span className=" text-whiteText">map</span>
      </div>

      {data.map((item, index) => (
        <>
          <div className="ml-2 mobile:hidden desktop:flex ">
            <p
              className={
                data.length - 1 == index
                  ? "text-primary w-[98px] roadmap-listDate"
                  : "text-dimText w-[98px] roadmap-listDate"
              }
            >
              {item?.date}
            </p>
            <ol className="relative border-t  mt-3 border-t-dimText text-dimText ml-4 ">
              <li className="mb-10 ml-4 w-[80px]"></li>
            </ol>
            <ol className="relative border-l border-l-dimText text-dimText">
              <li className="mb-10 ml-4">
                <div className="mb-1 roadmap-listTitle ml-5  text-2xl">
                  <span className=" text-primary">{item?.number}.</span>
                  <span className=" text-whiteText ml-2">{item?.title}</span>
                </div>
                <ul className="ml-16 list-disc">
                  {item?.list?.map((point) => (
                    <li className="mb-2 roadmap-listItem text-base">{point}</li>
                  ))}
                </ul>
              </li>
            </ol>
          </div>

          <div className="mobile:inline desktop:hidden">
            <div className="flex justify-between items-center mx-4">
              <div className="mb-2 roadmap-listTitle text-lg  ">
                <span className=" text-primary">{item?.number}.</span>
                <span className=" text-whiteText ml-2">{item?.title}</span>
              </div>
              <p
                className={
                  data.length - 1 == index
                    ? "text-primary w-[98px] roadmap-listDate"
                    : "text-dimText w-[98px] roadmap-listDate"
                }
              >
                {item?.date}
              </p>
            </div>
            <ul className="mx-10 list-disc mb-5">
              {item?.list?.map((point) => (
                <li className="mb-2 roadmap-listItem text-dimText text-xs">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </>
      ))}
    </div>
  );
}
