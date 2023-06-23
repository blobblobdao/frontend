import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TokenState {
  owner: string;
  ownerBalance: number;
  totalSupply: number;
  holders: number;
}

const initialState: TokenState = {
  owner: "",
  ownerBalance: 0,
  totalSupply: 0,
  holders: 0,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    resetFeedConfig: (state) => state,
    setOwner: (state, action: PayloadAction<string>) => {
      state.owner = action.payload;
    },
    setOwnerBalance: (state, action: PayloadAction<any>) => {
      state.ownerBalance = action.payload;
    },
    setTotalSupply: (state, action: PayloadAction<any>) => {
      state.totalSupply = action.payload;
    },
    setHolders: (state, action: PayloadAction<any>) => {
      state.holders = action.payload;
    },
  },
});

export const { setTotalSupply, setOwner, setOwnerBalance, setHolders } =
  tokenSlice.actions;

export default tokenSlice.reducer;
