import create from "zustand";

const useModalAuthenticationStore = create((set) => ({
   open: false,
   openModal: () => set({ open: true }),
   closeModal: () => set({ open: false }),
}));

export function useModalAuthenticationValue() {
   return useModalAuthenticationStore((store) => store.open);
}

export function useSetModalAuthentication() {
   const openModal = useModalAuthenticationStore((store) => stre.openModal);
   const closeModal = useModalAuthenticationStore((store) => stre.closeModal);
   return {
      openModal,
      closeModal,
   };
}
