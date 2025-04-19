import { ArtPieceImage, ArtPieceDetailWrapper } from "./StyledComponents";
import PageWrapper from "./PageWrapper";
import FavButton from "./FavButton";

export default function ArtPieceDetail({ name, artist, image, year, genre, slug, favorites,
  onToggleFavorite }) {
  return (
    <PageWrapper>
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
        <h1>{name}</h1>
        <p>{artist}</p>
        <p>{genre}</p>
        <p>{year}</p>
      </ArtPieceDetailWrapper>
    </PageWrapper>
  );
}
