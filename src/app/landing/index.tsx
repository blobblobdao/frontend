import React from "react";
import { useEffect } from "react";
import { useContractReads, useContractRead } from "wagmi";
import { BALANCE_OF_TOKENS, META_DATA_CONFIG } from "@/functions/calculator";
import { formatEther } from "viem";
import { useDispatch } from "react-redux";
import {
  setBaseGrowth,
  setFeedPool,
  setIncreaseGrowth,
  setThreshold,
  setTokenPrices,
  setTotalValueFed,
} from "@/redux/reducer/feeding-config.reducer";
import Header from "@/components/Header";
import Footer from "@/app/landing/Footer";
import Security from "@/app/landing/Security";
import Slide1 from "@/app/landing/Slide1";
import Slide2 from "@/app/landing/Slide2";
import Slide3 from "@/app/landing/Slide3";
import Slide4 from "@/app/landing/Slide4";
import Socials from "@/app/landing/Socials";
import RoadMap from "@/app/landing/RoadMap";
import {
  API_HOME_SCREEN_PRICING,
  COINS,
  BLOB_TOKEN_CONTRACT,
  API_HOLDERS,
} from "@/helpers/constants";
import axios from "axios";
import BlobABI from "@/functions/blob.abi.json";
import {
  setHolders,
  setOwner,
  setOwnerBalance,
  setTotalSupply,
} from "@/redux/reducer/token.reducer";

function Landing() {
  const dispatch = useDispatch();
  // @ts-ignore
  const { data, isError, isLoading } = useContractReads(META_DATA_CONFIG);
  // @ts-ignore
  const totalFedBalance = useContractReads(BALANCE_OF_TOKENS);

  const ownerAddress = useContractRead({
    address: BLOB_TOKEN_CONTRACT,
    abi: BlobABI,
    functionName: "owner",
  });

  const ownerBalance = useContractRead({
    address: BLOB_TOKEN_CONTRACT,
    abi: BlobABI,
    functionName: "balanceOf",
    args: [ownerAddress.data],
  });

  const totalSupply = useContractRead({
    address: BLOB_TOKEN_CONTRACT,
    abi: BlobABI,
    functionName: "totalSupply",
  });

  useEffect(() => {
    if (ownerAddress.data) dispatch(setOwner(ownerAddress.data as string));
    if (ownerBalance.data)
      dispatch(setOwnerBalance(formatEther(ownerBalance.data as bigint)));
    if (totalSupply.data)
      dispatch(setTotalSupply(formatEther(totalSupply.data as bigint)));
    // TODO: Remove this and get this from the contract
    dispatch(setFeedPool(25365));
  }, [totalSupply.isLoading, ownerBalance.isLoading, ownerAddress.isLoading]);

  useEffect(() => {
    if (totalFedBalance.status === "success") {
      let totalSum: any = 0;
      totalFedBalance.data?.map((item) => {
        totalSum += parseInt(formatEther(item.result as bigint));
      });
      dispatch(setTotalValueFed(totalSum));
    }
  }, [totalFedBalance.isLoading]);

  useEffect(() => {
    getTokensPrice();
    getHolders();
  }, []);

  const getTokensPrice = () => {
    axios
      .get(API_HOME_SCREEN_PRICING)
      .then((response) => {
        let data = COINS;
        let finalData = data.map((item) => {
          item.price = response.data[item.contract].usd;
          return item;
        });
        dispatch(setTokenPrices(finalData));
      })
      .catch((error) => {});
  };
  const getHolders = () => {
    axios
      .get(API_HOLDERS)
      .then((response) => {
        dispatch(setHolders(response.data.holdersCount));
      })
      .catch((error) => {});
  };

  useEffect(() => {
    if (data && !isLoading) {
      data.forEach((item, index) => {
        if (index === 0)
          dispatch(
            setBaseGrowth(parseFloat(formatEther(item.result as bigint)))
          );
        if (index === 1)
          dispatch(
            setIncreaseGrowth(parseFloat(formatEther(item.result as bigint)))
          );
        if (index === 2)
          dispatch(
            setThreshold(parseFloat(formatEther(item.result as bigint)))
          );
      });
    }
  }, [isLoading]);

  if (
    isLoading ||
    totalSupply.isLoading ||
    ownerBalance.isLoading ||
    ownerAddress.isLoading
  )
    return <div>Loading ...</div>;
  return (
    <div className="w-full">
      <Header />
      <Slide1 />
      <div className="flex flex-col items-center justify-center w-full">
        <div
          className="desktop:w-full mobile:w-11/12"
          style={{ maxWidth: "1200px" }}
        >
          <Slide2 />
          <Slide3 />
          <Slide4 />
        </div>
        <Security />
        <RoadMap />
        <div className="desktop:w-10/12" style={{ maxWidth: "1200px" }}>
          <Socials />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Landing;
