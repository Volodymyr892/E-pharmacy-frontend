import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import { productsReducer } from "./products/slice";
import storage from "redux-persist/lib/storage";
import { storesReducer } from "./pharmacies/slice";


const persistConfig = {
    key: "products",
    storage
};

const persistedProductsReducer = persistReducer(persistConfig, productsReducer);

export const store = configureStore({
    reducer: {
        products: persistedProductsReducer,
        sotres: storesReducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            },
        }),
});

export const persistor = persistStore(store);