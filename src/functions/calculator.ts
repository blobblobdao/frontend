import FeedingABI from "@/functions/feeding.abi.json";
import { erc20ABI } from "wagmi";

export const FEEDING_CONTRACT = "0xb53738138A755A5f577110396a71ba6b8AE91363";

export const FEED_CONTRACT_CONFIG_WAGMI = {
  address: FEEDING_CONTRACT,
  abi: FeedingABI,
};

export const META_DATA_CONFIG = {
  contracts: [
    // @ts-ignore
    {
      ...FEED_CONTRACT_CONFIG_WAGMI,
      functionName: "baseGrowthRate",
    },
    // @ts-ignore
    {
      ...FEED_CONTRACT_CONFIG_WAGMI,
      functionName: "growthRateIncrease",
    },
    // @ts-ignore
    {
      ...FEED_CONTRACT_CONFIG_WAGMI,
      functionName: "feedPoolRewardThreshold",
    },
  ],
};

export const BALANCE_OF_TOKENS = {
  contracts: [
    // @ts-ignore
    {
      address: "0xbb8c06c895d7dfc373d2e6b78a546192312ceeba",
      abi: erc20ABI,
      functionName: "balanceOf",
      args: ["0xb53738138a755a5f577110396a71ba6b8ae91363"],
    },
    {
      address: "0xbb8c06c895d7dfc373d2e6b78a546192312ceeba",
      abi: erc20ABI,
      functionName: "balanceOf",
      args: ["0xb53738138a755a5f577110396a71ba6b8ae91363"],
    },
    {
      address: "0xbb8c06c895d7dfc373d2e6b78a546192312ceeba",
      abi: erc20ABI,
      functionName: "balanceOf",
      args: ["0xb53738138a755a5f577110396a71ba6b8ae91363"],
    },
    {
      address: "0xbb8c06c895d7dfc373d2e6b78a546192312ceeba",
      abi: erc20ABI,
      functionName: "balanceOf",
      args: ["0xb53738138a755a5f577110396a71ba6b8ae91363"],
    },
    // {
    //   address: "0x6982508145454ce325ddbe47a25d4ec3d2311933",
    //   abi: erc20ABI,
    //   functionName: "balanceOf",
    //   args: ["0xb53738138a755a5f577110396a71ba6b8ae91363"],
    // },
    // {
    //   address: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
    //   abi: erc20ABI,
    //   functionName: "balanceOf",
    //   args: ["0xb53738138a755a5f577110396a71ba6b8ae91363"],
    // },
    // {
    //   address: "0x7d8146cf21e8d7cbe46054e01588207b51198729",
    //   abi: erc20ABI,
    //   functionName: "balanceOf",
    //   args: ["0xb53738138a755a5f577110396a71ba6b8ae91363"],
    // },
    // {
    //   address: "0x9bf1d7d63dd7a4ce167cf4866388226eeefa702e",
    //   abi: erc20ABI,
    //   functionName: "balanceOf",
    //   args: ["0xb53738138a755a5f577110396a71ba6b8ae91363"],
    // },
    // {
    //   address: "0x955d5c14c8d4944da1ea7836bd44d54a8ec35ba1",
    //   abi: erc20ABI,
    //   functionName: "balanceOf",
    //   args: ["0xb53738138a755a5f577110396a71ba6b8ae91363"],
    // },
  ],
};
