import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ArtPiecesList from "@/components/ArtPieceList";
import PageWrapper from "@/components/PageWrapper";

// const PageWrapper = styled.div` // moved this to a component so I can use it for other pages too
// display: flex;
// flex-direction: column;
// align-items: center;
// `;

export default function Gallery({ artPieces }) {
  //const [artPieces, setArtPieces] = useState(""); // out big time state variable; lifted to app to serve other pages

//   useEffect(() => { // lifted to app to serve other pages
//     // moving the function inside the useEffect so it can fetch the data after render
//     async function fetchArtPieces() {
//       // this is the function that we use to fetch the artwork data from the api
//       const response = await fetch("https://example-apis.vercel.app/api/art");
//       const data = await response.json();
//       //console.log(data);
//       setArtPieces(data);
//     }
//     fetchArtPieces();
//   }, []);

  //console.log("bla", artPieces);

  return (
    <PageWrapper>
      <h1>Gallery</h1>
      <ArtPiecesList artPieces={artPieces} />
    </PageWrapper>
  );
}
