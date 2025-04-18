import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ArtPiecesList from "@/components/ArtPieceList";
import PageWrapper from "@/components/PageWrapper";

export default function Gallery({ artPieces, favorites, onToggleFavorite }) {

  return (
    <PageWrapper>
      <h1>Gallery</h1>
      <ArtPiecesList
      artPieces={artPieces}
      favorites={favorites}
      onToggleFavorite={onToggleFavorite}/>
    </PageWrapper>
  );
}
