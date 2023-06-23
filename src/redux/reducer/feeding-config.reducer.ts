import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FeedingConfigState {
  threshold: number;
  baseGrowth: number;
  increaseGrowth: number;
  feedPool: number;
  totalValueFed: number;
  tokensPrice: Array<any>;
}

const initialState: FeedingConfigState = {
  threshold: 0,
  baseGrowth: 0,
  increaseGrowth: 0,
  feedPool: 0,
  totalValueFed: 0,
  tokensPrice: [],
};

export const feedingConfigSlice = createSlice({
  name: "feedingConfig",
  initialState,
  reducers: {
    resetFeedConfig: (state) => state,
    setThreshold: (state, action: PayloadAction<number>) => {
      state.threshold = action.payload;
    },
    setBaseGrowth: (state, action: PayloadAction<number>) => {
      state.baseGrowth = action.payload;
    },
    setIncreaseGrowth: (state, action: PayloadAction<number>) => {
      state.increaseGrowth = action.payload;
    },
    setFeedPool: (state, action: PayloadAction<number>) => {
      state.feedPool = action.payload;
    },
    setTotalValueFed: (state, action: PayloadAction<number>) => {
      state.totalValueFed = action.payload;
    },
    setConfig: (
      state,
      action: PayloadAction<{
        threshold: number;
        baseGrowth: number;
        increaseGrowth: number;
      }>
    ) => {
      state.baseGrowth = action.payload.baseGrowth;
      state.threshold = action.payload.threshold;
      state.increaseGrowth = action.payload.increaseGrowth;
    },
    setTokenPrices: (state, action: PayloadAction<any>) => {
      state.tokensPrice = action.payload;
    },
  },
});

export const {
  resetFeedConfig,
  setThreshold,
  setBaseGrowth,
  setIncreaseGrowth,
  setConfig,
  setTokenPrices,
  setFeedPool,
  setTotalValueFed,
} = feedingConfigSlice.actions;

export default feedingConfigSlice.reducer;
