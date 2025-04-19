import ArtPiecesList from "@/components/ArtPieceList/ArtPieceList";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

export default function Gallery({ artPieces, favorites, onToggleFavorite }) {
  return (
    <PageWrapper>
      <h1>Gallery</h1>
      <ArtPiecesList
        artPieces={artPieces}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </PageWrapper>
  );
}
