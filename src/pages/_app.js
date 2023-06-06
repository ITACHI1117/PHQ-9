import Layout from "@/components/Layout";
import { DataProvider } from "@/context/DataContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </>
  );
}
