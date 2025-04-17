import { ArtPieceImage, ArtPieceLabel, ArtPieceLink, ArtPieceWrapper } from "./StyledComponents";

export default function ArtPiece({ slug, name, artist, image }) {
  return (
    <ArtPieceWrapper>
      <ArtPieceLink href={`/art-pieces/${slug}`}>
        <ArtPieceImage
          src={image}
          height={200}
          width={300}
          alt={name + " by " + image}
        />
        <button></button>
        <ArtPieceLabel>{`"${name}" by ${artist}`}</ArtPieceLabel>
      </ArtPieceLink>
    </ArtPieceWrapper>
  );
}
