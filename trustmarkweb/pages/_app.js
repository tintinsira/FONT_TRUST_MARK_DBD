import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { kanit } from "../styles/fonts";
import { appWithTranslation } from "next-i18next";
import "../i18n";

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${kanit.className}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default appWithTranslation(MyApp);
