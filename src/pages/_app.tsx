import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { initGA, logPageView } from "~/utils/analytics";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    initGA();
    logPageView();
    router.events.on("routeChangeComplete", logPageView);

    return () => {
      router.events.off("routeChangeComplete", logPageView);
    };
  }, []);

  return <Component {...pageProps} />;
}
