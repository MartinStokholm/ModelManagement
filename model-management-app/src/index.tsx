import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "./auth/AuthProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
