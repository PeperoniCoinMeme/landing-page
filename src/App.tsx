import { useState } from "react";
import LandingPage from "./views/LandingPage";
import { Helmet } from "react-helmet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Helmet>
        <title>$Peperoni – Meme-first on Solana</title>
        <meta
          name="description"
          content="Peperoni is the permissionless meme-first token built on Solana. Join the revolution."
        />
        <meta property="og:title" content="$Peperoni" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta
          property="og:description"
          content="Meme-first utility on Solana."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <LandingPage />
    </>
  );
}

export default App;
