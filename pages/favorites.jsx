import PageWrapper from "@/components/PageWrapper/PageWrapper";
import ArtPiecesList from "@/components/ArtPieceList/ArtPieceList";

export default function Favorites({ artPieces, favorites, onToggleFavorite }) {
  if (!favorites || favorites.length === 0) {
    return (
      <PageWrapper>
        <h1>Favorites</h1>
        <p>No favorites to show yet!</p>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <h1>Favorites</h1>
      <ArtPiecesList
        artPieces={artPieces}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
        onlyFavs={true}
      />
    </PageWrapper>
  );
}
