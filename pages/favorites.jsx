import FavoritesList from "@/components/FavoritesList";
import PageWrapper from "@/components/PageWrapper";

export default function Favorites({ favorites, onToggleFavorite }) {

  return (
    <PageWrapper>
      <h1>Favorites</h1>
      <FavoritesList
      favorites={favorites}
      onToggleFavorite={onToggleFavorite}/>
    </PageWrapper>
  );
}