import "../styles/globals.css";
import "@/styles/custom-swal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { kanit } from "../styles/fonts";

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${kanit.className}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
