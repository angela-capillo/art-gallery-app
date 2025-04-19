import { ArtPieceImage, ArtPieceDetailWrapper } from "./StyledComponents";
import PageWrapper from "./PageWrapper";
import FavButton from "./FavButton";
import Palette from "./Palette";
import styled from "styled-components";

const DetailTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  max-width: 320px;
  margin: 1rem 0 0.5rem;
  color: #222;
  text-align: center;
`;

const DetailAuthor = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #444;
  margin: 0 0 0.5rem;
  text-align: center;
`;

const DetailGenre = styled.p`
  font-size: 0.95rem;
  font-weight: 300;
  color: #888;
  margin: 0 0 0.25rem;
  text-align: center;
  font-style: italic;
`;

const DetailYear = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin: 0 0 1rem;
  text-align: center;
`;

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
  //console.log("col", colors);
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
