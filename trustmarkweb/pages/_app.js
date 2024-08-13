import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { kanit } from "../styles/fonts";

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${kanit.className}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
