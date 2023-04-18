import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/home.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Layout>
    <Component {...pageProps} />
    // </Layout>
  );
}
