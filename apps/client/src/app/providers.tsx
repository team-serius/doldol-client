"use client";

import { ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from "@tanstack/react-query";
import { Toast } from "@ui/components";
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
    mutations: {
      retry: false,
    },
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <HydrationBoundary>
          {children}
          <Toast />
        </HydrationBoundary>
      </CookiesProvider>
    </QueryClientProvider>
  );
}
