import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

import { create } from "../../redux/store";
import { ErrorBoundary } from "../ErrorBoundary";

// do this here so we can break out the configs and other components
// into a new repo that can be shared
const { store, persistor } = create({ storage });

export function AppProviders({ children }: any) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </Provider>
    </PersistGate>
  );
}
