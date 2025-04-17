import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const NavigationWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 8px;
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #bbb;
  z-index: 10;
`;

const NavigationLink = styled(Link)`
  border-radius: 16px;
  border: 1px solid #000;
  font-size: 1.2rem;
  font-weight: 400;
  color: #000;
  text-decoration: none;
  padding: 10px 20px;
  text-align: center;
  display: block;
  background-color: #f4f4f4;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  &:active {
    background-color: #333;
  }

  ${({ isDisabled }) =>
    isDisabled &&`
    color: #777;
    background-color: #ccc;
    pointer-events: none;
  `}
`;

export default function Navigation() {
  const router = useRouter(); // this bc I want to render dynamically these links like in the lotr app
  const links = [
    { href: "/", label: "Spotlight" },
    { href: "/art-pieces", label: "Gallery" },
    { href: "#", label: "Favorites" },
  ];
  const currentPage = router.pathname;

  return (
    <NavigationWrapper>
      {/* <NavigationLink href="/">Spotlight</NavigationLink>
      <NavigationLink href="/art-pieces">Gallery</NavigationLink>
      <NavigationLink href="#">Favorites</NavigationLink> */}
      {links.map((link) => {
        const isCurrentPage = currentPage === link.href; // true when it matches
        console.log(currentPage);

        return (
          <NavigationLink
            key={link.href}
            href={link.href}
            isDisabled={isCurrentPage} // is disabled when true
          >
            {link.label}
          </NavigationLink>
        );
      })}
    </NavigationWrapper>
  );
}
