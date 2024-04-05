"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "./store/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={makeStore}>{children}</Provider>;
}
