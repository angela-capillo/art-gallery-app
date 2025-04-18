import ArtPiece from "@/components/ArtPiece";
import { useState, useEffect } from "react";

export default function SpotlightArtPiece({ artPieces }) {
  const [randomArtPiece, setRandomArtPiece] = useState(null);

  //console.log("outside use effect", randomArtPiece);

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  useEffect(() => {
    setRandomArtPiece(getRandomElement(artPieces));

    //console.log("inside use effect", randomArtPiece);
    
  }, [artPieces])

  if (!artPieces || artPieces.length === 0) {
    return <p>No art pieces to show yet.</p>;
  }

  //let randomArtPiece = getRandomElement(artPieces);
  //console.log("random", randomArtPiece);
  //console.log("slug", randomArtPiece.slug);

  return (
    randomArtPiece &&<ArtPiece
      slug={randomArtPiece.slug}
      name={randomArtPiece.name}
      artist={randomArtPiece.artist}
      image={randomArtPiece.imageSource}
    />
  );
}
