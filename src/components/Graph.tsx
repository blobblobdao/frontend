"use client";
import React, { useEffect, useState } from "react";

import { Card, Typography } from "@material-tailwind/react";
import { AreaConfig } from "@ant-design/plots/es/components/area";
import { LineConfig } from "@ant-design/plots/es/components/line";
import dynamic from "next/dynamic";
import Button from "@/components/Button";
const TABLE_HEAD = ["Value", "Blockchain", "Value", "Blockchain"];

const TABLE_ROWS = [
  {
    name: "Blob Share",
    job: "2,661,789,604 BLOBs",
    date: "7 days",
  },
  {
    name: "Blob Share",
    job: "2,661,789,604 BLOBs",
    date: "7 days",
  },
  {
    name: "Blob Share",
    job: "2,661,789,604 BLOBs",
    date: "7 days",
  },
  {
    name: "Blob Share",
    job: "2,661,789,604 BLOBs",
    date: "7 days",
  },
  {
    name: "Blob Share",
    job: "2,661,789,604 BLOBs",
    date: "7 days",
  },
  {
    name: "Blob Share",
    job: "2,661,789,604 BLOBs",
    date: "7 days",
  },
];

const Area: React.ComponentType<AreaConfig & React.RefAttributes<unknown>> =
  dynamic(() => import("@ant-design/plots").then((mod) => mod.Line) as any, {
    ssr: false,
  });
const Line: React.ComponentType<LineConfig & React.RefAttributes<unknown>> =
  dynamic(() => import("@ant-design/plots").then((mod) => mod.Line) as any, {
    ssr: false,
  });
export default function Graph(props: any) {
  const { breakdown, half, connect } = props;
  const [dataSingle, setDataSingle] = useState([]);
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  useEffect(() => {
    asyncFetchSingle();
  }, []);

  const asyncFetchSingle = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setDataSingle(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const configSingle = {
    data: dataSingle,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: false,
    yAxis: false,
    legend: false,
  };

  const config = {
    data: breakdown ? data : dataSingle,

    xField: breakdown ? "date" : "Date",
    yField: breakdown ? "value" : "scales",
    seriesField: breakdown ? "country" : "",

    xAxis: {
      grid: { line: false },
    },
    yAxis: {
      grid: {
        line: null,
      },
    },
    padding: "auto",

    legend: false,
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const tableHeight = expanded ? "400px" : "200px";
  return (
    <>
      <div
        className={`flex flex-col ${breakdown ? "graphDivLarge" : "graphDiv"} ${
          expanded ? "expanded" : ""
        } ${half ? "w-1/2" : "w-full mt-4"} p-4 `}
      >
        <div className="mb-8 flex justify-between">
          <div>
            <p className=" text-primary graphHeading">{props.title}</p>
            <p className=" text-whiteText graphHeading">${props.numbers}</p>
          </div>
          <div>
            <div>
              <span className=" text-primary mx-4 graphHeadingLeft">1D</span>
              <span className="unSelectedRange mx-4 graphHeadingLeft">1M</span>
              <span className="unSelectedRange mx-4 graphHeadingLeft">1Y</span>
            </div>
            {connect && <Button className="mt-1">Connect</Button>}
          </div>
        </div>
        {/* @ts-ignore */}

        <Line
          {...config}
          style={{
            height: breakdown ? 500 : 200,
          }}
          className="graph"
          color="#CAFC5F"
        />
        {breakdown && (
          <>
            <div
              style={{
                overflowY: "auto",
                height: expanded ? "300px" : "100px",
              }}
              className={`table-container ${expanded ? "expanded" : ""}`}
            >
              <table
                className="w-full min-w-max text-left"
                style={{ height: tableHeight }}
              >
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th key={head} className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="leading-none opacity-70 text-dimText "
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(({ name, job, date }, index) => (
                    <tr key={name} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-dimText"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-dimText"
                        >
                          {job}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-dimText"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue"
                          className="font-medium text-dimText"
                        >
                          Edit
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Button
              className="w-[150px] self-center "
              onClick={handleExpandClick}
            >
              Breakdown +
            </Button>
          </>
        )}
      </div>
    </>
  );
}
