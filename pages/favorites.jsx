import FavoritesList from "@/components/FavoritesList";
import PageWrapper from "@/components/PageWrapper";

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
      <FavoritesList
        artPieces={artPieces}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </PageWrapper>
  );
}
