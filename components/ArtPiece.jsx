import { ArtPieceImage, ArtPieceLabel, ArtPieceLink, ArtPieceWrapper } from "./StyledComponents";
import FavButton from "./FavButton";

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
        <FavButton />
        <ArtPieceLabel>{`"${name}" by ${artist}`}</ArtPieceLabel>
      </ArtPieceLink>
    </ArtPieceWrapper>
  );
}
