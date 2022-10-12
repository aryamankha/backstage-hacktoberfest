import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Auth0Provider } from "@auth0/auth0-react";

if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development"
  // && /VIVID_ENABLED=true/.test(document.cookie)
) {
  import("vivid-studio").then((v) => v.run());
  import("vivid-studio/style.css");
}

function MyApp({ Component, pageProps }: AppProps) {

 const redirect = process.browser ? window.location.origin : "http://localhost:3000"; 
  
  return <Auth0Provider 
    domain="dev-i96d456w.us.auth0.com"
    clientId="UxI0I2d2geF82mFwkH68DoqE0FJxaRHN"
    redirectUri={redirect}
    >
  <Component {...pageProps} /> </Auth0Provider>;
}

export default MyApp;
