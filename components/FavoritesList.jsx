import ArtPiece from "./ArtPiece";
import { ArtPieceList } from "./StyledComponents";

export default function FavoritesList({ favorites, onToggleFavorite }) {
  return (
    <ArtPieceList>
      {favorites && // we check if artPieces exists (aka if it is true) and if yes we do a map loop through the array to show the art pieces
        favorites.map(({ slug, name, artist, imageSource }) => (
          <ArtPiece
            key={slug}
            slug={slug}
            name={name}
            artist={artist}
            image={imageSource}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          ></ArtPiece>
        ))}
    </ArtPieceList>
  );
}
