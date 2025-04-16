import Image from "next/image";
import { useState, useEffect } from "react";

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
    <>
      <h1>Gallery</h1>
      <ul>
        <li>
          <Image />
          <button></button>
          <p></p>
        </li>
      </ul>
    </>
  );
}
