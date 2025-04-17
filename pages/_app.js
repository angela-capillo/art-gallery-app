import GlobalStyle from "../styles";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {

  const [artPieces, setArtPieces] = useState([]); // out big time state variable; lifted to app to serve other pages; had to change it into an array because guess what, I had some issues :D

  useEffect(() => { // lifted to app to serve other pages
    // moving the function inside the useEffect so it can fetch the data after render
    async function fetchArtPieces() {
      // this is the function that we use to fetch the artwork data from the api
      const response = await fetch("https://example-apis.vercel.app/api/art");
      const data = await response.json();
      //console.log(data);
      setArtPieces(data);
    }
    fetchArtPieces();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps}
      artPieces={artPieces} />
    </>
  );
}
