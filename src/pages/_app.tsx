import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { initGA, logPageView } from "~/utils/analytics";
import ReactGA from "react-ga";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize("G-BJBVE01M5K");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return <Component {...pageProps} />;
}
