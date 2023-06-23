import "@/styles/reset.css";
import "@/styles/globals.css";
import { wrapper } from "../app/store";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
