import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {

  const [artPieces, setArtPieces] = useState([]); // out big time state variable; lifted to app to serve other pages; had to change it into an array because guess what, I had some issues :D
  //const [isFavorite, setIsFavorite] = useState(false); // this state var we need for the fav button NO!
  const [favorites, setFavorites] = useState([]); // let's use something like this to create an array of fav items cause the above won't work
  console.log(favorites);
  
  
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

  // function toggleFavoriteButton() {
  //   setIsFavorite(!isFavorite);
  // }

  function toggleFavorite(slug) { // ok this thing works in a way that

    const isAlreadyFavorite = favorites.includes(slug); // checks whether the artwork is included in the array of favs
  
    if (isAlreadyFavorite) {  // if yes uses the filter thingy to create a new array without the fav artwork if its slug is the same as slug
      const updatedFavorites = favorites.filter(
        (favoriteSlug) => favoriteSlug !== slug
      );
      //console.log(updatedFavorites);
      setFavorites(updatedFavorites);

    } else {//

      const updatedFavorites = [...favorites, slug]; // if no we create a new array with the old stuff + the new fav
      setFavorites(updatedFavorites);
    }
  }

  

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps}
      artPieces={artPieces}
      favorites={favorites}
      onToggleFavorite={toggleFavorite} />
      <Navigation />
    </>
  );
}
