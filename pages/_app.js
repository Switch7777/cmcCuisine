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
        const size = 64; // Standard favicon size
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");

        // Background
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, size, size);

        // Maintain aspect ratio (contain strategy)
        const imgAspect = img.width / img.height;
        let drawWidth, drawHeight;

        if (imgAspect > 1) {
          // Wider than tall
          drawWidth = size * 0.9; // 90% of width to leave a small margin
          drawHeight = drawWidth / imgAspect;
        } else {
          // Taller than wide (or square)
          drawHeight = size * 0.9;
          drawWidth = drawHeight * imgAspect;
        }

        const x = (size - drawWidth) / 2;
        const y = (size - drawHeight) / 2;

        ctx.drawImage(img, x, y, drawWidth, drawHeight);

        // Update favicon links
        const dataUrl = canvas.toDataURL("image/png");
        const faviconLinks = document.querySelectorAll("link[rel*='icon']");
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
