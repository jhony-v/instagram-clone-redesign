import create from "zustand"

const useMakePictureStore = create((set) => ({
   state: {
      open: false,
      option: "photo",
   },
   open: (option = "photo") => set((store) => ({
         ...store,
         state: {
            ...store.state,
            open: true,
            option
         },
    })),
   close: () => set((store) => ({
         ...store,
         state: {
            ...store.state,
            open: false,
         },
    })),
   select : (option) => set(store => ({
           state : {
               ...store.state,
               option
           }
   }))
}));


export function useDispatchMakeCustomPicture() {
   return useMakePictureStore(store => ({
       open : store.open,
       close : store.close
   }));
};

export function useDispatchSelectOptionMakeCustomPicture() {
    return useMakePictureStore(store => store.select);
}
