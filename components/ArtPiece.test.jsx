// what do we want to test here:

// slug,
// name,
// artist,
// image,  <-- all these should be rendered properly
// link to detail page should also give the correct href
// onToggleFavorite, <-- this function is called when the button is clicked

import ArtPiece from "./ArtPiece";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const artPieceTestData = {
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
    <ArtPiece
      slug={artPieceTestData.slug}
      name={artPieceTestData.name}
      artist={artPieceTestData.artist}
      image={artPieceTestData.imageSource}
      favorites={[]}
      onToggleFavorite={() => {}}
    />
  );

  const image = screen.getByAltText(
    "Orange Red and Green Abstract Painting by Steve Johnson"
  );
  expect(image).toBeInTheDocument();

  const label = screen.getByText(
    `"Orange Red and Green Abstract Painting" by Steve Johnson`
  );
  expect(label).toBeInTheDocument();
});

test("the link gives the correct attribute", () => {
  render(
    <ArtPiece
      slug={artPieceTestData.slug}
      name={artPieceTestData.name}
      artist={artPieceTestData.artist}
      image={artPieceTestData.imageSource}
      favorites={[]}
      onToggleFavorite={() => {}}
    />
  );

  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", "/art-pieces/orange-red-and-green");
});

test("calls onToggleFavorite prop function when FavButton is clicked", async () => {
  const user = userEvent.setup();
  const testToggleFavorite = jest.fn();

  render(
    <ArtPiece
      slug={artPieceTestData.slug}
      name={artPieceTestData.name}
      artist={artPieceTestData.artist}
      image={artPieceTestData.imageSource}
      favorites={[]}
      onToggleFavorite={testToggleFavorite}
    />
  );

  const button = screen.getByRole("button");
  await user.click(button);

  expect(testToggleFavorite).toHaveBeenCalledTimes(1);
});
