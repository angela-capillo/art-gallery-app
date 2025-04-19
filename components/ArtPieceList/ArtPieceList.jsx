import ArtPiece from "../ArtPiece/ArtPiece";
import { ArtPieceList } from "../StyledComponents/StyledComponents";

export default function ArtPiecesList({ artPieces, favorites, onToggleFavorite, onlyFavs = false }) {

  const filteredArtPieces = onlyFavs
  ? artPieces.filter(({ slug }) => favorites.includes(slug))
  : artPieces;

  return (
    <ArtPieceList>
      {filteredArtPieces.map(({ slug, name, artist, imageSource }) => (
        <ArtPiece
          key={slug}
          slug={slug}
          name={name}
          artist={artist}
          image={imageSource}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </ArtPieceList>
  );
}
