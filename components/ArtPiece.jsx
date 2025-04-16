import styled from "styled-components";
import Image from "next/image";

const ArtPieceWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #000;
`;

const ArtPieceImage = styled(Image)`
 width: 300px;
 height: 200px;
 object-fit: contain;
`;

const ArtPieceLabel = styled.p`
  max-width: 300px;
  font-size: 0.825rem;
  text-align: center;
`;

export default function ArtPiece({ slug, name, artist, image }) {
  return (
    <ArtPieceWrapper >
      <ArtPieceImage src={image} height={200} width={300} alt={name + " by " + image}/>
      <button></button>
      <ArtPieceLabel>{`"${name}" by ${artist}`}</ArtPieceLabel>
    </ArtPieceWrapper>
  );
}
