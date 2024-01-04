import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./graphql";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Error, Module } from "./pages";
import { Box } from "@mui/material";
import { Navigation } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Box width="100vw" height="100vh" display="flex">
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/404" element={<Error />} />
            <Route path="/modules/:moduleId" element={<Module />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ApolloProvider>
  </React.StrictMode>
);
