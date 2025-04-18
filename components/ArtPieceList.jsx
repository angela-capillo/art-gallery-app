import ArtPiece from "./ArtPiece";
import { ArtPieceList } from "./StyledComponents";

export default function ArtPiecesList({ artPieces, favorites, onToggleFavorite, onlyFavs = false }) {

  const filteredArtPieces = onlyFavs // we actually put the filter logic for the favorite list component in a variable here so we use it later in the map
  ? artPieces.filter(({ slug }) => favorites.includes(slug))
  : artPieces;

  return (
    // <ArtPieceList>
    //   {artPieces && // we check if artPieces exists (aka if it is true) and if yes we do a map loop through the array to show the art pieces
    //     artPieces.map(({ slug, name, artist, imageSource }) => (
    //       <ArtPiece
    //         key={slug}
    //         slug={slug}
    //         name={name}
    //         artist={artist}
    //         image={imageSource}
    //         favorites={favorites}
    //         onToggleFavorite={onToggleFavorite}
    //       ></ArtPiece>
    //     ))}
    // </ArtPieceList>
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
