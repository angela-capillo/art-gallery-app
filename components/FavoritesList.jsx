import ArtPiece from "./ArtPiece";
import { ArtPieceList } from "./StyledComponents";

export default function FavoritesList({ artPieces, favorites, onToggleFavorite }) {
    console.log(favorites)
  return (
    <ArtPieceList>
      {artPieces && // we check if artPieces exists (aka if it is true) and if yes we do a map loop through the array to show the art pieces
        artPieces.filter(({ slug }) => favorites.includes(slug))
        .map(({ slug, name, artist, imageSource }) => (
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
