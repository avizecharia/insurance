import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveClaim } from "./redux/store";

export default function App() {
  const y = useSelector((st: any) => st.treasure);
  const dis = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      console.log();
      dis(approveClaim({ id: "", amount: 10000}), 2500);
    });
  }, []);
  return <div>App{y}</div>;
}
