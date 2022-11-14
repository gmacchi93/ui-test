import "@/styles/globals.css";
import "@/styles/main.css";
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import awsExports from "@/src/aws-exports";
import { store } from "store";
import { Provider } from "react-redux";
Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}><Component {...pageProps} /></Provider>;
}
