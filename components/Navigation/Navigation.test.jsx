// what do we want to test here:

// links are rendered with the proper href <- needs to mock router?
// import MyComponent from ".";
// /* ... likely more imports here ... */

// jest.mock("next/router", () => ({
//   useRouter() {
//     return {
//       push: jest.fn(), <--- we don't need this tho, we should have something that mocks the current page
//       asPath: "/",     <--- we don't need this tho
//     };
//   },
// }));

// test("should render", () => {
//   /* ... test here ... */
// });

// /* ... likely more tests here ... */

import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/art-pieces",
    };
  },
}));

test("renders navigation links with correct hrefs", () => {
  render(<Navigation />);

  const spotlightLink = screen.getByRole("link", { name: "Spotlight" });
  expect(spotlightLink).toHaveAttribute("href", "/");

  const galleryLink = screen.getByRole("link", { name: "Gallery" });
  expect(galleryLink).toHaveAttribute("href", "/art-pieces");

  const favoritesLink = screen.getByRole("link", { name: "Favorites" });
  expect(favoritesLink).toHaveAttribute("href", "/favorites");
});
