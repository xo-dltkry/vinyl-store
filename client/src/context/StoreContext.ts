import { createContext, useContext } from "react";
import UserStore from "../store/UserStore";
import VinylStore from "../store/VinylStore";

export interface IStoreContext {
  user: UserStore;
  vinyl: VinylStore;
}

export const Context = createContext<IStoreContext | null>(null);

export function useStore() {
  const store = useContext(Context);
  if (!store) {
    throw new Error("useStore must be used within <Context.Provider>");
  }
  return store;
}
