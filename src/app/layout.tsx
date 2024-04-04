import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./store/store";
import StoreProvider from "./StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <div>{children}</div>
            <ToastContainer />
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
