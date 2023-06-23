"use client";

import Header from "@/components/Header";
import Footer from "@/app/landing/Footer";
import Security from "@/app/landing/Security";
import Slide1 from "@/app/landing/Slide1";
import Slide2 from "@/app/landing/Slide2";
import Slide3 from "@/app/landing/Slide3";
import Slide4 from "@/app/landing/Slide4";
import Socials from "@/app/landing/Socials";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import RoadMap from "./landing/RoadMap";
import { WagmiConfig } from "wagmi";
import { config } from "@/helpers/wagmi.config";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import Landing from "./landing";

export default function Home() {
  return (
    <WagmiConfig config={config}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Landing />
        </PersistGate>
      </Provider>
    </WagmiConfig>
  );
}
