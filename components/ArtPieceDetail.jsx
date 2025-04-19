import { ArtPieceImage, ArtPieceDetailWrapper } from "./StyledComponents";
import PageWrapper from "./PageWrapper";
import FavButton from "./FavButton";
import Palette from "./Palette";

export default function ArtPieceDetail({ name, artist, image, year, genre, slug, favorites,
  onToggleFavorite, colors }) {

  //console.log("col", colors);  
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
        <Palette colors={colors}/>
        <h1>{name}</h1>
        <p>{artist}</p>
        <p>{genre}</p>
        <p>{year}</p>
      </ArtPieceDetailWrapper>
    </PageWrapper>
  );
}
