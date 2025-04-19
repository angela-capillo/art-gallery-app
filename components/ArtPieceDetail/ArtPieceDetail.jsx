import {
  ArtPieceImage,
  ArtPieceDetailWrapper,
} from "../StyledComponents/StyledComponents";
import FavButton from "../FavButton/FavButton";
import Palette from "../Palette/Palette";
import {
  DetailAuthor,
  DetailGenre,
  DetailTitle,
  DetailYear,
} from "../StyledComponents/StyledComponents";

export default function ArtPieceDetail({
  name,
  artist,
  image,
  year,
  genre,
  slug,
  favorites,
  onToggleFavorite,
  colors,
}) {
  return (
    <ArtPieceDetailWrapper>
      <ArtPieceImage
        src={image}
        height={200}
        width={300}
        alt={`${name} by ${artist}`}
      />
      <FavButton
        slug={slug}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
      <Palette colors={colors} />
      <DetailTitle>{name}</DetailTitle>
      <DetailAuthor>{artist}</DetailAuthor>
      <DetailGenre>{genre}</DetailGenre>
      <DetailYear>{year}</DetailYear>
    </ArtPieceDetailWrapper>
  );
}
