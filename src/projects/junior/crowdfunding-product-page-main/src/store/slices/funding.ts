import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RemainingRewards = {
  id: number;
  remaining: number | null;
};

interface FundingState {
  totalRaised: number;
  totalBackers: number;
  rewards: RemainingRewards[];
}

const initialState: FundingState = {
  totalRaised: 69914,
  totalBackers: 5007,
  rewards: [
    {
      id: 0,
      remaining: null,
    },
    {
      id: 1,
      remaining: 101,
    },
    {
      id: 2,
      remaining: 64,
    },
    {
      id: 3,
      remaining: 0,
    },
  ],
};

const fundingSlice = createSlice({
  name: "funding",
  initialState,
  reducers: {
    addPledge: (
      state,
      action: PayloadAction<{ id: number; amount: number | null }>
    ) => {
      if (action.payload.id === 0) state.totalBackers++;
      else {
        const index = state.rewards.findIndex((reward) => {
          reward.id === action.payload.id;
        });
        const reward = state.rewards[index];
        if (reward && reward.remaining) reward.remaining--;
        if (action.payload.amount) state.totalRaised += action.payload.amount;
        state.totalBackers++;
      }
    },
  },
});

export const { addPledge } = fundingSlice.actions;
export default fundingSlice.reducer;
