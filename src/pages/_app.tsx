import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/home.scss";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "../styles/about.scss";
import "../styles/contact.scss";
import "../styles/navbar.scss";
import "../styles/profileCard.scss";
import "../styles/projects.scss";
import "../styles/skills.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
