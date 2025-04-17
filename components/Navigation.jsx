import Link from "next/link";
import styled from "styled-components";

const NavigationWrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 8px;
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #bbb;
`;

const NavigationLink = styled(Link)`
  border-radius: 16px;
  border: 1px solid #000;
  font-size: 1.2rem;
  font-weight: 400;
  text-decoration: none;
`;

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavigationLink href="/">Spotlight</NavigationLink>
      <NavigationLink href="/art-pieces">Gallery</NavigationLink>
      <NavigationLink href="#">Favorites</NavigationLink>
    </NavigationWrapper>
  );
}
