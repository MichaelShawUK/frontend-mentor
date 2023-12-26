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
          return reward.id === action.payload.id;
        });
        const remaining = state.rewards[index].remaining;
        if (remaining) {
          state.rewards[index] = {
            id: action.payload.id,
            remaining: remaining - 1,
          };
        } else {
          state.rewards[index] = { id: action.payload.id, remaining: null };
        }
        if (action.payload.amount) state.totalRaised += action.payload.amount;
        state.totalBackers++;
      }
    },
  },
});

export const { addPledge } = fundingSlice.actions;
export default fundingSlice.reducer;
