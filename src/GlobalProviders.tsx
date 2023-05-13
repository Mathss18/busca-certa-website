"use client";

import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import EstimateModalContextProvider from "./modules/estimate-modal/EstimateModal.context";
import { store } from "./store/store";

const DynamicSearchConterxt = dynamic(() => import("./modules/search/Search.context").then((mod) => mod), {
  ssr: false,
  // loader: () => <>carregando...</>,
});

function GlobalProviders({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <DynamicSearchConterxt>
          <EstimateModalContextProvider>{children}</EstimateModalContextProvider>
        </DynamicSearchConterxt>
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
      </QueryClientProvider>
    </Provider>
  );
}

export default GlobalProviders;
