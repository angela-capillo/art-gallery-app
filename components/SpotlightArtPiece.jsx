import ArtPiece from "@/components/ArtPiece";

export default function SpotlightArtPiece({ artPieces }) {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  if (!artPieces || artPieces.length === 0) {
    return <p>No art pieces to show yet.</p>;
  }

  let randomArtPiece = getRandomElement(artPieces);
  console.log("random", randomArtPiece);
  console.log("slug", randomArtPiece.slug);

  return (
    <ArtPiece
      slug={randomArtPiece.slug}
      name={randomArtPiece.name}
      artist={randomArtPiece.artist}
      image={randomArtPiece.imageSource}
    />
  );
}
