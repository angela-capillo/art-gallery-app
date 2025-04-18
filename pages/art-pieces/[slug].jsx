import PageWrapper from "@/components/PageWrapper";
import { NavigationLink } from "@/components/StyledComponents";
import ArtPieceDetail from "@/components/ArtPieceDetail";
import { useRouter } from "next/router";
import Head from "next/head";
import FavButton from "@/components/FavButton";

export default function DetailsPage({
  artPieces,
  favorites,
  onToggleFavorite,
}) {

  const router = useRouter();
  const { slug } = router.query;

console.log("slug from router", slug);
console.log("arr", artPieces);

  const currentArtPiece = artPieces.find((artPiece) => artPiece.slug === slug);

  //console.log("curr", slug);

  if (!currentArtPiece) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{currentArtPiece.name}</title>
      </Head>
      <PageWrapper>
        <ArtPieceDetail
          name={currentArtPiece.name}
          artist={currentArtPiece.artist}
          image={currentArtPiece.imageSource}
          year={currentArtPiece.year}
          genre={currentArtPiece.genre}
          slug={currentArtPiece.slug}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
        <NavigationLink href="/art-pieces">Back to art pieces</NavigationLink>
      </PageWrapper>
    </>
  );
}