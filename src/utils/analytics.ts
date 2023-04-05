import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-BJBVE01M5K");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
