import ArtPiece from "./ArtPiece";
import styled from "styled-components";

const ArtPieceList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 16px;
  max-width: 360px;
`;

export default function ArtPiecesList({ artPieces, favorites, onToggleFavorite }) {
  return (
    <ArtPieceList>
      {artPieces && // we check if artPieces exists (aka if it is true) and if yes we do a map loop through the array to show the art pieces
        artPieces.map(({ slug, name, artist, imageSource }) => (
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
