import { configureStore } from "@reduxjs/toolkit";
import { claimsSlice, policySlice, treasureSlice } from "./slices";

export default configureStore({
  reducer: {
    treasure: treasureSlice.reducer,
    claims: claimsSlice.reducer,
    policies: policySlice.reducer,
  },
});

export const {
  addNewClaim,
  addNewPolicy,
  approveClaim,
  deletePolicy,
  updatePolicy,
} = {
  ...treasureSlice.actions,
  ...claimsSlice.actions,
  ...policySlice.actions,
};
