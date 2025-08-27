import { create } from "zustand";

interface GlobalStore {
  // Values
  appLoading: boolean;
  openPublicNav: boolean;

  // Actions
  toggleAppLoading: (val?: boolean) => void;
  togglePublicNav: (val?: boolean) => void;
}

const useGlobalStore = create<GlobalStore>((set, get) => ({
  // Values
  appLoading: true,
  openPublicNav: false,

  // Actions
  toggleAppLoading(val) {
    set({ appLoading: val || !get().appLoading });
  },
  togglePublicNav(val) {
    set({ openPublicNav: val || !get().openPublicNav });
  },
}));

export default useGlobalStore;
