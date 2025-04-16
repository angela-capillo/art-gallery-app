import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const ArtPieceList = styled.ul`
 display: flex;
 flex-direction: column;
 padding: 0;
 gap: 16px;
 max-width: 360px;
`;

const ArtPieceImage = styled(Image)`
 width: 300px;
 height: 200px;
 object-fit: contain;
`;

const ArtPieceWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #000;
`;

const ArtPieceLabel = styled.p`
  max-width: 300px;
  font-size: 0.825rem;
  text-align: center;
`;


export default function Gallery() {
  const [artPieces, setArtPieces] = useState(""); // out big time state variable

  useEffect(() => {
    // moving the function inside the useEffect so it can fetch the data after render
    async function fetchArtPieces() {
      // this is the function that we use to fetch the artwork data from the api
      const response = await fetch("https://example-apis.vercel.app/api/art");
      const data = await response.json();
      //console.log(data);
      setArtPieces(data);
    }
    fetchArtPieces();
  }, []);

  //console.log("bla", artPieces);

  return (
    <PageWrapper>
      <h1>Gallery</h1>
      <ArtPieceList>
        {artPieces && // we check if artPieces exists (aka if it is true) and if yes we do a map loop through the array to show the art pieces
          artPieces.map(({ slug, name, artist, imageSource }) => (
            <ArtPieceWrapper key={slug}>
              <ArtPieceImage src={imageSource} height={200} width={300}/>
              <button></button>
              <ArtPieceLabel>{`"${name}" by ${artist}`}</ArtPieceLabel>
            </ArtPieceWrapper>
          ))}
      </ArtPieceList>
    </PageWrapper>
  );
}
