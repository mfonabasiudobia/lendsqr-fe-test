import "@/styles/globals.scss";
import "@/styles/global.css";
import "react-modern-drawer/dist/index.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
