import Button from "@/components/Button";
import React from "react";
import { useRouter } from "next/navigation";
export default function Footer() {
  const router = useRouter();

  return (
    <div className="mobile:mx-5">
      <div className="flex justify-between items-center mt-16 ">
        <div className="desktop:flex justify-between desktop:w-4/12 mobile:w-3/12">
          <a
            className="footer-link"
            onClick={() => {
              document.getElementById("calculator")?.scrollIntoView();
            }}
          >
            Calculator
          </a>
          <a
            className="footer-link"
            onClick={() => {
              document.getElementById("features")?.scrollIntoView();
            }}
          >
            Features
          </a>
          <a
            className="footer-link"
            onClick={() => {
              document.getElementById("growth")?.scrollIntoView();
            }}
          >
            Growth
          </a>
          <a
            className="footer-link"
            onClick={() => {
              document.getElementById("open-source")?.scrollIntoView();
            }}
          >
            Open source
          </a>
          {/* <a className="footer-link">Features & benefits</a> */}
        </div>
        <Button className="w-36" onClick={() => router.push("/home")}>
          Launch App
        </Button>
      </div>
      <div className="divider mt-5 mb-5" />
      <div className="flex justify-between items-center mb-5">
        <p className="muted-text">© 2023 Blob | Beta 0</p>
        <div className="flex justify-between">
          <a className="footer-link desktop:mr-8 mobile:mr-2 ">
            Privacy Policy
          </a>
          <a className="footer-link">Terms Of Services</a>
        </div>
      </div>
    </div>
  );
}
