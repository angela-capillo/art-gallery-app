import ArtPiece from "@/components/ArtPiece";
import { useState, useEffect } from "react";

export default function SpotlightArtPiece({
  artPieces,
  favorites,
  onToggleFavorite,
}) {
  const [randomArtPiece, setRandomArtPiece] = useState(null);

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  useEffect(() => {
    setRandomArtPiece(getRandomElement(artPieces));
  }, [artPieces]);

  if (!artPieces || artPieces.length === 0) {
    return <p>No art pieces to show yet.</p>;
  }

  return (
    randomArtPiece && (
      <ArtPiece
        slug={randomArtPiece.slug}
        name={randomArtPiece.name}
        artist={randomArtPiece.artist}
        image={randomArtPiece.imageSource}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    )
  );
}
