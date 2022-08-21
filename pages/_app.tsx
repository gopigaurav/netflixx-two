import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../customHooks/useAuth";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AuthProvider>
        {/* Higher Order Component */}
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
}

export default MyApp;
