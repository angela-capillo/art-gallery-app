import PageWrapper from "@/components/PageWrapper";
import SpotlightArtPiece from "@/components/SpotlightArtPiece";

export default function HomePage({ artPieces, favorites, onToggleFavorite }) {

  return (
    <PageWrapper>
      <h1>Spotlight</h1>
      <SpotlightArtPiece
        artPieces={artPieces}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </PageWrapper>
  );
}
