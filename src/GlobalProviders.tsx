"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import EstimateModalContextProvider from "./modules/estimate-modal/EstimateModal.context";
import GeolocatorContextProvider from "./modules/geolocator/Geolocator.context";
import SearchContextProvider from "./modules/search/Search.context";
import { store } from "./store/store";

/*
const DynamicSearchContext = dynamic(() => import("./modules/search/Search.context").then((mod) => mod), {
  ssr: false,
  // loader: () => <>carregando...</>,
});
*/

function GlobalProviders({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GeolocatorContextProvider>
          <SearchContextProvider>
            <EstimateModalContextProvider>{children}</EstimateModalContextProvider>
          </SearchContextProvider>
          <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
        </GeolocatorContextProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default GlobalProviders;
