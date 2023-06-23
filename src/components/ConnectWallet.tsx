"use client";
import React, { useState } from "react";
import Button from "./Button";
import "./index.css";
import Image from "next/image";
export default function ConnectWallet() {
  const [isOpen, setIsopen] = useState(false);

  const TogglesidebarLeft = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <div className="mobile:mr-4 desktop:mr-0 flex w-full justify-end">
        <Button className="" onClick={TogglesidebarLeft}>
          Connect Wallet
        </Button>
      </div>

      <div className="container-fluid mt-3">
        <div className={`sidebarLeft ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <h4
              className="mb-0"
              style={{
                color: "#CAFC5F",
              }}
            >
              Connect Wallet
            </h4>
            <div className="btn btn-primary" onClick={TogglesidebarLeft}>
              <i className="fa fa-times"></i>
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li className="flex flex-row">
                <Image
                  src="/Metamask-logo.svg"
                  alt="metamasklogo"
                  width={14}
                  height={13}
                />
                <a className="sd-link">MetaMask</a>
              </li>
              <li className="flex flex-row">
                <Image
                  src="/wallet-connect-logo.svg"
                  alt="WalletConnect"
                  width={14}
                  height={13}
                />
                <a className="sd-link">Wallet Connect</a>
              </li>
              {/* <li className="flex flex-row">
                <Image
                  src="/trust_logo.svg"
                  alt="trustlogo"
                  width={14}
                  height={13}
                />
                <a className="sd-link">Trust</a>
              </li> */}
              {/* <li className="flex flex-row">
                <Image
                  src="/coinbase-wallet-logo.svg"
                  alt="coinbaselogo"
                  width={14}
                  height={13}
                />
                <a className="sd-link">Coinbase Wallet</a>
              </li> */}
              {/* <li className="flex flex-row">
                <Image
                  src="/imtoken-logo.svg"
                  alt="imtoken"
                  width={14}
                  height={13}
                />
                <a className="sd-link">imToken</a>
              </li> */}
            </ul>
          </div>
        </div>
        <div
          className={`sidebarLeft-overlay ${isOpen == true ? "active" : ""}`}
          onClick={TogglesidebarLeft}
        ></div>
      </div>
    </>
  );
}
