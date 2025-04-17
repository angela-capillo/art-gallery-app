import { ArtPieceImage } from "./StyledComponents";

export default function ArtPieceDetail({ name, artist, image, year }) {
  return (
    <div>
      <ArtPieceImage
        src={image}
        height={200}
        width={300}
        alt={name + " by " + image}
      />
      <h1>{name}</h1>
      <p>{artist}</p>
      <p>{year}</p>
    </div>
  );
}
