import "../styles/globals.css";
import { Layout } from "../components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SearchContextProvider } from "../context/searchContext";
import { ProductContextProvider } from "../context/ProductsContext";
const MyApp = ({ Component, pageProps }) => (
  <SearchContextProvider>
    <ProductContextProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          pauseOnHover
          closeOnClick
          theme="light"
        />
      </Layout>
    </ProductContextProvider>
  </SearchContextProvider>
);

export default MyApp;
