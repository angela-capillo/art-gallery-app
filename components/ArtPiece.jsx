import {
  ArtPieceImage,
  ArtPieceLabel,
  ArtPieceLink,
  ArtPieceWrapper,
} from "./StyledComponents";
import FavButton from "./FavButton";

export default function ArtPiece({
  slug,
  name,
  artist,
  image,
  favorites,
  onToggleFavorite,
}) {
  return (
    <ArtPieceWrapper>
      <FavButton
        slug={slug}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
      <ArtPieceLink href={`/art-pieces/${slug}`}>
        <ArtPieceImage
          src={image}
          height={200}
          width={300}
          alt={`${name} by ${artist}`}
        />
        <ArtPieceLabel>{`"${name}" by ${artist}`}</ArtPieceLabel>
      </ArtPieceLink>
    </ArtPieceWrapper>
  );
}
