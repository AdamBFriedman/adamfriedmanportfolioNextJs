import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/home.scss";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "../styles/contact.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
