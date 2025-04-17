import Link from "next/link";
import styled from "styled-components";


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
