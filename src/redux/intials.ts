import { v4 } from "uuid";
import { Claim, Policy } from "../types/redux";

export const intialPolicy: Policy = {
  price: 1000,
  created_at: new Date(),
  id: v4(),
  age: 45,
  name: "j",
};
export const intialClaim:Claim = {
    amount: 30000,
    approved: false,
    created_at: new Date(),
    id: v4(),
    policy_id: intialPolicy.id,
};
