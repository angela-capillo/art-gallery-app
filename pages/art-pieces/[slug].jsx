import PageWrapper from "@/components/PageWrapper";
import { ArtPieceLink } from "@/components/StyledComponents";
import ArtPieceDetail from "@/components/ArtPieceDetail";
import { useRouter } from "next/router";
import Head from "next/head";

export default function DetailsPage({ artPieces }) {

    const router = useRouter();
    const { slug } = router.query;

    const currentArtPiece = artPieces.find((artPiece) => artPiece.slug === slug);

    if (!currentArtPiece) {
        return null;
        }

    return (
        <>
        <Head>
		    <title>{currentArtPiece.name}</title>
	    </Head>
        <PageWrapper>
         <ArtPieceLink href="/art-pieces">Back to art pieces</ArtPieceLink>
         <ArtPieceDetail
            name={currentArtPiece.name}
            artist={currentArtPiece.artist}
            image={currentArtPiece.imageSource}
            year={currentArtPiece.year}
            />
        </PageWrapper>
        </>
    )
}