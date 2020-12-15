import create from "zustand";

export const PROFILE_TABS = {
   POSTS: "POSTS",
   SAVED: "SAVED",
   TAGED: "TAGED",
};

const useTabsStore = create((set) => ({
   currentTab: PROFILE_TABS.POSTS,
   selectCurrentTab: (currentTab) => set(() => ({ currentTab })),
}));

export function useChangeTabsNavigationValue() {
   return useTabsStore((state) => state.currentTab);
}

export function useSetChangeTabsNavigationStore() {
   return useTabsStore((state) => state.selectCurrentTab);
}
