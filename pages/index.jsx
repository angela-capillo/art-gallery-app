import ArtPiece from "@/components/ArtPiece";
import PageWrapper from "@/components/PageWrapper";
import SpotlightArtPiece from "@/components/SpotlightArtPiece";

export default function HomePage({ artPieces }) {

  // function getRandomElement(array) { // moving this in a separate compo for spotlight
  //   return array[Math.floor(Math.random() * array.length)];
  // }

  // if (!artPieces || artPieces.length === 0) {
  //   return <p>No art pieces to show yet.</p>;
  // }

  // let randomArtPiece = getRandomElement(artPieces);
  // console.log("random", randomArtPiece);
  // console.log("slug", randomArtPiece.slug);

  return (
    <PageWrapper>
      <h1>Spotlight</h1>
      <SpotlightArtPiece artPieces={artPieces}/>
      {/* <ArtPiece slug={randomArtPiece.slug} // also this moving it in the spotlight compo
      name={randomArtPiece.name}
      artist={randomArtPiece.artist}
      image={randomArtPiece.imageSource} /> */}
    </PageWrapper>
  );
}
