import {
  ArtPieceImage,
  ArtPieceDetailWrapper,
} from "../StyledComponents/StyledComponents";
import PageWrapper from "../PageWrapper/PageWrapper";
import FavButton from "../FavButton/FavButton";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const artDetailTestData = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: "2018",
  genre: "Abstract Painting",
  colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
  dimensions: {
    height: 2432,
    width: 1920,
    type: "jpg",
  },
};

test("renders the art piece image and text", () => {
  render(
    <ArtPieceDetailWrapper>
      <ArtPieceImage
        src={artDetailTestData.imageSource}
        height={200}
        width={300}
        alt={`${artDetailTestData.name} by ${artDetailTestData.artist}`}
      />
      <FavButton
        slug={artDetailTestData.slug}
        favorites={[]}
        onToggleFavorite={() => {}}
      />
      <h1>{artDetailTestData.name}</h1>
      <p>{artDetailTestData.artist}</p>
      <p>{artDetailTestData.genre}</p>
      <p>{artDetailTestData.year}</p>
    </ArtPieceDetailWrapper>
  );

  const image = screen.getByAltText(
    "Orange Red and Green Abstract Painting by Steve Johnson"
  );
  expect(image).toBeInTheDocument();

  const title = screen.getByText("Orange Red and Green Abstract Painting");
  expect(title).toBeInTheDocument();

  const artist = screen.getByText("Steve Johnson");
  expect(artist).toBeInTheDocument();

  const genre = screen.getByText("Abstract Painting");
  expect(genre).toBeInTheDocument();

  const year = screen.getByText("2018");
  expect(year).toBeInTheDocument();
});

test("calls onToggleFavorite prop function when FavButton is clicked", async () => {
  const user = userEvent.setup();
  const testToggleFavorite = jest.fn();

  render(
    <PageWrapper>
      <ArtPieceDetailWrapper>
        <ArtPieceImage
          src={artDetailTestData.imageSource}
          height={200}
          width={300}
          alt={`${artDetailTestData.name} by ${artDetailTestData.artist}`}
        />
        <FavButton
          slug={artDetailTestData.slug}
          favorites={[]}
          onToggleFavorite={testToggleFavorite}
        />
        <h1>{artDetailTestData.name}</h1>
        <p>{artDetailTestData.artist}</p>
        <p>{artDetailTestData.genre}</p>
        <p>{artDetailTestData.year}</p>
      </ArtPieceDetailWrapper>
    </PageWrapper>
  );

  const button = screen.getByRole("button");
  await user.click(button);

  expect(testToggleFavorite).toHaveBeenCalledTimes(1);
});
