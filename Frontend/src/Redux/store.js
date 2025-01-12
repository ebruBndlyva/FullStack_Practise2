
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { memberApi } from "./services/MemberApi";

export const store = configureStore({
    reducer: {
        [memberApi.reducerPath]: memberApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(memberApi.middleware),
}
)
setupListeners(store.dispatch)