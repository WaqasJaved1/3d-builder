import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { ThreeDModelProvider } from "./model-provider";
import { store } from "../store";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
      },
    },
  });
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThreeDModelProvider>{children}</ThreeDModelProvider>
      </QueryClientProvider>
    </Provider>
  );
};
