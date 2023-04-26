import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const NestedLayout = Component.Layout || EmptyLayout;
  return (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  );
}
