import "../styles/globals.css";
import Head from "next/head";
import { LangProvider } from "../context/LangContext";
import { useEffect } from "react";

function App({ Component, pageProps }) {
  useEffect(() => {
    const generateFavicon = () => {
      const img = new Image();
      img.src = "/logoblancmoins.png";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const size = 128; // High res for favicon
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");

        // Background
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, size, size);

        // Calculate scaling to ZOOM IN on the main letters
        // We focus on the width and ignore the tagline at the bottom
        const scale = (size / img.width) * 1.8; // Increased scale to fill more width
        const x = (size - img.width * scale) / 2;
        const y = (size - img.height * scale) / 2 + (size * 0.1); // Slight downward shift to center the big letters

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

        // Update favicon links
        const faviconLinks = document.querySelectorAll("link[rel*='icon']");
        const dataUrl = canvas.toDataURL("image/png");
        faviconLinks.forEach(link => {
          link.href = dataUrl;
        });
      };
    };
    generateFavicon();
  }, []);

  return (
    <LangProvider>
      <Head>
        <title>CMC — Centre Méditerranéen de la Cuisine</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" id="dynamic-favicon" href="/logoblancmoins.png" />
      </Head>
      <Component {...pageProps} />
    </LangProvider>
  );
}

export default App;
