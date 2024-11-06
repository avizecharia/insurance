import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Claim, GenericPayload, Policy } from "../types/redux";
import { intialClaim, intialPolicy } from "./intials";
import { v4 } from "uuid";

export const treasureSlice = createSlice({
  name: "treasure",
  initialState: 75000,
  reducers: {
    addNewPolicy: (state: number, action: PayloadAction<GenericPayload>) => {
      state += action.payload.amount!;
    },
    deletePolicy: (state: number, action: PayloadAction<GenericPayload>) => {
      state -= action.payload.amount!;
    },
    updatePolicy: (state: number, action: PayloadAction<GenericPayload>) => {
      state += action.payload.amount!;
    },
    approveClaim: (state: number, action: PayloadAction<GenericPayload>) => {
      state -= action.payload.amount!;
    },
  },
});
export const claimsSlice = createSlice({
  name: "claims",
  initialState: [intialClaim],
  reducers: {
    addNewClaim: (state: Claim[], action: PayloadAction<GenericPayload>) => {
      state.push({
        ...action.payload,
        id: v4(),
        created_at: new Date(),
        approved: false,
      } as Claim);
    },

    approveClaim: (state: Claim[], action: PayloadAction<GenericPayload>) => {
      let claim = state.find((claim) => claim.id != action.payload.id!);
      console.log("pllppl");
      if (claim) {
        claim.approved = true;
      }
    },
  },
});
export const policySlice = createSlice({
  name: "policy",
  initialState: [intialPolicy],
  reducers: {
    addNewPolicy: (state: Policy[], action: PayloadAction<GenericPayload>) => {
      state = state.filter((policy) => policy.id != action.payload.id!);
    },
    updatePolicy: (state: Policy[], action: PayloadAction<GenericPayload>) => {
      let policy = state.find((policy) => policy.id == action.payload.id!);
      if (policy) {
        policy.price = action.payload.amount!;
      }
    },
  },
});
