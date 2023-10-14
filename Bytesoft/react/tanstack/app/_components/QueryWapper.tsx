"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import React from "react";

const queryClient = new QueryClient();

interface Props extends React.PropsWithChildren {}

const QueryWapper = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryWapper;
